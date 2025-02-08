import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Sliders = () => {
  const slides = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Red_and_white_wine_12-2015.jpg/800px-Red_and_white_wine_12-2015.jpg",
    },
    {
      url: "https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/3/ac/3ac6b114-fe68-11e4-9ba5-f37ab6b22a1e/555ba1b087b4f.image.jpg?resize=1200%2C1004",
    },
    {
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5ae0e0112124509.600ef4600a723.png",
    },
    {
      url: "https://www.inspirehub.com/hubfs/Content%20-%20Inbound/Blogs/BLOG%20-%205%20Things%20Winning%20Wineries%20Get%20Right.jpg",
    },
    {
      url: "https://winecountry-media.s3.amazonaws.com/wp-content/uploads/sites/4/2021/09/09234352/Bennett-Lane-1320x880-1.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const slideInterval = 4000; // Faster auto-slide interval (4s)

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-[900px] h-[450px] w-full m-auto py-6 px-4 group">
      {/* Slide Image */}
      <div
        style={{ backgroundImage: `url(${slides[current].url})` }}
        className="w-full h-full rounded-lg bg-center bg-cover duration-500 transition-all ease-in-out relative shadow-lg"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 text-3xl p-2 rounded-full bg-black/40 text-white cursor-pointer hover:bg-black/70 transition shadow-lg"
      >
        <BsChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 text-3xl p-2 rounded-full bg-black/40 text-white cursor-pointer hover:bg-black/70 transition shadow-lg"
      >
        <BsChevronRight size={30} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <RxDotFilled
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer text-xl transition ${
              index === current ? "text-white scale-125" : "text-gray-300 hover:text-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sliders;

