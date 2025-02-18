import React from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import Services_Data from '../assets/services_data';
import arrow_icon from '../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='service' className='flex flex-col items-center justify-center gap-16 px-5 sm:px-10 lg:mx-[170px] my-16 lg:my-[80px]'>
      {/* Services Title */}
      <div className='relative text-center'>
        <h1 className='text-4xl sm:text-6xl lg:text-[80px] font-semibold px-4'>My Services</h1>
        <img className='absolute bottom-0 right-0 z-[-1] hidden lg:block' src={theme_pattern} alt="Pattern" />
      </div>

      {/* Services Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[40px] mb-16'>
        {Services_Data.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-center gap-5 p-8 lg:p-[60px] rounded-[10px] border-white border-2 cursor-pointer hover:bg-gradient-to-br from-[#3f0028] to-[#582300] hover:border-[#ff00ff] hover:scale-105 transition-transform duration-300'
          >
            <h3 className='text-lg sm:text-xl lg:text-[23px] font-semibold'>{item.title}</h3>
            <h2 className='text-2xl sm:text-3xl lg:text-[38px] font-extrabold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent'>
              {item.s_name}
            </h2>
            <p 
            className="text-[#d4d4d4] leading-6 sm:leading-8 max-w-sm break-words"
            dangerouslySetInnerHTML={{ __html: item.s_desc }}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
