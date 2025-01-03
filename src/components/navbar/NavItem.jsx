import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ name, icon, to }) => {
  return (
    <Link
      to={to}
      className="
        flex items-center space-x-2 
        px-4 py-2 
        rounded-full 
        text-gray-600 
        transition-all duration-300
        hover:text-green-600 
        hover:bg-green-50/50 
        hover:shadow-sm
        active:scale-95
      "
    >
      <span className="transform transition-transform group-hover:rotate-12">
        {icon}
      </span>
      <span>{name}</span>
    </Link>
  );
};

export default NavItem;