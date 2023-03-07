import React from 'react'
import Wines from '../assets/Wines.jpg'

const Hero = () => {
  return (
    <div className="w-full h-[100vh] top-[100px] bg-zinc-900/50">
      <img src={Wines} className="w-full h-full object-cover absolute -z-10" />
      <div className="w-full h-[70%] text-center flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-[40px] font-bold">Welcome to Wicked Wines</h1>
        <h1 className="text-[30px] mt-5 text-white">Get started and learn about Wicked Wines</h1>
        <p className="text-[25px] my-5">Order your wines for pickup or delivery</p>  
      </div>
    </div>
  )
}

export default Hero