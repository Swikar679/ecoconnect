import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, BarChart, Globe, Lightbulb } from 'lucide-react';
import FoodWasteSection from '../components/foodWaste/FoodWasteSection';

const AboutFoodWaste = () => {
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
          Understanding Food Waste
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h2 className="text-2xl font-semibold text-gray-800">The Problem</h2>
              </div>
              <p className="text-gray-600">
                Food waste is a global crisis that affects both the environment and society.
                Each year, billions of tons of food are wasted while millions go hungry.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Globe className="w-8 h-8 text-green-500" />
                <h2 className="text-2xl font-semibold text-gray-800">Environmental Impact</h2>
              </div>
              <p className="text-gray-600">
                When food is wasted, all the resources used to produce it are also wasted,
                including water, land, energy, labor, and capital.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <BarChart className="w-8 h-8 text-blue-500" />
                <h2 className="text-2xl font-semibold text-gray-800">Statistics</h2>
              </div>
              <p className="text-gray-600">
                One-third of all food produced globally goes to waste. This amounts to about
                1.3 billion tonnes of food wasted every year.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Lightbulb className="w-8 h-8 text-yellow-500" />
                <h2 className="text-2xl font-semibold text-gray-800">Solutions</h2>
              </div>
              <p className="text-gray-600">
                Through better planning, storage, and distribution, we can significantly
                reduce food waste and its impact on our planet.
              </p>
            </div>
          </motion.div>
        </div>

        <FoodWasteSection />
      </motion.div>
    </div>
  );
};

export default AboutFoodWaste;