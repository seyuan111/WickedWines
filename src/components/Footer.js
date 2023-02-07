import React from 'react'
import {FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
    <div className="w-full h-[80px] px-4 flex justify-center items-center gap-8">
        <FaTwitter className="text-blue-500 cursor-pointer" size={30}/>
        <FaInstagram className="cursor-pointer" size={30}/>
        <FaFacebook className="text-blue-800 cursor-pointer" size={30}/>
        <FaYoutube className="text-red-500 cursor-pointer" size={30}/>
        <FaLinkedin className="text-blue-800 cursor-pointer" size={30}/>
    </div>
        <p className="text-center my-2 mb-7">All rights with <span className="underline text-blue-400 cursor-pointer">Sean&Shah</span></p>
    </div>
  )
}

export default Footer