import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Wines from '../assets/Wines.jpg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Story = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div className="w-full h-[70px] bg-blue-300">
    <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
    <div className="text-[#4b8037] text-[25px] cursor-pointer font-bold">
      <h1><Link to='/'>Wicked Wines</Link></h1>
    </div>
    <div className="hidden md:flex">
      <ul className="flex items-center text-white text-[20px]">
        <li className="ml-4 cursor-pointer"><Link to="/Story">Story</Link></li>
        <li className="ml-4 cursor-pointer"><Link to='/Shop'>Shop</Link></li>
        <li className="ml-4 cursor-pointer"><Link to="/Events">Events</Link></li>
        <li className="ml-4 cursor-pointer"><Link to="/Contact">Contact</Link></li>
        <button className="ml-4 cursor-pointer bg-green-600 rounded px-3 py-1"><Link to="Login">Become a member</Link></button>
      </ul>
    </div>
    <div onClick={handleNav} className="block md:hidden">
      {nav ? <AiOutlineClose size={30} className="text-black" /> : <AiOutlineMenu size={30} className="text-black"/>}
    </div>
    <div className={nav ? "w-full bg-blue-300 text-white absolute top-[90px] left-0 flex justify-center text-center" : "absolute left-[-100%]"}>
    <ul className="relative">
    <li className="mb-4 cursor-pointer"><Link to="/Story">Story</Link></li>
    <li className="mb-4 cursor-pointer"><Link to='/Shop'>Shop</Link></li>
    <li className="mb-4 cursor-pointer"><Link to="/Events">Events</Link></li>
    <li className="ml-4 cursor-pointer"><Link to="/Contact">Contact</Link></li>
    <button className="ml-4 cursor-pointer bg-green-600 rounded px-3 py-1"><Link to="Login">Become a member</Link></button>
  </ul>
    </div>
  </div>

  <div className="w-full h-screen bg-zinc-900/50">
  <img src={Wines} className="w-full h-full object-cover absolute -z-10" />
  <div className="w-full h-[90%] text-center flex flex-col justify-center items-center text-white px-4">
    <h1 className="text-[40px]">About Wicked Wines</h1>
    <p className="mt-5 text-white text-[20px] text-bold">Wicked Wines is a place where you can buy any type of wines online or pick up wines at the store. There are also indoor wine tasting events and indoor live events. You can purchase your wine indoors, order for pick up, or have it delivered to your home</p>
    <p className="mt-5 text-white text-[20px] text-bold">We sell a variery of wines. Red, White wines etc. We also do wine slushies indoors while also listen to country music indoors</p>
  </div>
  </div>
    </div>
  )
}

export default Story