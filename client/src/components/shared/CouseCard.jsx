import React from 'react'
import Star from './Star'

function CouseCard({title,image,instructor,rating,price,duration}) {
    return (
        <div  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-2">{instructor}</p>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500 font-semibold mr-1">{rating}</span>
                    <div className="flex">
                        <Star rating={rating}/>
                    </div>
                    <span className="text-gray-500 text-xs ml-2">{duration} Total Hours</span>

                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold">₹{price}</span>
                    <button className="text-sm text-blue-600 hover:text-blue-800">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default CouseCard