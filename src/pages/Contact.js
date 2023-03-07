import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Wines from '../assets/Wines.jpg'

const Contact = () => {
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
    <ul>
    <li className="mb-4 cursor-pointer">story</li>
    <li className="mb-4 cursor-pointer">shop</li>
    <li className="mb-4 cursor-pointer"><Link to="/Events">Events</Link></li>
    <li className="ml-4 cursor-pointer"><Link to="/Contact">Contact</Link></li>
    <button className="ml-4 cursor-pointer bg-green-600 rounded px-3 py-1"><Link to="Login">Become a member</Link></button>
  </ul>
    </div>
  </div>

  <div className="w-full h-[100vh] top-[100px] bg-zinc-900/50">
  <img src={Wines} className="w-full h-full object-cover absolute -z-10" />
  <div className="w-full h-[80%] text-center flex flex-col justify-center items-center text-white px-4">
    <h1 className="text-[40px] font-bold underline mb-4">Contact us</h1>
    <h2 className="text-[25px]">Email:</h2>
    <h3 className="mb-4 text-[20px]">WickedWines@gmail.com</h3>
    <h2 className="text-[25px]">Fax:</h2>
    <h3 className="mb-4 text-[20px]">111-222-3333</h3>
    <h2 className="text-[25px]">Phone:</h2>
    <h3 className="text-[20px]">222-333-4444</h3>
  </div>
</div>

    </div>
  )
}

export default Contact