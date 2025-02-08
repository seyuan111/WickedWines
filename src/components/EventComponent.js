import React from "react";
import {Link} from 'react-router-dom'

const EventComponent = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://www.wscwinery.com/wp-content/uploads/2023/05/Guthrie-Jones-on-the-Patio-1030x579.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
        {/* Heading */}
        <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Exciting Events Await You!
        </h1>
        
        {/* Description */}
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium max-w-2xl text-center">
          Join us for unforgettable experiences. Check out our upcoming events, workshops, and more!
        </p>
        
        {/* Call to Action Button */}
        <button className="mt-8 py-3 px-6 border-2 text-white bg-gradient-to-b from-black to-gray-900 text-lg rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
          <Link to="/events">Explore Events</Link>
        </button>
      </div>
    </div>
  );
};

export default EventComponent;
