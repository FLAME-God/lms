import React from 'react';
import { ChevronRight } from 'lucide-react';
import hero1 from "../assets/clientImage/hero1.png";
import hero2 from "../assets/clientImage/hero2.png";
import hero3 from "../assets/clientImage/hero3.png";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Unlock Your Potential with <span className="text-gray-900">Byway</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Learn in-demand skills from expert instructors. Start your journey today with thousands of courses to choose from.
          </p>
          <Link to={"/courses"}>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center mx-auto md:mx-0">
            Explore courses <ChevronRight size={20} className="ml-2" />
          </button>
          </Link>
        </div>

        {/* Image Cluster with Background Colors */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-96 h-96 rounded-full  flex items-center justify-center gap-4">
            {/* Top Image */}
            <div className="absolute top-8 bg-yellow-400 p-2 rounded-full">
              <img
                src={hero1}
                alt="Student 1"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>

            {/* Bottom Left Image with proper spacing */}
            <div className="absolute bottom-14 left-10 bg-red-400 p-2 rounded-full">
              <img
                src={hero2}
                alt="Student 2"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>

            {/* Bottom Right Image with proper spacing */}
            <div className="absolute bottom-14 right-10 bg-green-400 p-2 rounded-full">
              <img
                src={hero3}
                alt="Student 3"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
