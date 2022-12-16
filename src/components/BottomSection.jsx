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

      

            <div className='absolute'>
             <img src={Elipse} alt='background' />
             </div>
      
             <div className=' absolute z-10 text-gray-300 grid grid-cols-2 px-36 gap-8 pt-96'>
             <div className=' bg-transparent absolute pt-96 z-0'><Metaball /></div>
             <div className='grid grid-cols-1 gap-10 px-20 text-left z-10'>
             <h1 className=' text-6xl'>Join Others like you in this Journey</h1>
             <button className="scale-90 hover:scale-100 ease-in duration-100 bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-100  text-black py-4 rounded-md w-40">SIGN UP{">"}</button>
             </div>
      
             <div className=' absolute py-10 px-10 text-gray-500  text-xl text-center left-[50rem] top-[23rem]'>
             <div className='grid grid-cols-3'>
             <div className=' scale-100 hover:scale-110 ease-in duration-100'><PersonalVideoIcon /> Development</div>
              <div className=' scale-100 hover:scale-110 ease-in duration-100'><BrushIcon /> Design</div>
              <div className=' scale-100 hover:scale-110 ease-in duration-100'><CampaignIcon /> Marketing</div>
              </div>
              
              <div className='grid grid-cols-2  py-16'>
              <div  className=' scale-100 hover:scale-110 ease-in duration-100'><VideogameAssetIcon/> Games </div>
              <div  className=' scale-100 hover:scale-110 ease-in duration-100'><PhotoCameraIcon /> Pictures</div></div>
              
              <div className='grid grid-cols-3'>
              <div  className=' scale-100 hover:scale-110 ease-in duration-100'><RocketLaunchIcon /> Startups</div>
              <div  className=' scale-100 hover:scale-110 ease-in duration-100'><WidgetsIcon /> Web3</div>
              <div  className=' scale-100 hover:scale-110 ease-in duration-100'><CurrencyBitcoinIcon /> Blockchain</div>
              </div>
      
             </div>
              
             </div>
             
            
             
            </div>
        );
      
      
      