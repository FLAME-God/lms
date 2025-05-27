import React, { useState } from 'react';
import { courses } from '../assets/clientImage/assets';
import CouseCard from '../components/shared/CouseCard';
import { NavLink } from 'react-router-dom';
import CourseSection from '../sections/CourseSection';
import Instructors from '../sections/Instructors';

function Course() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedRating, setSelectedRating] = useState(null); // Rating filter state
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8; // Number of courses per page

  const categories = ["Web Development", "JavaScript", "Python", "Design"];

  // Rating options (filtering options based on rating)
  const ratingOptions = [3, 4, 4.5, 5];

  // Filter logic
  const filteredData = courses.filter((course) => {
    let priceMatch = true;
    let categoryMatch = true;
    let ratingMatch = true;

    // Price Filter Logic
    if (selectedPrice === "Free") priceMatch = course.price === 0;
    else if (selectedPrice === "0 - 500") priceMatch = course.price > 0 && course.price <= 500;
    else if (selectedPrice === "500 - 2000") priceMatch = course.price > 500 && course.price <= 2000;
    else if (selectedPrice === "Above 2000") priceMatch = course.price > 2000;

    // Category Filter Logic
    if (selectedCategory) {
      categoryMatch = course.title.toLowerCase().includes(selectedCategory.toLowerCase());
    }

    // Rating Filter Logic
    if (selectedRating) {
      ratingMatch = course.rating >= selectedRating; // Show courses with rating greater or equal to selectedRating
    }

    return priceMatch && categoryMatch && ratingMatch;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / coursesPerPage);

  // Slice filtered data for current page
  const currentCourses = filteredData.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <section id="filter" className="w-full mt-8">
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        {/* Left Sidebar */}
        <div className="sm:w-1/4 w-full p-4 rounded-md">
          <h1 className="text-2xl font-semibold">Filters</h1>

          {/* Category Filter */}
          <div className="w-full bg-white h-40 mt-4 px-2 rounded-md border border-slate-300 overflow-y-auto">
            <div className="flex justify-between">
              <h1 className="text-gray-800 py-1">Categories</h1>
              <h1
                className="text-[12px] py-1 font-sans cursor-pointer"
                onClick={() => setSelectedCategory('')}
              >
                Clear
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              {categories.map((label, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(label)}
                  className={`px-2 py-1 text-sm font-medium shadow-sm cursor-pointer transition ${selectedCategory === label ? 'bg-rose-200' : 'bg-white text-rose-400'
                    }`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="w-full bg-white h-40 mt-4 px-2 rounded-md border border-slate-300 overflow-y-auto">
            <div className="flex justify-between">
              <h1 className="text-gray-800 py-1">Price</h1>
              <h1
                className="text-[12px] py-1 font-sans cursor-pointer"
                onClick={() => setSelectedPrice('')}
              >
                Clear
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              {['Free', '0 - 500', '500 - 2000', 'Above 2000'].map((label, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPrice(label)}
                  className={`px-2 py-1 text-sm font-medium shadow-sm cursor-pointer transition ${selectedPrice === label ? 'bg-rose-200' : 'bg-white text-rose-400'
                    }`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="w-full bg-white h-40 mt-4 px-2 rounded-md border border-slate-300 overflow-y-auto">
            <div className="flex justify-between">
              <h1 className="text-gray-800 py-1">Rating</h1>
              <h1
                className="text-[12px] py-1 font-sans cursor-pointer"
                onClick={() => setSelectedRating(null)}
              >
                Clear
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              {ratingOptions.map((rating, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedRating(rating)}
                  className={`px-2 py-1 text-sm font-medium shadow-sm cursor-pointer transition ${selectedRating === rating ? 'bg-rose-200' : 'bg-white text-rose-400'
                    }`}
                >
                  {rating} & above
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="sm:w-3/4 w-full p-4 rounded-md">
          <h1 className="text-2xl font-semibold">Explore Courses</h1>

          {/* Course Cards */}
          <div className="w-full flex flex-wrap gap-4 mt-4">
            {currentCourses.length ? (
              currentCourses.map((course, index) => (
                <div key={index} className="w-full sm:w-[48%] lg:w-[23%]">
                  <NavLink to={`/courses/${course.id}`}>
                    <CouseCard
                      title={course.title}
                      image={course.image}
                      instructor={course.instructor}
                      rating={course.rating}
                      price={course.price}
                      duration={course.duration}
                    />
                  </NavLink>
                </div>
              ))
            ) : (
              <p className="text-gray-500 mt-6">No courses match the selected filters.</p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
              className="px-4 py-2 bg-gray-300 text-black rounded-md"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="flex items-center text-lg">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
              className="px-4 py-2 bg-gray-300 text-black rounded-md"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Instructors text="Popular Mentors" />
      <CourseSection text="Featured Courses" hideViewAll />
    </section>
  );
}

export default Course;
