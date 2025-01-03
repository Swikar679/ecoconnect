import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  name: string;
  icon: React.ReactElement<LucideIcon>;
  onClick?: () => void;
}

const NavItem = ({ name, icon, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
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
    </button>
  );
};

export default NavItem;