'use client';

import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            {content.pricing.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            {content.pricing.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.pricing.plans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className={`rounded-[3rem] p-10 md:p-12 relative border flex flex-col ${
                plan.highlight 
                  ? 'bg-slate-950 text-white border-slate-800 shadow-2xl scale-105 z-10' 
                  : 'bg-white text-slate-900 border-slate-200 shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20">
                  {plan.badge}
                </div>
              )}
              {!plan.highlight && (
                <div className="mb-6">
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">{plan.badge}</span>
                </div>
              )}
              
              <h3 className="text-3xl font-bold mb-4 tracking-tight">{plan.title}</h3>
              <p className={`text-lg mb-8 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                {plan.subtitle}
              </p>
              
              <div className="mb-10">
                <span className="text-6xl font-extrabold tracking-tighter">{plan.price}</span>
                <span className={`text-xl ml-2 ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-1.5 rounded-full p-0.5 ${plan.highlight ? 'bg-orange-500' : 'bg-blue-600'}`}>
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={plan.highlight ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center font-bold py-5 rounded-2xl transition shadow-xl text-xl ${
                  plan.highlight
                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/20'
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10'
                }`}
              >
                {plan.cta}
              </motion.a>
              <p className={`mt-6 text-sm font-medium text-center ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                {plan.footer}
              </p>
              
              {plan.highlight && (
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
