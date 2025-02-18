import React, { useState } from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import profile_img from '../assets/about_profile.svg';

const About = () => {
  const [selectedRole, setSelectedRole] = useState('penetration tester'); // Default role

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <div id='about' className='flex flex-col items-center gap-16 sm:gap-20 px-5 lg:mx-[170px] my-16 lg:my-[80px]'>
      {/* About Me Title */}
      <div className='relative text-center'>
        <h1 className='px-4 py-0 text-4xl sm:text-6xl lg:text-[80px] font-semibold'>
          About Me
        </h1>
        <img
          className='absolute bottom-0 right-0 z-[-1] ml-10 hidden lg:block'
          src={theme_pattern}
          alt="Pattern"
        />
      </div>

      {/* Role Selection */}
      <div className='flex gap-4'>
        <button className={`px-4 py-2  hover:bg-orange-600 rounded-lg hover:text-white transition-colors ${selectedRole === 'penetration tester'
            ? 'bg-orange-500 text-white'
            : 'bg-gray-200 text-gray-800'
          } `} onClick={() => { handleRoleChange('penetration tester') }}>

          Penetration Tester
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium text-base sm:text-lg ${selectedRole === 'Frontend Engineer'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 text-gray-800'
            } hover:bg-orange-600 hover:text-white transition-colors`}
          onClick={() => handleRoleChange('Frontend Engineer')}
        >
          Frontend Engineer
        </button>
      </div>

      {/* Conditional Content Rendering */}
      {selectedRole === 'Frontend Engineer' ? (
        <>
          {/* Profile and About Text Section */}
          <div className='flex flex-col lg:flex-row items-center lg:gap-[80px] gap-10'>



            {/* About Text and Skills */}
            <div className='flex flex-col gap-16'>
              <div className='flex flex-col gap-8 text-base sm:text-lg lg:text-[24px] font-medium max-w-3xl text-center lg:text-left'>
                <p>
                  With a strong background in Web Application and API security testing, I am now transitioning into frontend development. My experience in vulnerability assessment and penetration testing has given me a deep understanding of secure coding practices, which I bring into my work as a frontend developer.
                  I am passionate about building dynamic, user-friendly applications and continuously enhancing my skills to create seamless digital experiences. My dedication and enthusiasm drive me to excel in this new journey.
                </p>
               
              </div>

              {/* Skills Section */}
              <div className='flex flex-col gap-5 '>
                {[
                  { skill: 'HTML & CSS', width: '60%' },
                  { skill: 'ReactJs', width: '55%' },
                  { skill: 'Javascript', width: '50%' },
                  { skill: 'Nextjs', width: '50%' }
                ].map(({ skill, width }) => (
                  <div
                    key={skill}
                    className='flex gap-20 items-center hover:scale-105 transition-transform duration-300 '
                  >
                    <p className='min-w-[150px] text-base sm:text-lg lg:text-[24px] font-medium'>
                      {skill}
                    </p>
                    <hr
                      className='outline-none border-none h-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600'
                      style={{ width }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Content for Penetration Tester */}
          <div className='flex flex-col lg:flex-row items-center lg:gap-[80px] gap-10'>
            {/* Profile Image */}

            {/* About Text and Skills */}
            <div className='flex flex-col gap-16'>
              <div className='flex flex-col gap-8 text-base sm:text-lg lg:text-[24px] font-medium max-w-3xl text-center lg:text-left'>
                <p>
                  I am an experienced Web Application and API Penetration Tester with over 2.5 years of expertise in cybersecurity. Specializing in identifying and mitigating security vulnerabilities, I have a strong focus on authentication mechanisms, API security, and web exploitation. My passion for ethical hacking drives me to stay ahead of evolving threats, ensuring robust application security.
                </p>

              </div>

              {/* Skills Section */}
              <div className='flex flex-col gap-5'>
                {[
                  { skill: 'WebApp Security ', width: '60%' },
                  { skill: 'API Security', width: '55%' },
                  { skill: 'Android Application ', width: '50%' },
                  { skill: 'Network Security', width: '50%' }
                ].map(({ skill, width }) => (
                  <div
                    key={skill}
                    className='flex gap-5 items-center hover:scale-105 transition-transform duration-300'
                  >
                    <p className='min-w-[150px] w-[300px] text-base sm:text-lg lg:text-[24px] font-medium'>
                      {skill}
                    </p>
                    <hr
                      className='outline-none border-none h-2  rounded-full bg-gradient-to-r from-orange-500 to-purple-600'
                      style={{ width }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </>
      )}
    </div>
  );
};

export default About;
