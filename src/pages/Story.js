import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Wines from "../assets/Wines.jpg";

const Story = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Wines}
          alt="Wines"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay & Navbar */}
      <div className="absolute inset-0 bg-black/60"></div>
      <NavBar />

      {/* Content Section */}
      <div className="relative mt-6 z-10 text-center px-6 max-w-4xl">
        <h1 className="text-2xl md:text-4xl text-gold drop-shadow-lg mb-6 animate-fadeIn">
          The Legacy of the Golden Vine
        </h1>
        <p className="text-sm sm:text-lg md:text-xl leading-relaxed mb-6 animate-slideInLeft">
          In a valley kissed by the golden sun and cooled by the whispering winds,
          the first vine was planted centuries ago. From these sacred roots, a
          tradition was born — one of passion, craftsmanship, and an unwavering
          devotion to the art of winemaking.
        </p>
        <p className="text-sm sm:text-lg md:text-xl leading-relaxed mb-6 animate-slideInRight">
          Every bottle tells a story, a harmony of soil and sky, of patience and
          time. From the rolling vineyards to your glass, each sip is an echo of
          history, a taste of the divine.
        </p>
        
        {/* Call to Action */}
        <div className="flex md:flex-row items-center justify-center gap-4 animate-bounceIn">
          <Link
            to="/shop"
            className="py-3 px-6 border-2 bg-gradient-to-b from-black to-gray-900 hover:bg-black text-white text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Explore Wines
          </Link>
          <Link
            to="/events"
            className="py-3 px-6 border-2 border-white text-white text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Visit Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;