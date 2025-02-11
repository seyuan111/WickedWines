import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-router-dom'

const Cart = ({ cartOpen, setCartOpen }) => {
  const cartItems = [
    { id: 1, name: "Red Wine", price: "$29.99", image: "https://via.placeholder.com/60" },
    { id: 2, name: "White Wine", price: "$34.99", image: "https://via.placeholder.com/60" },
  ];

  return (
    <>
      {/* Overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setCartOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[350px] h-full bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-white text-lg font-bold">Shopping Cart</h2>
          <button onClick={() => setCartOpen(false)}>
            <AiOutlineClose size={25} className="text-white" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[65vh]">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b border-gray-700 pb-2">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-md" />
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <p className="text-gray-400">{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center mt-10">Your cart is empty</p>
          )}
        </div>

        {/* Checkout Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black border-t border-gray-700">
          <button className="w-full border-2 text-white py-3 rounded-md text-lg font-semibold transition">
            <Link to="/checkout">Proceed to Checkout</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;