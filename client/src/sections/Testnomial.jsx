import React from 'react'
import { testimonials } from '../assets/clientImage/assets'
import TestinomialCard from '../components/shared/TestinomialCard'
import Title from '../components/shared/Title.jsx'

function Testnomial() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <Title text="What Our Customers Say About Us"/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <TestinomialCard key={testimonial.id} comment={testimonial.comment} avatar={testimonial.avatar} user={testimonial.user} />

          ))}
        </div>
      </div>
    </section>
  )
}

export default Testnomial