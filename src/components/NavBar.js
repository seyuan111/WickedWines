import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="w-full h-[70px] bg-blue-300">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div className="text-[#4b8037] text-[20px] cursor-pointer font-bold">
          <h1><Link to='/'>Wicked Wines</Link></h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center text-white text-[20px]">
            <li className="ml-4 cursor-pointer"><Link to="/Story">Story</Link></li>
            <li className="ml-4 cursor-pointer"><Link to='/Shop'>Shop</Link></li>
            <li className="ml-4 cursor-pointer"><Link to="/Events">Events</Link></li>
            <li className="ml-4 cursor-pointer">Contact</li>
            <button className="ml-4 cursor-pointer bg-green-600 rounded px-3 py-1">Become a member</button>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={30} className="text-black" /> : <AiOutlineMenu size={30} className="text-black"/>}
        </div>
        <div className={nav ? "w-full bg-blue-300 text-white absolute top-[90px] left-0 flex justify-center text-center" : "absolute left-[-100%]"}>
        <ul>
        <li className="mb-4 cursor-pointer">story</li>
        <li className="mb-4 cursor-pointer">shop</li>
        <li className="mb-4 cursor-pointer"><Link to="/Events">Events</Link></li>
        <li className="mb-4 cursor-pointer">contact</li>
        <button className="m-8 cursor-pointer bg-green-600 rounded px-3 py-1">Become a member</button>
      </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar