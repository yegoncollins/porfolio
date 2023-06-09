import React, { useState } from 'react';
import{FaBars, FaTimes}from 'react-icons/fa';
import {Link}from "react-scroll";

const Navbar =()=> {

    const links =[
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'services'
        },
        {
            id: 5,
            link: 'contact'
        },
        
    ]
    const[nav,setNav] = useState(false);
    
  return (

    <div className='flex justify-between items-center w-full h-20 px-4 text-white
     fixed bg-black'>
        <div>
            <h1 className='text-4xl ml-2'> Yegon Collins </h1>
        </div>
        <ul className='hidden md:flex'>
         {links.map(({id, link}) =>(

            <li key={id } className='px-4 cursor-pointer  capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                <Link to={link} smooth duration={600}>{link}</Link>
            </li>

         ))}


        </ul>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav? <FaTimes size={30}/> : <FaBars size={30}/>}

            
        </div>
        <div></div>
        {nav &&(
        <ul className='hidden md:flex'>
        {links.map(({id, link}) =>(

           <li key={id } className='px-4 cursor-pointer  capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
               <Link to={link} smooth duration={600}>{link}</Link>
           </li>

        ))}


       </ul>

        )}
        
        

    </div>
  );
};

export default Navbar;