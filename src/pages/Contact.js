import React from 'react'
import Wines from '../assets/Wines.jpg'
import NavBar from '../components/NavBar'

const Contact = () => {
  return (
    <div className="w-full h-screen">
      <NavBar />

      <div className="relative w-full h-full">
        <img src={Wines} className="w-full h-full object-cover absolute -z-10" />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

          <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg max-w-lg w-full">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-blue-600">Email:</h2>
              <h3 className="text-lg text-gray-800">WickedWines@gmail.com</h3>
            </div>

            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-blue-600">Fax:</h2>
              <h3 className="text-lg text-gray-800">111-222-3333</h3>
            </div>

            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-blue-600">Phone:</h2>
              <h3 className="text-lg text-gray-800">222-333-4444</h3>
            </div>

            {/* Optional: You can add a contact form here */}
            {/* <div className="mt-8">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Send us a message</h3>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="p-3 rounded-lg shadow-md" />
                <input type="email" placeholder="Your Email" className="p-3 rounded-lg shadow-md" />
                <textarea placeholder="Your Message" className="p-3 rounded-lg shadow-md" rows="4"></textarea>
                <button className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all">Send Message</button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
