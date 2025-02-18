import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profile_image from '../assets/profile_image.jpeg';
import { useNavigate } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/resumes');
  };

  return (
    <div id="home" className="flex flex-col items-center gap-8 lg:gap-[35px] px-5 lg:px-0">
      {/* Profile Image */}
      <img
        className="
          mt-16 
          sm:mt-20 
          lg:mt-[150px] 
          w-[300px] sm:w-36 md:w-48 lg:w-auto 
          h-[300px] sm:h-36 md:h-48 lg:h-[400px] 
          rounded-full 
          border-4 
          object-cover"
        src={profile_image}
        alt="Profile"
      />

      {/* Hero Heading */}
      <h1 className="text-center w-full sm:w-[90%] lg:w-[60%] text-[40px] sm:text-6xl lg:text-[90px] font-bold">
        <span className="bg-gradient-to-r from-orange-500 via-purple-600 to-purple-700 bg-clip-text text-transparent">
          I'm Rounak Bania,
        </span>
        <br />

        {/* Typewriter Effect */}
        <div className="flex justify-center items-center w-full overflow-hidden">
          <span className="bg-gradient-to-r from-teal-500 via-blue-600 to-blue-700 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-[70px] xl:text-[70px] mt-3 p-3 text-center">
            <Typewriter
              words={['Penetration Tester', 'Front End Engineer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <span className="text-white block text-xl sm:text-2xl md:text-4xl lg:text-[50px] text-center mt-5">From India</span>
      </h1>

      {/* Description */}
      <p className="w-full sm:w-[75%] lg:w-[50%] text-center text-sm sm:text-lg lg:text-[24px] leading-5 sm:leading-8 lg:leading-[40px]">
        With 2.5 years of experience in web application and API penetration testing, I have honed my skills in identifying vulnerabilities and ensuring application security. Recently, I have transitioned into the role of a frontend engineer, combining my expertise in security with a fresh perspective on creating user-friendly and secure web interfaces.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-[25px] text-sm sm:text-lg lg:text-[24px] font-medium mb-10 lg:mb-[50px]">
        {/* Connect With Me Button */}
        <div className="px-6 py-3 sm:px-[45px] sm:py-[25px] rounded-full bg-gradient-to-r from-orange-500 to-purple-600 cursor-pointer hover:border-2 border-white">
          <AnchorLink offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>

        {/* My Resume Button */}
        <div className="px-10 py-3 sm:px-[75px] sm:py-[25px] rounded-full bg-transparent shadow-md shadow-white hover:shadow-purple-600 transition-shadow cursor-pointer" onClick={handleClick}>
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
