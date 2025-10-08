import React from 'react'
import profilepic from '../assets/ImgResources/profilepic.jpg'
import { Link } from 'react-router-dom'
import './home.css'
import BlurText from '../blocks/TextAnimations/BlurText/BlurText'
import SplitText from '../blocks/TextAnimations/SplitText/SplitText'
import PixelTransition from '../blocks/Animations/PixelTransition/PixelTransition'

 
function Home() {
  return (

    <div className='flex bg-slate-100 dark:bg-slate-900 max-w-full max-h-full  '>
      <div className='flex  flex-wrap'>
      <div className='lg:justify-around lg:my-24 lg:mx-24 mx-8 my-8 lg:h-[500px] lg:w-96 h-64 w-56 lg:ml-[180px] '>
      {/* <img className='rounded-lg border-solid border-[4px] border-black animate-flipIn dark:border-slate-200' src={profilepic} alt="" /> */}
      <PixelTransition
  firstContent={
    <img
      src={profilepic}
      alt="default pixel transition content, a cat!"
      style={{objectFit: "cover", }}
      
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>How you doin?</p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
  className="animate-flipIn w-full h-full"
/>
      </div>

      <div className='h-auto lg:my-24 lg:mx-24 mx-8 my-4'>
        <span className='lg:text-9xl ml-3 text-6xl text-center font-bold dark:text-white'>
          <SplitText className='' text="Hey!" delay={450} />
        </span>
        <div className=' lg:mt-[30px] mt-5 ml-4 lg:text-2xl text-lg font-semibold dark:text-slate-200'>
        <SplitText className='' text="A Bit About Me" delay={150} />
        </div>
        <div class="max-w-prose mx-auto p-4">
        <p class="text-justify leading-relaxed text-gray-700 dark:text-gray-300">
       <BlurText delay={120} text="Hi, I'm Tarun, a passionate Full Stack and Blockchain Developer specializing in building scalable web applications and decentralized solutions. I develop secure smart contracts, interactive frontend interfaces, and RESTful APIs using technologies like React.js, Node.js, Express, MongoDB, and Solidity. My focus is on creating efficient, user-centric, and reliable digital solutions that combine innovation with real-world functionality."/> </p>
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