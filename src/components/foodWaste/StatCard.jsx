import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ percentage, title, description, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className={`text-4xl font-bold mb-2 ${color}`}>
        {percentage}%
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default StatCard;