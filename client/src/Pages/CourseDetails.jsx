import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { courses } from '../assets/clientImage/assets.js';
import {
  ChevronDown,
  ChevronUp,
  StarIcon,
  Users,
  BookOpen,


} from 'lucide-react';

import { Facebook, Instagram, Linkedin } from 'lucide-react'
import CourseSection from '../sections/CourseSection.jsx';


const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));
  const [expandedSections, setExpandedSections] = useState({});

  if (!course) {
    return <div className="text-center py-10 text-red-600">Course not found.</div>;
  }
  const slug = course.title.toLowerCase().replace(/\s+/g, '-'); 


  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 mb-12 px-4">
        {/* Left - Course Content */}
        <div className="flex-1 px-2  mt-4">
          {/* Title + Instructor */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">{course.title}</h1>
            <p className="text-lg text-gray-700 mt-2">by {course.instructor}</p>
          </div>

          {/* Preview Image */}
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-4">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Rating, Students, Lectures */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center text-yellow-500">
              <StarIcon className="w-5 h-5 mr-1" />
              <span className="text-gray-800 font-semibold">{course.rating}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-1" />
              <span>{course.students.toLocaleString()} Students</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BookOpen className="w-5 h-5 mr-1" />
              <span>{course.syllabus.reduce((sum, sec) => sum + sec.lectures.length, 0)} Lectures</span>
            </div>
          </div>

          {/* About */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">About this Course</h2>
            <p className="text-gray-700 leading-relaxed">
              This course offers a complete guide to mastering {course.title}. You'll learn everything from basics to advanced concepts step-by-step.
            </p>
          </div>

          {/* Syllabus */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Syllabus</h2>
            {course.syllabus.map((item) => (
              <div key={item.section} className="border border-gray-300 rounded-lg mb-4">
                <button
                  onClick={() => toggleSection(item.section)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
                >
                  <span className="font-semibold text-gray-800">{item.section}</span>
                  {expandedSections[item.section] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {expandedSections[item.section] && (
                  <ul className="px-6 py-2 bg-white">
                    {item.lectures.map((lecture, index) => (
                      <li key={index} className="py-1 text-gray-700 list-disc list-inside">
                        {lecture}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Payment Sidebar */}
        <div className="w-full md:w-[350px] mt-4">
          <div className="bg-white shadow-lg rounded-lg p-6 sticky top-20">

            <div className="mb-4">
              <span className="text-3xl font-bold text-green-600">${course.price}</span>
            </div>

            <Link to={`/${slug}/purchase/${course.id}`}>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300">
                Enroll Now
              </button>
            </Link>


            {/* Social Media Icons */}
            <div className="flex justify-center mt-6 space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-700 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-700 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-blue-800 hover:text-blue-900 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <CourseSection text='More Courses Like This' hideViewAll />
    </>

  );
};

export default CourseDetails;
