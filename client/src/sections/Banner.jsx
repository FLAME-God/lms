import React from 'react';
import cta from "../assets/clientImage/cta.png";
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <div className="p-4">
            <img src={cta} alt="Student learning" className="rounded-full w-64 h-64 object-cover" />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Become an Instructor</h2>
          <p className="text-gray-600 mb-6">
            Share your knowledge and expertise with students around the world. Create courses and earn while making a difference.
          </p>
          <Link to={"/teacher"}>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Start Teaching Today
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
