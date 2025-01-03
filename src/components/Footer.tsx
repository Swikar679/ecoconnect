import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
    { icon: <Youtube className="h-5 w-5" />, href: '#' },
  ];

  const footerLinks = [
    { title: 'About', href: '#' },
    { title: 'Contact', href: '#' },
    { title: 'Privacy Policy', href: '#' },
    { title: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand and Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">EcoConnect</h3>
            <p className="mt-4 text-gray-600">Making sustainability accessible to everyone.</p>
            <div className="mt-6 flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
            <p className="mt-4 text-gray-600">Subscribe to our newsletter for updates.</p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} EcoConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;