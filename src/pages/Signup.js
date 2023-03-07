import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BiArrowBack} from 'react-icons/bi'
import Wines from '../assets/Wines.jpg'

const Signup = () => {
    const back = useNavigate()
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
    <li className="mb-4 cursor-pointer">story</li>
    <li className="mb-4 cursor-pointer">shop</li>
    <li className="mb-4 cursor-pointer"><Link to="/Events">Events</Link></li>
    <li className="ml-4 cursor-pointer"><Link to="/Contact">Contact</Link></li>
    <button className="ml-4 cursor-pointer bg-green-600 rounded px-3 py-1"><Link to="Login">Become a member</Link></button>
  </ul>
    </div>
  </div>

  <div className="w-full h-screen bg-zinc-900/50">
  <img src={Wines} className="w-full h-full object-cover absolute -z-10" />
  <div className="flex justify-center items-center h-full">
  <form className="max-w-[400px] w-full mx-auto bg-white p-8">
    <BiArrowBack onClick={() => back(-1)} className="cursor-pointer text-[20px]" />
      <h2 className="text-4xl font-bold text-center py-8 relative">Log in</h2>
    <div className="flex flex-col mb-4">
      <label className="relative mb-2">Email:</label>
      <input className="border relative bg-gray-100 p-2" type="text" placeholder="Email"></input>
    </div>
      <div className="flex flex-col mb-4">
          <label className="relative mb-2">Username:</label>
          <input className="border relative bg-gray-100 p-2" type="text" placeholder="Username"></input>
      </div>
      <div className="flex flex-col">
          <label className="relative mb-2">Password:</label>
          <input className="border relative bg-gray-100 p-2" type="password" placeholder="password"></input>
      </div>
    <div className="flex flex-col mt-2">
      <label className="relative mb-2">Confirm Password:</label>
      <input className="border relative bg-gray-100 p-2" type="password" placeholder="password"></input>
    </div>
      <button className="w-full py-3 mt-8 bg-blue-400 hover:bg-blue-800 relative text-black hover:text-white cursor-pointer">Sign in</button> 
  </form>
</div>
  </div>

    </div>
  )
}

export default Signup