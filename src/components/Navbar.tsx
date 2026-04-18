'use client';

import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <span className="font-bold text-2xl text-slate-900 tracking-tighter">
              {content.site.name}<span className="text-blue-600">{content.site.suffix}</span>
            </span>
            <span className="ml-2 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
              {content.site.edition}
            </span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {content.navigation.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-slate-600 hover:text-blue-600 font-medium transition"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a 
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-800 transition shadow-md"
            >
              Start Your Journey
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
