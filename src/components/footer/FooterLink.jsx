import React from 'react';
import { motion } from 'framer-motion';

const FooterLink = ({ href, children }) => {
  return (
    <motion.li
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a
        href={href}
        className="text-gray-600 hover:text-green-600 transition-colors"
      >
        {children}
      </a>
    </motion.li>
  );
};

export default FooterLink;