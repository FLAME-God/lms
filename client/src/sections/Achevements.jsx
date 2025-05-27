import React from 'react'
import { stats } from "../assets/clientImage/assets.js"

function Achevements() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((items,index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-gray-700">{items.heading}</h3>
              <p className="text-gray-600">{items.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achevements