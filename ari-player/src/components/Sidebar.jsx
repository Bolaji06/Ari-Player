/* eslint-disable react/prop-types */

//import { RiCloseLine } from "react-icons/ri";
//import { images }  from "../assets";
import { logo } from '../assets'
import { links } from "../assets/constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { CloseSvg } from "../assets/icons/CloseSvg";
import { MenuSvg } from '../assets/icons/MenuSvg';

function NavLinks ({ handleClick }){
  return (
    <div className="mt-0 flex">
      <div className="w-[100px] bg-gradient-to-b from-slate-500 to-slate-700 flex flex-col
       rounded-lg shadow-sm shadow-gray-500">
      {links.map((link) => (
        <NavLink 
          to={link.to} 
          key={link.name} 
          className="flex flex-col cursor-pointer
          items-center my-6 text-sm font-medium text-slate-400
         hover:text-slate-200 focus:font-semibold focus:text-white"
         onClick={() => handleClick && handleClick() }>
          <link.icon className="w-6 h-6 mr-2" />
          {link.name}
        </NavLink>
      ))}
    </div>
    </div>
  )
}

export default function Sidebar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
      
        <div className="md:flex hidden flex-col sm:w-[100px]
        py-10 px-2 bg-slate-700">
        
         <NavLinks />
          <img src={logo} alt="logo" className="w-full h-12 object-contain mt-10"/>
        </div>
      

      <div className="absolute md:hidden block top-6 right-3 cursor-pointer">
        {mobileMenuOpen ? (
          <div className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)}>
            <CloseSvg />
          </div>
          
        ) :(
          <div className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)}>
          <MenuSvg />
        </div>)}
      </div>

      <div className={`absolute top-8 z-10 p-6 
        py-2 px-2  md:hidden smooth-transition w-[100px]
         ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>

        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain" /> */}
         <NavLinks handleClick={() => setMobileMenuOpen(false)}/> 
        </div>

    </>
  )
}