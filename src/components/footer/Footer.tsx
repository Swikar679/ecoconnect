import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import SocialLink from './SocialLink';
import NewsletterForm from './NewsletterForm';
import FooterLink from './FooterLink';
import Logo from './Logo';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <Logo />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.title}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
            <p className="mt-4 text-gray-600">Subscribe to our newsletter for updates.</p>
            <NewsletterForm />
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} EcoConnect. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;