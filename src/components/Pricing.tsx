'use client';

import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-900 mb-6 tracking-tight"
        >
          {content.pricing.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 mb-16"
        >
          {content.pricing.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-slate-950 rounded-[3rem] shadow-2xl p-10 md:p-16 max-w-lg mx-auto text-white relative border border-slate-800"
        >
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20">
            {content.pricing.card.badge}
          </div>
          <h3 className="text-3xl font-bold mb-4 tracking-tight">{content.pricing.card.title}</h3>
          <p className="text-slate-400 text-lg mb-10">{content.pricing.card.subtitle}</p>
          
          <div className="mb-12">
            <span className="text-7xl font-extrabold tracking-tighter">{content.pricing.card.price}</span>
            <span className="text-slate-500 text-xl ml-2">{content.pricing.card.period}</span>
          </div>
          
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full text-center bg-orange-500 text-white font-bold py-5 rounded-2xl hover:bg-orange-600 transition shadow-xl shadow-orange-500/20 text-xl"
          >
            {content.pricing.card.cta}
          </motion.a>
          <p className="mt-6 text-sm text-slate-500 font-medium">
            {content.pricing.card.footer}
          </p>
          
          {/* Decorative glow */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
