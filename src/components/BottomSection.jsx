 import React from "react";
 import Elipse from '../images/elipse-purple.jpg';
 import { ReactComponent as Metaball } from '../images/metaball.svg';
 import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CampaignIcon from '@mui/icons-material/Campaign';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import BrushIcon from '@mui/icons-material/Brush';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import WidgetsIcon from '@mui/icons-material/Widgets';





      export default BottomSection => (
            <div className=' relative flex'>

      

            <div className='absolute place-content-center'>
             <img src={Elipse} alt='background'/>
             </div>

             <div className=' hidden md:block bg-transparent absolute pt-96 z-10'><Metaball /></div>
      
             <div className=' absolute z-10 text-white lg:grid lg:grid-cols-2 px-36 gap-10 lg:pt-96 pt-48'>
             
              <div className='grid grid-cols-1 gap-10 md:px-20 lg:text-left z-10 text-center '>
             <h1 className='text-3xl md:text-6xl '>Join Others like you in this Journey</h1>
             <button className="scale-90 hover:scale-100 ease-in duration-100 bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-100  text-black py-4 rounded-md w-28 md:w-36 md:ml-40 ml-10 lg:ml-0 lg:w-40">SIGN UP{">"}</button>
             </div>
      
           
             <div className=' grid grid-cols-2 lg:grid-cols-3 row-span-3 gap-20 absolute lg:py-10 py-44 px-16  text-white  text-xl text-center lg:left-[50rem] top-[23rem] left-[1rem] md:left-[10rem]'>
             <h1 className=' scale-100 hover:scale-110 ease-in duration-100'><PersonalVideoIcon /> Development</h1>
              <div className=' scale-100 hover:scale-110 ease-in duration-100'><BrushIcon /> Design</div>
              <div className=' scale-100 hover:scale-110 ease-in duration-100'><CampaignIcon /> Marketing</div>
              <div  className=' scale-100 hover:scale-110 ease-in duration-100'><VideogameAssetIcon/> Games </div>
              <div  className=' scale-100 hover:scale-110 ease-in duration-100'><PhotoCameraIcon /> Pictures</div> <div  className=' scale-100 hover:scale-110 ease-in duration-100'><RocketLaunchIcon /> Startups</div>
              <div  className=' scale-100 hover:scale-110 ease-in duration-100'><WidgetsIcon /> Web3</div>
              <div  className=' scale-100 hover:scale-110 ease-in duration-100'><CurrencyBitcoinIcon /> Blockchain</div>
              </div>
             </div>
              
             <div className='lg:hidden block absolute place-content-center pt-[530px]'>
             <img src={Elipse} alt='background'/>
             </div>

            
             
            </div>
        );
      
      
      