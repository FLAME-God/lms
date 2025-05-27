import React from 'react'
import { Star } from 'lucide-react'

function TestinomialCard({comment,user,avatar}) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <Star size={16} className="fill-yellow-500 text-yellow-500" />
        <Star size={16} className="fill-yellow-500 text-yellow-500" />
        <Star size={16} className="fill-yellow-500 text-yellow-500" />
        <Star size={16} className="fill-yellow-500 text-yellow-500" />
        <Star size={16} className="fill-yellow-500 text-yellow-500" />
      </div>
      <p className="text-gray-700 mb-4">{comment}</p>
      <div className="flex items-center">
        <img src={avatar} alt={user} className="w-10 h-10 rounded-full mr-3" />
        <span className="font-medium">{user}</span>
      </div>
    </div>
  )
}

export default TestinomialCard