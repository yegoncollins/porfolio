import React from 'react'
import  Web from "../assets/web.jpg"
import  Mobile from "../assets/mobile.jpg"
import  branding from "../assets/branding.jpg"
import  seo from "../assets/seo.jpg"

const Services = () => {

  return (
    
    <div name="services" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full'>
            <div className='pb-6'>
            <p className='text-4xl  text-[#36e7d8] font-bold inline border-b-4 border-gray-500'>Services</p>
            <p className='py-6'>What I do for Clients</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-8 sm:px-0'>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <h4 className='flex items-center justify-center font-bold text-[#feb786]'>Web Development</h4>
                <p className='flex items-center justify-center py-2'>Every website should be as unique as the brand it represents. By creating a custom design  and development that reflects your brand identity, incorporating your logo, color scheme, and visual elements to create a visually appealing website.</p>
                <img  className='rounded-md duration-200 hover:scale-105' src={Web} alt="" />
                
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <h4 className='flex items-center justify-center font-bold text-[#feb786]'>Mobile App Development</h4>
                <p className='flex items-center justify-center py-2 my-3'>
                With the increasing use of mobile devices, having a responsive website is essential. We ensure that your website looks great and functions flawlessly on all screen sizes, including smartphones, tablets, and desktop computers.
                </p>
                <img  className='rounded-md duration-200 hover:scale-105' src={Mobile} alt="" />
                
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <h4 className='flex items-center justify-center font-bold text-[#feb786]'>Branding</h4>
                <p className='flex items-center justify-center py-2 my-8'>Prioritizing user experience and design intuitive interfaces that are easy to navigate. Your visitors will have a seamless browsing experience, allowing them to find the information they need quickly and effortlessly.</p>
                <img  className='rounded-md duration-200 hover:scale-105' src={branding} alt="" />
                
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <h4 className='flex items-center justify-center font-bold text-[#feb786]'>SEO</h4>
                <p className='flex items-center justify-center py-2 my-2'> Optimize your website to improve its visibility in search engine results, driving organic traffic and increasing your online presence. SEO  employ industry best practices to enhance your website's ranking and ensure maximum exposure.</p>
                <img  className='rounded-md duration-200 hover:scale-105' src={seo} alt="" />
                
            </div>
        
        
            
        </div>
            
            
        
        </div>
        
    </div>
  );
};

export default Services;