import React from 'react'

const NewsLetter = () => {
  return (
    <div className="w-full py-6 text-white bg-green-600 px-4">
        <div className="max-w-[1240px] mx-auto grid">
            <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold py-2">Receive updates on Wicked Wines</h1>
            <p>Sign up here to get updates on Wicked Wines</p>
        </div>
        <div className="my-4">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
            <button className="bg-blue-300 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Updates</button>
        </div>
            <p>We care about your privacy. Please read our <span className="text-blue-300 cursor-pointer">Privacy Policy</span></p>
        </div>
    </div>
  )
}

export default NewsLetter