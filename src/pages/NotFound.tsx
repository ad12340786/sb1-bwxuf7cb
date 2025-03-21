import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowRight, Trophy, Gamepad } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="mb-12"
          >
            <h1 className="text-[12rem] font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Oops! This Tier Doesn't Exist</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Looks like you've ventured into uncharted territory! Don't worry though - there are plenty of tier lists waiting to be created.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/"
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <Home className="group-hover:rotate-12 transition-transform" size={24} />
              <span className="text-lg font-semibold">Return Home</span>
            </Link>
            
            <Link
              to="/help"
              className="flex items-center space-x-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300 group"
            >
              <Search className="group-hover:scale-110 transition-transform" size={24} />
              <span className="text-lg font-semibold">Explore Tier Lists</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-90"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Popular Tier Lists
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                to="/create/games"
                className="group p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <Gamepad className="w-8 h-8 text-indigo-600 group-hover:rotate-12 transition-transform" />
                  <ArrowRight className="w-5 h-5 text-indigo-400 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-xl font-semibold text-indigo-600 mb-2">Marvel Rivals Tier List</h4>
                <p className="text-gray-600">Rank the strongest characters in the current meta</p>
              </Link>

              <Link
                to="/create/games"
                className="group p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <Trophy className="w-8 h-8 text-purple-600 group-hover:rotate-12 transition-transform" />
                  <ArrowRight className="w-5 h-5 text-purple-400 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-xl font-semibold text-purple-600 mb-2">Brawl Stars Tier List</h4>
                <p className="text-gray-600">Create the ultimate brawler rankings</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
