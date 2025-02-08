import React from 'react'
import Wines from '../assets/Wines.jpg'
import NavBar from '../components/NavBar'

const Events = () => {

  const events = [
    {
      id: 1,
      name: 'Wine Tasting Night',
      time: 'Saturday, 7:00 PM',
      description: 'Join us for an exquisite wine tasting experience, with a variety of premium wines to enjoy!',
    },
    {
      id: 2,
      name: 'Live Music Performance',
      time: 'Sunday, 5:00 PM',
      description: 'Enjoy live performances by local artists, and indulge in a relaxed atmosphere with great music.',
    },
    {
      id: 3,
      name: 'Cooking Class - Italian Specialties',
      time: 'Friday, 4:00 PM',
      description: 'Learn how to make authentic Italian dishes with a local chef. Tasting included!',
    },
    // Add more events as needed
  ]

  return (
    <div className="w-full min-h-screen">
      <NavBar />
      
      {/* Event Section */}
      <div className="mt-10 w-full py-12 px-4 text-center flex flex-col justify-center items-center">
      
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Events Happening</h1>
        <h2 className="text-lg sm:text-xl mb-8">Come join us for fun events happening throughout the week!</h2>
        
        <div className="w-full px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-neutral-200 bg-opacity-80 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-500">{event.name}</h3>
              <p className="text-gray-600 mt-2">{event.time}</p>
              <p className="mt-4 text-gray-800">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events

