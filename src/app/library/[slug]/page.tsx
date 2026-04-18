import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getArticleData, getAllArticles } from '@/lib/library';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleData(slug);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/library" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-12 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Volver a la Biblioteca
          </Link>
          
          <div className="space-y-6">
            <span className="px-4 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full uppercase tracking-wider">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {article.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>Actualizado: {new Date(article.date).toLocaleDateString('es-ES')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={18} />
                <div className="flex gap-2">
                  {article.tags.map(tag => (
                    <span key={tag} className="text-slate-500">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-slate prose-lg max-w-none 
            prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-slate-900
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-ul:list-disc prose-ol:list-decimal"
            dangerouslySetInnerHTML={{ __html: article.contentHtml || '' }}
          />
        </div>
      </article>

      <Footer />
    </main>
  );
}
