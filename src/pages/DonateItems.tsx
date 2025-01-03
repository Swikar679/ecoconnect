import React from 'react';
import { Heart } from 'lucide-react';

const DonateItems = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Heart className="h-12 w-12 text-green-600 mx-auto" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Donate Items</h1>
          <p className="mt-4 text-xl text-gray-600">
            Support your community by donating items to those in need
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">Clothing</h2>
            <p className="mt-2 text-gray-600">
              Donate gently used clothing to help others stay warm and comfortable.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">Household Items</h2>
            <p className="mt-2 text-gray-600">
              Share household items that can help others set up their homes.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">Electronics</h2>
            <p className="mt-2 text-gray-600">
              Give electronics a second life by donating them to those who need them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateItems;
