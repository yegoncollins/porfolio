import React from 'react'
import Data from "../assets/data.png"

const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <p>Portfolio</p>
            <p>Check out some of my work here</p>
        </div>
        <div>
            <div>
                <img src={Data} alt="" />
                <div>
                    <button>Code</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio;