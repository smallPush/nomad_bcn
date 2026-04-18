'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Palmtree, CheckCircle2 } from 'lucide-react';
import content from '../data/content.json';

const iconMap = {
  FileCheck: FileCheck,
  Palmtree: Palmtree
};

const Features = () => {
  return (
    <section id="features" className="py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-900 mb-20 tracking-tight"
        >
          Everything you need to settle in legally
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {content.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
              >
                <div className={`text-4xl mb-8 ${index === 0 ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {Icon && <Icon size={32} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">{feature.title}</h3>
                <ul className="space-y-4 text-lg text-slate-600">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className={`mr-3 h-6 w-6 shrink-0 ${index === 0 ? 'text-green-500' : 'text-orange-500'}`} />
                      <span dangerouslySetInnerHTML={{ __html: item }}></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
