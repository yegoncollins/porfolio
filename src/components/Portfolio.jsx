import React from 'react'
import Data from "../assets/data.png"
import Stream from "../assets/streamit.png"
import Card from "../assets/card.png"

const Portfolio = () => {
    const newurl = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl  text-[#36e7d8] font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img  className='rounded-md duration-200 hover:scale-105' src={Data} alt="" />
                <div className='flex items-center justify-center'>
                    <button onClick={() => newurl('https://github.com/yegoncollins/data')} className='w-1/2 py-1 px-4 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img  className='rounded-md duration-200 hover:scale-105' src={Stream} alt="" />
                <div className='flex items-center justify-center'>
                    <button onClick={() => newurl('https://github.com/yegoncollins/streamit')} className='w-1/2 py-1 px-4 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img  className='rounded-md duration-200 hover:scale-105' src={Card} alt="" />
                <div className='flex items-center justify-center'>
                    <button onClick={() => newurl('https://github.com/yegoncollins/card-payment')} className='w-1/2 py-1 px-4 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default Portfolio;