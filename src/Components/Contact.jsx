import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import call_icon from '../assets/call_icon.svg'
import location_icon from '../assets/location_icon.svg'

const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", npimport.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id='contact' className='flex flex-col items-center justify-center gap-16 sm:gap-20 lg:mx-[170px] mx-5 my-16 lg:my-[80px]'>
      {/* Title Section */}
      <div className='relative text-center'>
        <h1 className='font-semibold text-4xl sm:text-5xl lg:text-[80px]'>
          Get In Touch
        </h1>
        <img className='absolute bottom-0 right-0 z-[-1] hidden lg:block' src={theme_pattern} alt="Pattern" />
      </div>

      {/* Contact Section */}
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-[150px] w-full'>
        {/* Left Side Text */}
        <div className='flex flex-col gap-6 lg:w-[50%]'>
          <h1 className='text-4xl sm:text-5xl lg:text-[80px] font-bold bg-[linear-gradient(270deg,_#DF8908_10%,_#B415FF_100%)] bg-clip-text text-transparent'>
            Let's Talk
          </h1>
          <p className='max-w-[550px] text-[#D8D8D8] text-[20px] leading-[35px]'>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
          </p>
          <div className='flex flex-col gap-[20px] text-[#D8D8D8] text-[20px]'>
            <div className='flex items-center gap-4'>
              <img src={mail_icon} alt="Mail" />
              <p>rounakbania0@gmail.com</p>
            </div>
            <div className='flex items-center gap-4'>
              <img src={call_icon} alt="Call" />
              <p>+91 7278349661</p>
            </div>
            <div className='flex items-center gap-4'>
              <img src={location_icon} alt="Location" />
              <p>Kolkata, India</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form onSubmit={onSubmit} className='flex flex-col gap-6 lg:w-[50%] mt-10' action="">
          <label className='text-[#3D8D8D8] text-[22px] font-[500]' htmlFor="name">Your Name</label>
          <input
            className='border-none w-full h-[60px] sm:h-[78px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[22px]'
            type="text"
            placeholder='Enter Your Name'
            name='name'
          />
          <label className='text-[#3D8D8D8] text-[22px] font-[500]' htmlFor="email">Your Email</label>
          <input
            className='border-none w-full h-[60px] sm:h-[78px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[22px]'
            type="text"
            placeholder='Enter Your Email'
            name='email'
          />
          <label className='text-[#3D8D8D8] text-[22px] font-[500]' htmlFor="message">Write Your Message Here</label>
          <textarea
            className='w-full border-none p-[20px] sm:p-[25px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]'
            name="message"
            rows="8"
            placeholder='Enter Your Message'
          ></textarea>
          <button
            className='border-none text-white rounded-[50px] bg-[linear-gradient(270deg,_#DF8908_10%,_#B415FF_100%)] text-[22px] px-[40px] sm:px-[60px] py-[15px] sm:py-[20px] mb-[20px] cursor-pointer hover:scale-105 duration-300'
            type='submit'
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
