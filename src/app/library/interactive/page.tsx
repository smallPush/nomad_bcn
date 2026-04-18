import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveGlossary from '@/components/InteractiveGlossary';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function InteractiveLibraryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <Link 
                href="/library" 
                className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium"
              >
                <ArrowLeft size={20} />
                Back to Standard Library
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight flex items-center gap-4">
                3D <span className="text-blue-600">Lexicon</span>
                <Sparkles className="text-blue-500" size={40} />
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mt-4">
                Explore the key terms of your relocation in a spatial environment. 
                Interact with the elements to reveal their meaning.
              </p>
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 flex items-center gap-2">
              <Sparkles size={18} />
              Beta Experience
            </div>
          </div>

          <InteractiveGlossary />

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Immersive Learning</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Visualizing concepts in 3D space helps retain information better and understand the connections between administrative steps.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Spatial Search</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Use the integrated filter to highlight spheres in the scene. The 3D engine responds in real-time to your queries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Access</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every term in the scene is linked to its corresponding detailed guide in our documentation library.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
