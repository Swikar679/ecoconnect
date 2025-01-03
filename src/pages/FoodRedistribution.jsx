import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users } from 'lucide-react';

const FoodRedistribution = () => {
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
          Food Redistribution Network
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Find Local Partners</h3>
                  <p className="text-gray-600">Connect with nearby restaurants, grocers, and food banks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Schedule Pickups</h3>
                  <p className="text-gray-600">Coordinate convenient times for food collection and delivery.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Help Communities</h3>
                  <p className="text-gray-600">Ensure surplus food reaches those who need it most.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-6 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800">Get Started</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Organization Name</label>
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
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                  <option>Food Provider</option>
                  <option>Food Bank</option>
                  <option>Volunteer</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white rounded-xl py-2 px-4 hover:bg-green-700 transition-colors"
              >
                Join Network
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FoodRedistribution;