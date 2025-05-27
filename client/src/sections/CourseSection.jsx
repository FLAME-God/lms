import React from 'react'
import { courses } from '../assets/clientImage/assets'
import CouseCard from '../components/shared/CouseCard'
import { Link } from 'react-router-dom'
import Title from '../components/shared/Title.jsx'

function CourseSection({ text = "Top Courses", hideViewAll = false }) {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <Title text={text} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.slice(0, 4).map((course) => (
            <Link to={`/courses/${course.id}`} key={course.id}>
              <CouseCard
                title={course.title}
                image={course.image}
                instructor={course.instructor}
                rating={course.rating}
                price={course.price}
                duration={course.duration}
              />
            </Link>
          ))}
        </div>

        {/* Hide View All Button if prop is true */}
        {!hideViewAll && (
          <div className="flex justify-center mt-4">
            <Link to={"/courses"}>
              <button className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700">
                View All
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default CourseSection