import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tier List Maker</h3>
            <p className="text-gray-400">Create and share beautiful tier lists for Marvel Rivals, Brawl Stars, NIKKE, and more.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">How to Use</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/dmca" className="text-gray-400 hover:text-white transition-colors">DMCA</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com/tierlistmaker" className="text-gray-400 hover:text-white transition-colors" title="Follow us on Twitter"><Twitter size={24} /></a>
              <a href="https://facebook.com/tierlistmaker" className="text-gray-400 hover:text-white transition-colors" title="Follow us on Facebook"><Facebook size={24} /></a>
              <a href="https://instagram.com/tierlistmaker" className="text-gray-400 hover:text-white transition-colors" title="Follow us on Instagram"><Instagram size={24} /></a>
              <a href="https://github.com/tierlistmaker" className="text-gray-400 hover:text-white transition-colors" title="Follow us on GitHub"><Github size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tier List Maker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;