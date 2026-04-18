'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Bot, Rocket } from 'lucide-react';
import content from '../data/content.json';

const iconMap = {
  ClipboardList: ClipboardList,
  Bot: Bot,
  Rocket: Rocket
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            {content.howItWorks.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            {content.howItWorks.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 text-center relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-[2px] bg-slate-100 z-0"></div>

          {content.howItWorks.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 group"
              >
                <div className="w-28 h-28 mx-auto bg-white border border-slate-100 text-blue-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-slate-200/50 group-hover:shadow-blue-100 group-hover:-translate-y-2 transition-all duration-300">
                  {Icon && <Icon size={40} strokeWidth={1.5} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed px-4">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
