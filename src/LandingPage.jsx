import React from "react";
import Navbar from "./components/Navbar";
import Typewriter from 'typewriter-effect';

const LandingPage = () => {
  return (
    <div className='overflow-x-auto'>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 animate-fadeIn">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Welcome to Our Portal")
              .pauseFor(500)
              
              .start();
          }}
        />
      </h1>

          {/* Fluid Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Faculty */}
            <div 
              className="group bg-blue-500 text-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slideInLeft">
              <h2 
                className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                Faculty
              </h2>
              <p className="text-gray-200">
                Access teaching resources, schedules, and more.
              </p>
            </div>

            {/* HOD */}
            <div 
              className="group bg-green-500 text-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slideInRight">
              <h2 
                className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                HOD
              </h2>
              <p className="text-gray-200">
                Manage departments, allocate resources, and communicate with staff.
              </p>
            </div>

            {/* Principal */}
            <div 
              className="group bg-red-500 text-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl md:col-span-2 animate-fadeIn">
              <h2 
                className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                Principal
              </h2>
              <p className="text-gray-200">
                Oversee institution operations and ensure excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;