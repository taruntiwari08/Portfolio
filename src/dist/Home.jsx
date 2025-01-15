import React from 'react'
import profilepic from '../assets/ImgResources/profilepic.jpg'
import { Link } from 'react-router-dom'
import './home.css'
 
function Home() {
  return (
    <div className='flex bg-slate-100 dark:bg-slate-900 max-w-full max-h-full  '>
      <div className='flex  flex-wrap'>
      <div className='lg:justify-around lg:my-24 lg:mx-24 mx-8 my-8 lg:h-100 lg:w-96 h-64 w-56 lg:ml-[180px] '>
      <img className='rounded-lg border-solid border-[4px] border-black animate-flipIn dark:border-slate-200' src={profilepic} alt="" />
      </div>

      <div className='h-auto lg:my-24 lg:mx-24 mx-8 my-4'>
        <span className='lg:text-9xl ml-2 text-6xl text-center font-bold dark:text-white'>
           Hey!
        </span>
        <div className=' mt-[30px] ml-3  lg:text-2xl text-lg font-semibold dark:text-slate-200'>
        A Bit About Me
        </div>
        <div class="max-w-lg mx-auto p-4">
        <p class="text-justify leading-relaxed text-gray-700 dark:text-gray-300">
        Hi, I'm Tarun, a BTech student in Artificial Intelligence and Robotics, specializing in web and blockchain development. Experienced in ReactJS, Solidity, MongoDB, and more, I create innovative, user-friendly applications. Passionate about cryptocurrency and emerging technologies, I strive to deliver impactful solutions while continuously advancing my skills. </p>
        </div>
        <div className='flex justify-between  my-4'>
       <Link to="/resume"><div class="lg:w-36 lg:h-36 w-24 h-24 flex items-center justify-center rounded-full bg-yellow-500 border-solid border-[1px] border-black font-semibold cursor-pointer animate-slideUp animate-flipIn  ">Resume</div>
       </Link> 
       <Link to="/projects"><div class="lg:w-36 lg:h-36 w-24 h-24 flex items-center justify-center rounded-full bg-blue-500 border-solid border-[1px] border-black font-semibold cursor-pointer animate-slideUp animate-flipIn">Projects</div>
       </Link> 
       <Link to="/contact">
        <div class="lg:w-36 lg:h-36 w-24 h-24 flex items-center justify-center rounded-full bg-pink-500 border-solid border-[1px] border-black font-semibold cursor-pointer animate-slideUp animate-flipIn">Contact</div>
        </Link>
         </div>
      </div>
      </div>

    </div>
  )
}

export default Home