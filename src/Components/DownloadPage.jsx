import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import img1 from  '../Files/EMOTION BASED MUSIC PLAYER.png'

const DownloadPage = () => {
  const handleDownload = async () => {
    const element = document.getElementById('page-content'); // Capture the specific element
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('download.pdf');
  };

  return (
    <div>
      <div id="page-content">
      </div>
      <img src={img1} alt="Download" onClick={handleDownload} style={{width : 160, cursor: 'pointer' }} />
    </div>
  );
};

export default DownloadPage;
