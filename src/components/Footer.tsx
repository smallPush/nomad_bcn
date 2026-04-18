import React from 'react';
import content from '../data/content.json';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-10 md:mb-0 text-center md:text-left">
          <span className="font-bold text-2xl text-white tracking-tighter">
            {content.site.name}<span className="text-blue-500">{content.site.suffix}</span>
          </span>
          <p className="text-sm mt-3 font-medium">{content.site.tagline}</p>
        </div>
        <div className="flex space-x-10 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-900 text-center">
        <p className="text-xs tracking-widest uppercase opacity-30">
          © {new Date().getFullYear()} {content.site.name}{content.site.suffix}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
