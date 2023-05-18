import React from 'react'
import  about from "../assets/about.jpg"

const About = () => {
  return (
    <div name="about" className='bg-gradient-to-b from-gray-500 via-gray-800 to-black py-6 px-4 '>
     <div className='max-w-[1240px] mx-auto'>
      <div className='flex flex-col xl:flex-row gap-24'>
        <img className='my-4 ml-4 mr-4 w-[500px] md:mx-auto lg:mx-3 rounded-3xl' src={about} alt="" />
        <div className="flex flex-col items-center text-center my-2 lg:items-start lg:text-left">
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl  text-[#36e7d8] my-4 lg:text-4xl font-bold lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
              About
            </h1>
            <p className='mb-4 text-[#feb786]'> Freelance Web Developer</p>
            <hr className='mb-8 inline border-b-4 border-gray-500'/>
            <p className='mb-8 text-slate-200 ml-4'>
            Welcome to my portfolio! I'm Yegon Collins, a passionate web and mobile developer with a strong focus on front-end development and user experience. With a keen eye for detail and a love for crafting intuitive and visually stunning websites, I strive to create exceptional digital experiences that engage users and deliver results. Explore my work below and let's create something amazing together.
            </p>
           
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default About;