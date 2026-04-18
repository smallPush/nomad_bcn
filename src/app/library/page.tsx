import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LibrarySearch from '@/components/LibrarySearch';
import { getAllArticles } from '@/lib/library';

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

          <LibrarySearch articles={articles} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
