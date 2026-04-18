import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LibrarySearch from '@/components/LibrarySearch';
import { getAllArticles } from '@/lib/library';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function LibraryPage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Information <span className="text-blue-600">Library</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about procedures, visas, and life in Barcelona. 
              Updated according to the latest 2026 regulations.
            </p>
          </div>

          <div className="mb-16">
            <Link 
              href="/library/interactive"
              className="group relative flex items-center justify-between bg-blue-600 rounded-[2rem] p-8 overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-200"
            >
              <div className="relative z-10 text-white max-w-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/50 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">New Experience</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">Explore the 3D Lexicon</h2>
                <p className="text-blue-100 text-lg">
                  Prefer a more interactive way to learn? Navigate our spatial guide to understand administrative terms.
                </p>
              </div>
              <div className="relative z-10 bg-white text-blue-600 p-6 rounded-2xl group-hover:scale-110 transition-transform shadow-xl">
                <Sparkles size={32} />
              </div>
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-50 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800 rounded-full blur-[100px] opacity-50 -ml-32 -mb-32"></div>
            </Link>
          </div>

          <LibrarySearch articles={articles} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
