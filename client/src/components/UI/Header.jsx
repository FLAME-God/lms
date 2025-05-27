// Header Component
import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import {assets} from "../../assets/clientImage/assets.js"

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center  ">
          <Link to={"/"}>
          <img className='h-16 w-full' src={assets.logo} alt="" />
          {/* <h1 className="text-2xl font-bold text-blue-600">Byway</h1> */}
          </Link>
        </div>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:flex items-center flex-1 mx-16">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for courses..."
              aria-label="Search for courses"
              className="w-full border border-gray-300 rounded-full px-4 py-2 pl-10"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="text-gray-700 hover:text-blue-600">Log in</button>
          </Link>
          <Link to="/signin">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
