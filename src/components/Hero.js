import React from "react";
import Wines from "../assets/Wines.jpg";
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={Wines} className="w-full h-full object-cover" alt="Wicked Wines" />
        <div className="absolute inset-0 bg-black/60"></div> {/* Dark Overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Wicked Wines</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">Order your wines for pickup or delivery and explore our events</p>
        <div className="flex gap-4">
          <button className="border-2 bg-gradient-to-b from-black to-gray-900 text-white px-6 py-3 text-lg rounded-md transition">
            <Link to="/shop">Shop</Link>
          </button>
          <button className="border-2 bg-gradient-to-b from-black to-gray-900 text-white px-6 py-3 text-lg rounded-md transition">
            <Link to="/story">About</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
