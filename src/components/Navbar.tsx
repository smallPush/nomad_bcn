'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import content from '../data/content.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-blue-200">
                <span className="text-white font-black text-xl italic">A</span>
              </div>
              <span className="font-bold text-2xl text-slate-900 tracking-tighter">
                {content.site.name}<span className="text-blue-600">{content.site.suffix}</span>
              </span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {content.navigation.map((item) => {
              const isInternal = item.href.startsWith('/');
              const isActive = pathname === item.href;
              
              return (
                <div key={item.label} className="relative px-4 py-2 group">
                  {isInternal ? (
                    <Link
                      href={item.href}
                      className={`text-sm font-semibold transition-colors duration-200 ${
                        isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full"
                    />
                  )}
                </div>
              );
            })}
            
            <div className="pl-4 ml-4 border-l border-slate-200">
              <Link 
                href="/#pricing"
                className="group bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-blue-200 flex items-center gap-2"
              >
                Start Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="relative z-50 md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl md:hidden flex flex-col p-8 pt-24"
            >
              <div className="flex flex-col space-y-6">
                {content.navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-2xl font-bold ${
                        pathname === item.href ? 'text-blue-600' : 'text-slate-900 hover:text-blue-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 mt-8 border-t border-slate-100"
                >
                  <Link 
                    href="/#pricing"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Your Journey
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
