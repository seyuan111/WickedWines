import React, { useState } from "react";
import NavBar from '../components/NavBar'

const Checkout = () => {
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment processed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <NavBar />
      <div className="bg-white mt-20 shadow-md rounded-lg max-w-lg w-full px-4 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h2>

        {/* Order Summary */}
        <div className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Order Summary</h3>
          <div className="mt-4">
            <div className="flex justify-between border-b pb-2 mb-2">
              <p>Red Wine (x1)</p>
              <p className="font-semibold">$29.99</p>
            </div>
            <div className="flex justify-between border-b pb-2 mb-2">
              <p>White Wine (x1)</p>
              <p className="font-semibold">$34.99</p>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>$64.98</p>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Payment Details</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Cardholder Name</label>
            <input
              type="text"
              name="name"
              value={cardDetails.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              maxLength="16"
              placeholder="1234 5678 9012 3456"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-600 text-sm font-medium mb-1">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                value={cardDetails.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-600 text-sm font-medium mb-1">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleChange}
                maxLength="3"
                placeholder="123"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition"
          >
            Pay $64.98
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
