import React from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center space-x-3 group">
        <Leaf className="h-12 w-12 text-green-600 transform transition-transform group-hover:rotate-12" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          EcoConnect
        </h1>
      </div>
      <p className="mt-3 text-gray-600 max-w-md">
        Making sustainability accessible to everyone through community action.
      </p>
    </motion.div>
  );
};

export default Logo;