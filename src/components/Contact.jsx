import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-r  from-gray-800 to-black w-full text-white md:h-screen'>
        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl  text-[#36e7d8] font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch</p>
            </div>
            <div className='flex justify-center items-center w-full'>
                <form action="https://getform.io/f/06bbb799-cc92-4b3b-9281-abdbab6c586a" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="text" name='email' placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact