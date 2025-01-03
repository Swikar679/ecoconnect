import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Recycle, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Food Redistribution', icon: <Leaf className="w-5 h-5" />, path: '/food-redistribution' },
    { name: 'Donate Items', icon: <Heart className="w-5 h-5" />, path: '/donate-items' },
    { name: 'Recycling & Composting', icon: <Recycle className="w-5 h-5" />, path: '/recycling-composting' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#2B6B39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Leaf className="h-6 w-6 text-white" />
            <span className="ml-2 text-xl font-semibold text-white">EcoConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-2 text-white hover:bg-[#225830] transition-colors ${
                  location.pathname === item.path ? 'bg-[#225830]' : ''
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-200 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-3 py-2 text-white hover:bg-[#225830] transition-colors ${
                    location.pathname === item.path ? 'bg-[#225830]' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;