import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle } from 'lucide-react';

const DonateItems = () => {
  return (
    <div className="pt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 text-center"
        >
          Donate Items
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Accept</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Non-perishable food items</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Canned goods</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Packaged foods</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Kitchen equipment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Package className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Package Items</h3>
                    <p className="text-gray-600">Carefully pack your donations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Truck className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Schedule Pickup</h3>
                    <p className="text-gray-600">We'll collect from your location.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Schedule a Donation</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pickup Address</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Items Description</label>
                <textarea
                  rows="4"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Pickup Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white rounded-xl py-2 px-4 hover:bg-green-700 transition-colors"
              >
                Schedule Pickup
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DonateItems;