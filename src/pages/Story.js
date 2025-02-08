import React from "react";
import { Link } from "react-router-dom";
import Wines from "../assets/Wines.jpg";
import NavBar from "../components/NavBar";

const Story = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Background Image */}
      <img
        src={Wines}
        alt="Wicked Wines"
        className="w-full h-full object-cover absolute -z-10"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navigation */}
      <NavBar />

      {/* Content Section */}
      <div className="w-full h-full text-center flex flex-col justify-center items-center text-white px-4 relative z-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate__animated animate__fadeIn">
            The Story of Wicked Wines
          </h1>

          {/* Story Description */}
          <p className="text-sm sm:text-base md:text-xl font-semibold max-w-3xl mx-auto mb-4 sm:mb-6 animate__animated animate__fadeIn animate__delay-1s">
            At Wicked Wines, we believe in the experience of savoring the perfect glass of wine. Whether you’re here for a special occasion or just to unwind, we offer a unique selection of wines, from the bold reds to crisp whites. Experience the essence of fine wines with us.
          </p>
          
          <p className="text-sm sm:text-base md:text-xl font-semibold max-w-3xl mx-auto mb-4 sm:mb-6 animate__animated animate__fadeIn animate__delay-1s">
            From our comfortable indoor wine-tasting events to our live country music nights, there’s something for everyone. And with the option to purchase online or pick up in-store, it’s never been easier to enjoy your favorite wines.
          </p>

          {/* Call to Action */}
          <div className="mt-4 sm:mt-6 animate__animated animate__fadeIn animate__delay-2s">
            <Link
              to="/shop"
              className="py-2 px-5 sm:py-3 sm:px-6 bg-gradient-to-b border-2 from-black to-gray-900 text-white text-lg sm:text-xl rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

