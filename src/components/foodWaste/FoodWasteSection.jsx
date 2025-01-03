import React from 'react';
import { motion } from 'framer-motion';
import StatCard from './StatCard';

const stats = [
  {
    percentage: 33,
    title: "Global Food Waste",
    description: "Of all food produced globally is lost or wasted annually",
    color: "text-red-600"
  },
  {
    percentage: 45,
    title: "Fruits & Vegetables",
    description: "Of all produced fruits and vegetables are wasted",
    color: "text-green-600"
  },
  {
    percentage: 25,
    title: "Household Impact",
    description: "Of household food purchases end up in the trash",
    color: "text-yellow-600"
  },
  {
    percentage: 8,
    title: "Carbon Footprint",
    description: "Of global greenhouse gas emissions come from food waste",
    color: "text-blue-600"
  }
];

const FoodWasteSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            The Impact of Food Waste
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the scale of food waste is crucial for creating effective solutions.
            Here are some key statistics that highlight the urgency of this global challenge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              percentage={stat.percentage}
              title={stat.title}
              description={stat.description}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodWasteSection;