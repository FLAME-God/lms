import React from 'react'
import { instructors } from '../assets/clientImage/assets.js'
import TeacherCard from '../components/shared/TeacherCard.jsx'
import Title from '../components/shared/Title.jsx'
import { Link } from 'react-router-dom'

function Instructors({ text = "Top Instructors" }) {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Title text={text} />

        <div className="flex flex-wrap gap-4 p-4 justify-center ">

          {instructors.slice(0, 4).map(instructor => (
            <Link to={`/allTeacher/${instructor.id}`} key={instructor.id}>
              <TeacherCard key={instructor.id} name={instructor.name} image={instructor.image} specialization={instructor.specialization} experience={instructor.experience} students={instructor.students} />
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Instructors