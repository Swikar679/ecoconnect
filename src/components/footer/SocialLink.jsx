import React from 'react';
import { motion } from 'framer-motion';

const SocialLink = ({ href, icon }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.2, rotate: 12 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-400 hover:text-green-600 transition-colors"
    >
      {icon}
    </motion.a>
  );
};

export default SocialLink;