import React from 'react'
import { categories } from '../assets/clientImage/assets'
import Title from '../components/shared/Title.jsx'

function Category() {
  return (
          <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <Title text="Top Categories"/>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-medium">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Category