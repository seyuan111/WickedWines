import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Wines from '../assets/Wines.jpg'
import NavBar from '../components/NavBar'

const Login = () => {
  return (
    <div className="w-full h-[70px] bg-blue-300">
    <NavBar />

    <div className="w-full h-screen bg-zinc-900/50">
    <img src={Wines} className="w-full h-full object-cover absolute -z-10" />
    <div className="flex justify-center items-center h-full">
    <form className="max-w-[400px] w-full mx-auto bg-white p-8">
        <h2 className="text-4xl font-bold text-center py-8 relative">Log in</h2>
        <div className="flex flex-col mb-4">
            <label className="relative mb-2">Username:</label>
            <input className="border relative bg-gray-100 p-2" type="text" placeholder="Username"></input>
        </div>
        <div className="flex flex-col">
            <label className="relative mb-2">Password:</label>
            <input className="border relative bg-gray-100 p-2" type="password" placeholder="password"></input>
        </div>
        <button className="w-full py-3 mt-8 bg-blue-400 hover:bg-blue-800 relative text-black hover:text-white cursor-pointer">Sign in</button>
        <p className="relative"><input className="mr-2 relative" type="checkbox"></input>Remember this account</p>
        <p className="relative"><span className="text-blue-500 relative cursor-pointer"><Link to="/signup">Sign up</Link></span> to become a member</p>    
    </form>
</div>
    </div>

    </div>
  )
}

export default Login