import React from 'react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold hover:text-indigo-200 transition-colors"
            title="Best Tier List Maker for Games, Movies, and More"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Crown size={32} />
            </motion.div>
            <span>Tier List Maker</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div className="flex items-center space-x-8">
              {[
                { to: "/help", text: "How to Use", title: "Learn how to create tier lists" },
                { to: "/about", text: "About", title: "About Tier List Maker" },
                { to: "/contact", text: "Contact", title: "Contact Tier List Maker Support" }
              ].map((item) => (
                <Link 
                  key={item.to}
                  to={item.to}
                  className="relative group"
                  title={item.title}
                >
                  <span className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-indigo-200">
                    {item.text}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    initial={false}
                    animate={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </Link>
              ))}
            </motion.div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;