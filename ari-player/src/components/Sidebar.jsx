/* eslint-disable react/prop-types */

import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

function NavLinks ({ handleClick }){
  return (
    <div className="mt-10">
      {links.map((link) => (
        <NavLink 
          to={link.to} 
          key={link.name} 
          className="flex flex-row justify-start
          item-center my-8 text-sm font-medium text-gray-400
         hover:text-cyan-400"
         onClick={() => handleClick && handleClick() }>
          <link.icon  className="w-6 h-6 mr-2" />
          {link.name}
        </NavLink>
      ))}

    </div>
  )
}

export default function Sidebar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
      
        <div className="md:flex hidden flex-col w-[240px]
        py-10 px-4 bg-slate-700">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
         <NavLinks />
        </div>
      

      <div className="absolute md:hidden block top-6 right-3 cursor-pointer">
        {mobileMenuOpen ? (
          <RiCloseLine size={100} color="white" className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)}/>
        ) : <HiOutlineMenu size={100} color="white" className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)}/>}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl
       from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 
        py-10 px-4  md:hidden smooth-transition
         ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>

        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
         <NavLinks handleClick={() => setMobileMenuOpen(false)}/> 
        </div>
      




      

    </>
  )
}