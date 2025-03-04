import React from 'react';
import { useEffect } from 'react';

const Resume = () => {
  const downloadAndOpenPDF = (path) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = path.split('/').pop(); // Extracts filename from path
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Open the file after downloading
    setTimeout(() => {
      window.open(path, '_blank');
    }, 1000); // Delay to ensure the file is downloaded first
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  
  return (
    <div className="flex flex-col items-center mt-[300px] px-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-16 md:mb-24">
        Currently I'm applying for 2 Different Positions...
      </h1>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <button
          onClick={() => downloadAndOpenPDF('/Rounak-Bania-VAPT_CV.pdf')}
          className="min-w-[280px] px-6 py-3 text-base md:text-lg font-medium rounded-md border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300 whitespace-nowrap"
        >
          Penetration Tester || VAPT
        </button>
        <button
          onClick={()=> downloadAndOpenPDF('/Rounak_Bania-Front-End_CV.pdf')}
          className="min-w-[280px] px-6 py-3 text-base md:text-lg font-medium rounded-md border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
        >
          Front End Developer
        </button>
      </div>
    </div>
  );
};

export default Resume;
