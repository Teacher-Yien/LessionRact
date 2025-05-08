import React from 'react';
import { HiHome } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";

export const Slidebar = () => {
  return (
    <div className="p-4">
      <header className="flex flex-col items-center mb-6">
        <img 
          className="w-24 h-24 rounded-full mb-3 border-4 border-gray-200 shadow-md" 
          src="luffy.jpg" 
          alt="Luffy profile" 
        />
        <span className="text-2xl font-semibold text-black mb-6">Luffy</span>
        
        <nav className="w-full">
          <ul className="grid gap-3">
            <li>
              <a 
                href="#" 
                className="flex items-center p-3 text-lg bg-gray-100 rounded-lg 
                  hover:bg-gray-200 transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <HiHome className="text-2xl mr-3 text-gray-700" />
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center p-3 text-lg bg-gray-100 rounded-lg 
                  hover:bg-gray-200 transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                <FaUserCircle className="text-2xl mr-3 text-gray-700" />
                Profile
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center p-3 text-lg bg-gray-100 rounded-lg 
                  hover:bg-gray-200 transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                <FaUserCircle className="text-2xl mr-3 text-gray-700" />
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};