import React, { useState } from 'react';
import theme_Pattern from '../assets/theme_pattern.svg';
import mywork_data from '../assets/mywork_data';
import arrow_icon from '../assets/arrow_icon.svg';
import pentest_work from '../assets/pentestwork_data'
import { useNavigate } from 'react-router-dom';

const MyWork = () => {
  const [role, setRole] = useState('Penetration Tester'); // State to manage selected role

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pentest/works');
  };

  return (
    <div id='work' className='flex flex-col items-center justify-center gap-16 sm:gap-20 lg:mx-[170px] mx-5 my-16 lg:my-[80px]'>
      {/* Title Section */}
      <div className='relative text-center'>
        <h1 className='text-4xl sm:text-5xl lg:text-[80px] font-semibold'>
          My Latest Work
        </h1>
        <img className='absolute bottom-0 right-0 z-[-1] hidden lg:block' src={theme_Pattern} alt="Pattern" />
      </div>

      {/* Role Buttons */}
      <div className='flex gap-8 mt-6'>
        <button
          onClick={() => setRole('Penetration Tester')}
          className={`px-6 py-2 text-lg font-medium rounded-md border-2 border-solid ${
            role === 'Penetration Tester' ? 'bg-purple-500 text-white' : 'border-purple-500 text-purple-500'
          } hover:bg-purple-500 hover:text-white duration-300`}
        >
          Penetration Tester
        </button>
        <button
          onClick={() => setRole('Frontend Engineer')}
          className={`px-6 py-2 text-lg font-medium rounded-md border-2 border-solid ${
            role === 'Frontend Engineer' ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500'
          } hover:bg-blue-500 hover:text-white duration-300`}
        >
          Frontend Engineer
        </button>
      </div>

      {/* Conditional Rendering */}
      {role === 'Frontend Engineer' && (
  <>
    {/* Image Grid */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[40px]'>
      {mywork_data.slice(0,6).map((items, index) => (
        <div
          key={index}
          className='flex flex-col items-center justify-center'
        >
          <img
            className='box-border w-full sm:w-[90%] lg:w-[419px] h-auto sm:h-[250px] lg:h-[280px] duration-300 cursor-pointer hover:scale-110 hover:border-4 rounded-[10px] hover:border-[#ff00ff]'
            src={items.w_img}
            alt={`Work Item ${index}`}
          />
          <p className='mt-4 text-center text-lg font-medium'>{items.w_name}</p>
        </div>
      ))}
    </div>

   
  </>
)}

{role === 'Penetration Tester' && (
  <>
    {/* Image Grid */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[40px]'>
      {pentest_work.slice(0, 6).map((items, index) => (
        <div
          key={index}
          className='flex flex-col items-center justify-center'
        >
          <a href={items.link} target="_blank" rel="noopener noreferrer">
            <img
              className='box-border w-full sm:w-[90%] lg:w-[419px] h-auto sm:h-[250px] lg:h-[280px] duration-300 cursor-pointer hover:scale-110 hover:border-4 rounded-[10px] hover:border-[#ff00ff]'
              src={items.w_img}
              alt={`Work Item ${index}`}
            />
          </a>
          <a 
            href={items.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 text-center text-lg font-medium"
          >
            {items.w_name}
          </a>
        </div>
      ))}
    </div>

    {/* Show More Button */}
    <div className='flex items-center justify-center gap-4 sm:gap-6 rounded-full border-2 sm:border-3 border-solid border-white px-8 sm:px-[60px] py-4 sm:py-[30px] text-lg sm:text-[22px] font-[500] mb-16 sm:mb-[80px] duration-500 cursor-pointer hover:gap-[30px]' onClick={handleClick}>
      <p>Show More</p>
      <img src={arrow_icon} alt="Arrow Icon" />
    </div>
  </>
)}
    </div>
  );
};

export default MyWork;
