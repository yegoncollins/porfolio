import React from 'react'
import{FaGithub, FaLinkedin}from 'react-icons/fa'
import{HiOutlineMail}from 'react-icons/hi'
import{BsFillPersonLinesFill}from 'react-icons/bs'

const Sociallinks = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
     <ul>
        <li>
            <a href="">
            <>
            LinkedIn <FaLinkedin/>
            </>
            </a>
        </li>
     </ul>
    </div>
  )
}

export default Sociallinks;