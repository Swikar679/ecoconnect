import React from 'react';
import NavItem from './NavItem';

const MobileMenu = ({ items, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-6 right-6 mt-2 transform transition-all duration-300">
      <div className="
        rounded-2xl 
        bg-white/70 
        backdrop-blur-lg 
        shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] 
        border border-white/20 
        p-2 
        space-y-1
      ">
        {items.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;