import React, { useState, useEffect } from 'react';
import { Leaf, Recycle, Heart, Menu, X } from 'lucide-react';
import NavItem from './NavItem';
import MobileMenu from './MobileMenu';
import { NavItemType } from './types';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItemType[] = [
    { name: 'Food Redistribution', icon: <Leaf className="w-5 h-5" /> },
    { name: 'Donate Items', icon: <Heart className="w-5 h-5" /> },
    { name: 'About Food Waste', icon: <Recycle className="w-5 h-5" /> },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'top-6 px-6' : 'top-0 px-4'
      }`}
    >
      <div 
        className={`
          max-w-7xl mx-auto 
          rounded-2xl 
          transition-all duration-500 ease-in-out
          transform ${isScrolled ? 'scale-98 hover:scale-100' : 'scale-100'}
          ${
            isScrolled 
              ? 'bg-white/70 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20' 
              : 'bg-white shadow-lg'
          }
        `}
      >
        <div className="flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <Leaf className="h-8 w-8 text-green-600 transform transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold text-gray-800 transition-colors group-hover:text-green-600">
              EcoConnect
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/80 text-gray-600 hover:text-green-600 transition-all duration-300 hover:shadow-md"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu items={navItems} isOpen={isMenuOpen} />
    </nav>
  );
};

export default Navbar;