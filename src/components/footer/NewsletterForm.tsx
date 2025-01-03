import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="px-4 py-2 bg-green-600 text-white rounded-r-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Send className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </div>
    </form>
  );
};

export default NewsletterForm;