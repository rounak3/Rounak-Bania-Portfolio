import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import footer_logo from '../assets/footer_logo.svg';
import user_icon from '../assets/user_icon.svg';

const Footer = () => {
    return (
        <div className='mx-5 lg:mx-[170px] my-10 flex flex-col gap-10'>
            {/* Top Section */}
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
                {/* Left Section */}
                <div className='flex flex-col gap-4'>
                    <img src={footer_logo} alt="Footer Logo" />
                    <p className='text-[16px] lg:text-[20px] max-w-[400px] text-[#D8D8D8]'>
                        I am a frontend developer with a background in web app and API security, bringing 2.5 years of experience in penetration testing.
                    </p>
                </div>

                {/* Social Icons in Place of Input and Button */}
                <div className='flex gap-6 items-center justify-center lg:justify-end w-full'>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/raunakplayzz/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={40} className="text-white hover:text-[#E1306C] transition duration-300" />
                    </a>
                    {/* GitHub */}
                    <a href="https://github.com/rounak3" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={40} className="text-white hover:text-gray-400 transition duration-300" />
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/rounakbania/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={40} className="text-white hover:text-[#0A66C2] transition duration-300" />
                    </a>
                </div>
            </div >

            {/* Divider */}
            < hr className='border-gray-600' />

            {/* Bottom Section */}
            < div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] sm:text-[18px] text-[#D8D8D8] mb-10 sm:mb-10 md:mb-10 text-center' >
                <p>© 2025 Rounak Bania. All rights reserved.</p>
                <div className='flex gap-6 justify-center'>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/raunakplayzz/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={28} className="text-white hover:text-[#E1306C] transition duration-300" />
                    </a>
                    {/* GitHub */}
                    <a href="https://github.com/rounak3" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={28} className="text-white hover:text-gray-400 transition duration-300" />
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/rounakbania/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={28} className="text-white hover:text-[#0A66C2] transition duration-300" />
                    </a>
                </div>
            </div >
        </div >
    );
}

export default Footer;
