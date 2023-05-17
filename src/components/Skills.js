import React from 'react'
import html from '../assets/html5.png';
import css from '../assets/css3.png';
import javascript from '../assets/js.png';
import reactjs from '../assets/reactjs.png';
import git from '../assets/git.png';
import nodejs from '../assets/nodejs.png';
import figma from '../assets/figma.png';
import nextjs from '../assets/nextjs.png';

const Skills = () => {
  return (
    <div className='bg-gradient-to-r from-gray-500 to-black py-12'>
      <div className='max-w-[1240px] mx-auto'>
        <div >
                <div className=' items-center justify-center grid grid-cols-8 md:grid-flow-row'>
                    <img src={html} alt=''/>
                    <img src={css} alt=''/>
                    <img src={javascript} alt=''/>
                    <img src={reactjs} alt=''/>
                    <img src={git} alt=''/>
                    <img src={nodejs} alt=''/>
                    <img src={figma} alt=''/>
                    <img src={nextjs} alt=''/>

                </div>
        </div>

      </div>
    </div>
  )
}

export default Skills