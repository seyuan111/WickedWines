import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { FaWineGlassAlt } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    // Prevent scrolling when menu is open
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="w-full h-[70px] border-b-2 bg-gradient-to-b from-black to-gray-900 hover:bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center">
          <FaWineGlassAlt className="text-white mr-2 w-6 h-6" />
          <h1 className="text-white text-xl font-bold cursor-pointer">
            <Link to="/">Wicked Wines</Link>
          </h1>
        </div>

        {/* Centered Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center space-x-6 text-white text-[18px]">
            <li className="cursor-pointer">
              <Link to="/story">Story</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/events">Events</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Login & Cart (Right-aligned) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="border-2 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
            Login
          </Link>
          <Link to="/cart">
            <AiOutlineShoppingCart size={25} className="text-white cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
          {nav ? <AiOutlineClose size={30} className="text-white" /> : <AiOutlineMenu size={30} className="text-white" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center transition-all duration-300 ${
          nav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="text-center text-[20px] space-y-6">
          <li onClick={handleNav} className="cursor-pointer">
            <Link to="/story">Story</Link>
          </li>
          <li onClick={handleNav} className="cursor-pointer">
            <Link to="/shop">Shop</Link>
          </li>
          <li onClick={handleNav} className="cursor-pointer">
            <Link to="/events">Events</Link>
          </li>
          <li onClick={handleNav} className="cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <Link to="/login" onClick={handleNav} className="block bg-green-600 px-6 py-2 rounded-md hover:bg-green-700 transition">
            Login
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
