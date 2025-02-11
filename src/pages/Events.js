import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Wines from "../assets/Wines.jpg"; // Example image
import NavBar from "../components/NavBar";

const Events = () => {
  const events = [
    {
      id: 1,
      name: "Wine Tasting Night",
      time: "Saturday, 7:00 PM",
      description: "Join us for an exquisite wine tasting experience, with a variety of premium wines to enjoy!",
      image: Wines, // Replace with actual event images
    },
    {
      id: 2,
      name: "Live Music Performance",
      time: "Sunday, 5:00 PM",
      description: "Enjoy live performances by local artists, and indulge in a relaxed atmosphere with great music.",
      image: Wines,
    },
    {
      id: 3,
      name: "Cooking Class - Italian Specialties",
      time: "Friday, 4:00 PM",
      description: "Learn how to make authentic Italian dishes with a local chef. Tasting included!",
      image: Wines,
    },
    {
      id: 4,
      name: "Cooking Class - Italian Specialties",
      time: "Friday, 4:00 PM",
      description: "Learn how to make authentic Italian dishes with a local chef. Tasting included!",
      image: Wines,
    },
    {
      id: 5,
      name: "Cooking Class - Italian Specialties",
      time: "Friday, 4:00 PM",
      description: "Learn how to make authentic Italian dishes with a local chef. Tasting included!",
      image: Wines,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar */}
      <NavBar />

      {/* Event Section */}
      <div className="mt-32 w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Upcoming Events</h1>
        <h2 className="text-lg sm:text-xl text-center mb-8">Join us for exciting experiences!</h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-5xl px-4"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
                {/* Event Image */}
                <img src={event.image} className="w-full h-[350px] object-cover transition-transform group-hover:scale-110 duration-300" alt={event.name} />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6 text-center transition-opacity group-hover:bg-opacity-70 duration-300">
                  <h3 className="text-2xl font-bold">{event.name}</h3>
                  <p className="text-lg mt-2">{event.time}</p>
                  <p className="mt-4">{event.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Events;


