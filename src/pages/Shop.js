import React from 'react';
import { Link } from "react-router-dom";
import Wines from '../assets/Wines.jpg';
import NavBar from '../components/NavBar';
import { AiOutlineStar } from 'react-icons/ai';

const Shop = () => {

  const products = [
    {
      id: 1,
      name: "Red Wine",
      price: "$25.99",
      image: Wines,
      rating: 5,
    },
    {
      id: 2,
      name: "White Wine",
      price: "$19.99",
      image: Wines,
      rating: 4,
    },
    {
      id: 3,
      name: "Rose Wine",
      price: "$22.99",
      image: Wines,
      rating: 5,
    },
    // Add more products as needed
    {
      id: 4,
      name: "Rose Wine",
      price: "$22.99",
      image: Wines,
      rating: 5,
    },
  ];

  return (
    <div className="w-full h-screen">
      <NavBar />
      <div className="w-full h-[50%] flex flex-col justify-center items-center relative">
        <img src={Wines} className="w-full h-full object-cover absolute top-0 left-0" />
        <div className="absolute inset-0 bg-black/60"></div> {/* Dark Overlay */}
        <h1 className="text-4xl font-bold text-white z-10">Shop at our store</h1>
      </div>

      <div className="w-full flex items-center justify-center h-[100px] bg-gray-100">
        {/* Centered Red Wines Title */}
        <h1 className="text-3xl font-bold text-center">Red Wines</h1>
      </div>

      {/* Shop Product Cards */}
      <div className="px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-[200px] object-cover" />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg text-gray-600">{product.price}</p>

              {/* Star Rating */}
              <div className="flex items-center space-x-1 mt-2">
                {[...Array(5)].map((_, index) => (
                  <AiOutlineStar key={index} className={`text-yellow-400 ${index < product.rating ? 'text-yellow-500' : 'text-gray-400'}`} />
                ))}
              </div>

              {/* Add to Cart Button */}
              <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center h-[100px] bg-gray-100">
      {/* Centered Red Wines Title */}
      <h1 className="text-3xl font-bold text-center">White Wines</h1>
    </div>

    {/* Shop Product Cards */}
    <div className="px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <img src={product.image} alt={product.name} className="w-full h-[200px] object-cover" />
          <div className="p-4 flex flex-col justify-between flex-grow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-600">{product.price}</p>

            {/* Star Rating */}
            <div className="flex items-center space-x-1 mt-2">
              {[...Array(5)].map((_, index) => (
                <AiOutlineStar key={index} className={`text-yellow-400 ${index < product.rating ? 'text-yellow-500' : 'text-gray-400'}`} />
              ))}
            </div>

            {/* Add to Cart Button */}
            <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="w-full flex items-center justify-center h-[100px] bg-gray-100">
    {/* Centered Red Wines Title */}
    <h1 className="text-3xl font-bold text-center">Champagnes</h1>
  </div>

  {/* Shop Product Cards */}
  <div className="px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {products.map((product) => (
      <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <img src={product.image} alt={product.name} className="w-full h-[200px] object-cover" />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-lg text-gray-600">{product.price}</p>

          {/* Star Rating */}
          <div className="flex items-center space-x-1 mt-2">
            {[...Array(5)].map((_, index) => (
              <AiOutlineStar key={index} className={`text-yellow-400 ${index < product.rating ? 'text-yellow-500' : 'text-gray-400'}`} />
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
    </div>
  );
}

export default Shop;

