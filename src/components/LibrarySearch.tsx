'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Tag, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Article } from '@/lib/library';

interface LibrarySearchProps {
  articles: Article[];
}

const LibrarySearch = ({ articles }: LibrarySearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter((article) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.description.toLowerCase().includes(searchLower) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="space-y-12">
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400" size={24} />
        <input
          type="text"
          placeholder="Search procedures, visas or important terms..."
          className="w-full bg-white border-2 border-slate-100 rounded-3xl py-6 pl-16 pr-8 text-xl focus:border-blue-500 focus:outline-none shadow-sm transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-4 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {article.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link 
                href={`/library/${article.slug}`}
                className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors mt-auto"
              >
                Read Full Guide
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <BookOpen size={64} className="mx-auto text-slate-200 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No results found</h3>
            <p className="text-slate-500">Try with other search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LibrarySearch;
