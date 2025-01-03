import React from 'react';
import { Leaf } from 'lucide-react';

const FoodRedistribution = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Leaf className="h-12 w-12 text-green-600 mx-auto" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Food Redistribution</h1>
          <p className="mt-4 text-xl text-gray-600">
            Join us in our mission to reduce food waste and help those in need
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Add your content here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">Donate Excess Food</h2>
            <p className="mt-2 text-gray-600">
              Help reduce food waste by donating your excess food to those who need it most.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">Find Food Banks</h2>
            <p className="mt-2 text-gray-600">
              Locate nearby food banks and organizations that accept food donations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">Track Impact</h2>
            <p className="mt-2 text-gray-600">
              See how your donations are making a difference in your community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRedistribution;
