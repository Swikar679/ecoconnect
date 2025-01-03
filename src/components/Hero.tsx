import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block transform transition-transform hover:scale-105 duration-300">
                  Make a difference
                </span>
                <span className="block text-green-600 transform transition-transform hover:scale-105 duration-300">
                  for our planet
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in">
                Join our community in creating a sustainable future. Donate food, share resources,
                and learn about eco-friendly practices that make a real impact.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="group w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg md:py-4 md:text-lg md:px-10">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 transform transition-transform hover:scale-105 duration-500">
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full overflow-hidden">
          <img
            className="h-full w-full object-cover transform transition-all duration-700 hover:scale-110"
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
            alt="Fresh organic vegetables and fruits"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-transparent mix-blend-overlay transition-opacity duration-300 hover:opacity-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;