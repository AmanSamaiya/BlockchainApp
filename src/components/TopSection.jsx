import React from "react";
import { ReactComponent as OrbitSvg } from '../images/orbits.svg';
import elipse from '../images/elipse-purple.jpg';
import elipse2 from '../images/purple2.jpg'
import crypto from "../images/crypto.jpg";
import LaptopIcon from '@mui/icons-material/Laptop';
import TabletIcon from '@mui/icons-material/Tablet';
import SmartphoneIcon from '@mui/icons-material/Smartphone';





 export default TopSection => (
        <div>
        <div className='absolute'>
         <img src={elipse} alt='background' />
         </div>
        
        
        <div className="">
        <div className=""><OrbitSvg className="z-0 absolute scale-[1.9] pt-40"/></div>
        <div className=" z-10 absolute text-white text-center mt-12 grid grid-cols-1 gap-10 px-72 py-20">
         <h1 className=" leading-normal text-5xl font-bold">One place for learning everything about Blockchain Technology </h1>
         <p className=" text-xl font-light text-gray-300">Join us for various events news startups regarding Crypto & Blockchain 🌍</p>
         <div className="grid grid-cols-2">
         <button className="scale-90 hover:scale-100 ease-in duration-100 bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-100  text-black px-8 py-4 rounded-md w-44 ml-48">JOIN BETA</button>
         <button className=" scale-90 hover:scale-100 ease-in duration-100 bg-transparent border-2 px-8 py-4 rounded-md w-60 border-indigo-500">WATCH DEMO </button>
         </div>
        </div>
        </div>
        
        <div className="z-0 absolute top-96 pt-32 max-w-3xl left-72 ">
        <img src={crypto} alt=''/>
        </div> 
        
        
        
        
        <div class=" text-lg absolute grid grid-cols-1 gap-3 text-center text-gray-500 mt-[1200px] ml-[550px]">
          <div>Available on any devices</div>
          <div className='grid grid-cols-3 gap-2'>
        
          <div><SmartphoneIcon />
          <div className=' text-sm'>MOBILE</div></div>
        
          <div><TabletIcon />
          <div className=' text-sm'>TABLET</div></div>
        
          <div><LaptopIcon />
          <div className=' text-sm'>WEB</div></div>
        
          </div>
        </div>
        
        
        
        <div className=' z-10 absolute text-center grid grid-cols-1 gap-4 text-white px-96 pt-[1300px] mt-20'>
          <h1 className='text-5xl'>HERE FOR YOU</h1>
          <p className='text-gray-300 text-lg'>All of us know how hard it is to grow engaged communities.
          We<span className='text-cyan-400 text-lg'> make it easier </span>for you <span className='text-cyan-400'>to save your time and budget</span>, 
          so you can focus <span className='text-cyan-400'>on delivering high quality content.</span></p>
        </div>
        
        
        <div className='relative w-fit pt-[1400px]'>
        <img src={elipse2} alt='background' />
        </div>
        </div>
    );

