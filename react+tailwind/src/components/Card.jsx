import React from 'react'

export default function Card({name}) {
    // console.log("Props", props);
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    <img
      className="w-full h-48 object-cover"
      src="https://via.placeholder.com/400x300"
      alt="Card"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="mt-2 text-gray-600">
        
        This is a brief description or content for the card. It can be used for summaries or teasers.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Learn More
        </a>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
          Action
        </button>
      </div>
    </div>
  </div>
  )
}
