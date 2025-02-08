import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Wicked Wines offers the best selection of fine wines! The flavors are exquisite and the service is top-notch.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    review: "Absolutely love the wines from here! Smooth taste, great variety, and perfect for any occasion.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    review: "I ordered a few bottles, and they arrived on time and well-packaged. The quality is amazing!",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 4,
    name: "Emily Johnson",
    review: "The best wine experience ever! The customer service was excellent, and the wine was phenomenal.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

const Reviews = () => {
  return (
    <div className="max-w-[900px] mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="pb-8"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex items-center bg-white shadow-lg rounded-lg p-6 space-x-6">
              {/* User Image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
              />
              
              {/* Review Text */}
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-gray-600 mt-2">{review.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
