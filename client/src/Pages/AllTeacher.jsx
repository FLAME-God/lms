

import React, { useState } from 'react';
import { instructors } from '../assets/clientImage/assets';
import TeacherCard from '../components/shared/TeacherCard';

const AllTeachers = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const teachersPerPage = 6;

  // Extract unique specializations
  const specializations = [...new Set(instructors.map(t => t.specialization))];

  // Filtered data
  const filteredTeachers = instructors.filter(teacher =>
    selectedSpecialization
      ? teacher.specialization === selectedSpecialization
      : true
  );

  // Pagination
  const totalPages = Math.ceil(filteredTeachers.length / teachersPerPage);
  const paginatedTeachers = filteredTeachers.slice(
    (currentPage - 1) * teachersPerPage,
    currentPage * teachersPerPage
  );

  return (
    <section className="w-full mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-6">
        {/* Sidebar Filter */}
        <div className="sm:w-1/4 w-full">
          <h2 className="text-xl font-semibold mb-2">Filter by Specialization</h2>
          <div className="bg-white border rounded-md p-3 space-y-2">
            <button
              onClick={() => setSelectedSpecialization('')}
              className={`block w-full text-left px-3 py-2 rounded ${selectedSpecialization === '' ? 'bg-rose-200 font-medium' : 'hover:bg-gray-100'}`}
            >
              All
            </button>
            {specializations.map((spec, i) => (
              <button
                key={i}
                onClick={() => setSelectedSpecialization(spec)}
                className={`block w-full text-left px-3 py-2 rounded ${selectedSpecialization === spec ? 'bg-rose-200 font-medium' : 'hover:bg-gray-100'}`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Teacher Grid */}
        <div className="sm:w-3/4 w-full">
          <h1 className="text-2xl font-semibold mb-4">Our Instructors</h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedTeachers.length ? (
              paginatedTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} {...teacher} />
              ))
            ) : (
              <p className="text-gray-500">No teachers found.</p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <button
              onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTeachers;
