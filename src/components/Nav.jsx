import { Button } from '@mui/material';
import React, { useState } from 'react'

export default Nav  => {
    let Links =[
      {name:"SUPPORT >",link:"/"},
      // we can add other future links here for adding in the navbar
    ];
    let [open,setOpen]=useState(false);
  return (
    <div class='z-20 shadow-md w-full top-0 left-0 border-b-2 border-slate-800 relative'>
      <div class='md:flex items-center justify-between bg-slate-900 py-4 md:px-10 px-7'>
      <div class='font-bold text-3xl cursor-pointer flex items-center  
       scale-90 hover:scale-100 font-sans text-white ease-in duration-300'>
        <span class='text-3xl text-cyan-900 font-extrabold mr-1 pt-2'>
        <ion-icon name="cube-outline"></ion-icon>
        </span>
         BlockExplorer
      </div>
      
      <div onClick={()=>setOpen(!open)} class='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul class={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} class='md:ml-8 text-md md:my-0 my-7'>
              <a href={link.link} class='text-white hover:text-gray-400 duration-500 mr-80'>{link.name}</a>
            </li>
          ))
        }
        <Button class="bg-slate-900 text-white py-2 px-6 rounded md:ml-8
        duration-100 cursor-pointer scale-90 hover:scale-95 border-indigo-900 border-4 h-14 w-36 justify-center text-center">
        LOG IN {">"}
        </Button>
        <Button class="bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-100 text-black py-2 px-6 rounded md:ml-8 h-14 w-36
        duration-100 cursor-pointer scale-90 hover:scale-95 text-center justify-center">
        SIGN UP {">"}
        </Button>
         </ul>
         </div>
         </div>
  )
}















































































// import * as React from "react";

// // importing material UI components
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

// export default function Header() {
// return (
// 	<AppBar position="static">
// 		<Toolbar>
// 		{/*Inside the IconButton, we
// 		can render various icons*/}
// 		<IconButton
// 			size="large"
// 			edge="start"
// 			color="inherit"
// 			aria-label="menu"
// 			sx={{ mr: 2 }}
// 		>
// 			{/* This is a simple Menu
// 			Icon wrapped in Icon */}
// 			<MenuIcon />
// 		</IconButton>
// 		{/* The Typography component applies
// 		default font weights and sizes */}

// 		<Typography variant="h6"
// 			component="div" sx={{ flexGrow: 1 }}>
// 			<div class=" hover:relative text-white cursor-pointer scale-90 hover:scale-95 text-3xl ease-in duration-300 font-sans font-bold">BlockExplorer</div>
//             <div>SUPPORT</div>
// 		</Typography>
//         <div>
//         <Button color="inherit">Login</Button>
//         </div>
// 		<div>
//         <Button color="inherit">Sign up</Button>
//         </div>
// 		</Toolbar>
// 	</AppBar>
// );
// }








// import React from 'react';
// import {
// Nav,
// NavLink,
// Bars,
// NavMenu,
// NavBtn,
// NavBtnLink,
// } from './NavbarElements';

// const Navbar = () => {
// return (
// 	<>
// 	<Nav>
// 		<Bars />

// 		<NavMenu class="bg-black">
// 		 <div>BlockExplorer</div>
		
// 		<NavLink to='/events' activeStyle>
// 			Events
// 		</NavLink>
// 		<NavLink to='/annual' activeStyle>
// 			Annual Report
// 		</NavLink>
// 		<NavLink to='/team' activeStyle>
// 			Teams
// 		</NavLink>
// 		<NavLink to='/blogs' activeStyle>
// 			Blogs
// 		</NavLink>
// 		<NavLink to='/sign-up' activeStyle>
// 			Sign Up
// 		</NavLink>
// 		{/* Second Nav */}
// 		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
// 		</NavMenu>
// 		<NavBtn>
// 		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
// 		</NavBtn>
// 	</Nav>
// 	</>
// );
// };

// export default Navbar;



































// import React from "react";

// function Header(){
//     return (
//         <div class= " w-full mx-auto top-0-z-40 border-slate-800 fixed   bg-slate-900 h-20 border-b opacity-100">
//         <div class= " max-w-7xl mx-auto bg-slate-900 z-50">
//         <div class=" w-full flex justify-between pt-4 pb-3 items-center px-4 sm:px-8 md:px-12 xl:px-0">

//         <div class= " z-50 relative">
//         <h1 class=" text-left text-white cursor-pointer scale-100 hover:scale-110 text-3xl ease-in duration-300 font-sans font-bold">BlockExplorer</h1>
//         </div>
    
//         <div class="flex items-center justify-center rounded-md !border-0 md:h-[50px] whitespace-nowrap hover:opacity-[0.8] cursor-pointer md:flex">
//          <a href="" class="flex items-center justify-center rounded-md w-full h-full px-4 py-3 relative mt-2 sm:px-8 text-white font-sans text-base text-center left-10">SUPPORT </a>
//         </div>
        
//         <div class="hidden items-center md:flex">

//          <div class=" scale-100 hover:scale-110 ease-in duration-300 group flex items-center justify-center rounded-md text-white border-2 border-solid hover:bg-violet-900 hover:bg-opacity-40 border-violet-900 h-[50px] whitespace-nowrap  text-sy-12-regular md:text-sy-14-regular cursor-pointer mr-4">
//          <a href="" class="flex items-center justify-center rounded-md w-auto h-full px-4 py-3 sm:px-8 transition-colors ease-in duration-100">LOG IN >
//          <svg></svg>
//          </a>
//          </div>
//          <div class=" scale-100 hover:scale-110 ease-in duration-300 group primary-button flex items-center justify-center rounded-md text-primary-900 !border-0 bg-cyan-900 hover:bg-indigo-900 text-sy-16-medium h-[50px] whitespace-nowrap text-sy-12-regular md:text-sy-14-regular cursor-pointer mr-4">
//             <a href="" class=" flex items-center justify-center rounded-md w-auto h-full px-4 py-3 sm:px-8">SIGN ME UP >
//             <svg></svg>
//             </a>
//          </div>
//          </div>

//         </div>
//         </div>    
//         </div>
//     );
// }

// export default Header;