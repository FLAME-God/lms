import React from 'react'

function TeacherCard({ image, name, specialization,students,experience }) {
    return (
        <div
 
            className="bg-slate-50 rounded-lg shadow-md w-full sm:w-64 max-w-xs overflow-hidden flex flex-col items-center p-4"
        >
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 mb-2">{specialization}</p>

            <div className="flex items-center justify-between w-full mt-2">
                <span className="text-gray-800 font-medium">{experience} Yr Experience</span>
                <span className="text-gray-600">{students} Students</span>
            </div>
        </div>
    )
}

export default TeacherCard

