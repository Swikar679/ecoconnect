import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement<LucideIcon>;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
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
}

export default SocialLink;