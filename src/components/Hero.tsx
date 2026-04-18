'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import content from '../data/content.json';

const Hero = () => {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 pr-0 lg:pr-12 text-center lg:text-left z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-blue-50 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 border border-blue-100"
          >
            {content.hero.badge}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight"
          >
            {content.hero.title} <br />
            <span className="text-blue-600">{content.hero.subtitle}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            {content.hero.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a href="#" className="w-full sm:w-auto text-center bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition shadow-xl hover:shadow-orange-200 hover:-translate-y-1">
              {content.hero.cta}
            </a>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-slate-500 font-medium"
          >
            {content.hero.subtext}
          </motion.p>
        </div>
        
        <div className="lg:w-1/2 mt-16 lg:mt-0 hidden md:block perspective-1000">
          <motion.div 
            initial={{ opacity: 0, rotateY: 20, x: 50 }}
            animate={{ opacity: 1, rotateY: 2, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 p-8 relative max-w-md mx-auto"
          >
            <h3 className="font-bold text-2xl mb-8 border-b pb-4 text-slate-900">Your BCN Onboarding</h3>
            <div className="space-y-6">
              {[
                { label: 'Profile Analysis', status: 'completed', number: '✓' },
                { label: 'Generate EX-18 & Tasa Forms', status: 'active', number: '2' },
                { label: 'Book Empadronamiento', status: 'pending', number: '3' },
                { label: 'Unlock: First Days Guide', status: 'pending', number: '4' }
              ].map((step, i) => (
                <motion.div 
                  key={step.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`flex items-center space-x-4 ${step.status === 'completed' ? 'opacity-50' : ''} ${step.status === 'active' ? 'bg-blue-50 p-4 rounded-2xl border border-blue-100' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step.status === 'completed' ? 'bg-green-500 text-white' : 
                    step.status === 'active' ? 'bg-blue-500 text-white animate-pulse' : 
                    'border-2 border-slate-200 text-slate-400'
                  }`}>
                    {step.number}
                  </div>
                  <div className={`${step.status === 'active' ? 'text-blue-900 font-bold' : 'text-slate-600'} ${step.status === 'completed' ? 'line-through' : ''}`}>
                    {step.label}
                  </div>
                  {step.status === 'active' && (
                    <div className="ml-auto text-[10px] uppercase tracking-wider bg-white px-2 py-1 rounded-md text-blue-600 border border-blue-200 font-bold">
                      AI Active
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full -z-10 blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
