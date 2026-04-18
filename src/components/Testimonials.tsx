'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import content from '../data/content.json';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            {content.successStories.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            {content.successStories.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.successStories.cases.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Quote size={24} />
                  </div>
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-8">
                  "{item.text}"
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold mr-4 overflow-hidden border-2 border-white shadow-sm">
                    <span className="text-blue-600 text-sm">{item.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.job} from {item.country}</p>
                  </div>
                </div>
                <div className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  {item.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white -z-0 skew-y-3"></div>
    </section>
  );
};

export default Testimonials;
