import React from 'react';
import { Recycle } from 'lucide-react';

const RecyclingComposting = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Recycle className="h-12 w-12 text-green-600 mx-auto" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Recycling & Composting</h1>
          <p className="mt-4 text-xl text-gray-600">
            Learn how to reduce waste through recycling and composting
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">Recycling Guide</h2>
            <p className="mt-2 text-gray-600">
              Learn what items can be recycled and how to properly sort them.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">Composting Tips</h2>
            <p className="mt-2 text-gray-600">
              Start your composting journey with our comprehensive guide.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900">Collection Points</h2>
            <p className="mt-2 text-gray-600">
              Find nearby recycling centers and composting facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingComposting;
