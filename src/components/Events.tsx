'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, RefreshCw } from 'lucide-react';

interface CityEvent {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  address: string;
  category: string;
  link: string | null;
}

const Events = () => {
  const [events, setEvents] = useState<CityEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      if (data.success) {
        setEvents(data.events);
      } else {
        setError('Could not load events at this moment.');
      }
    } catch (err) {
      setError('An error occurred while fetching events.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <section id="events" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Barcelona City Events
            </motion.h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Stay connected with what's happening in your new city. Automatically updated from Barcelona's Open Data portal.
            </p>
          </div>
          <button 
            onClick={fetchEvents}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors bg-slate-50 px-4 py-2 rounded-full border border-slate-200"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-slate-50 rounded-[2rem] animate-pulse"></div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-orange-50 text-orange-800 p-8 rounded-[2rem] text-center">
            <p className="text-lg">{error}</p>
            <button onClick={fetchEvents} className="mt-4 underline">Try again</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="flex-1">
                  <span className="inline-block px-4 py-1 bg-white text-blue-600 text-sm font-semibold rounded-full border border-blue-100 mb-6">
                    {event.category || 'General'}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 leading-tight">
                    {event.name}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start text-slate-600 gap-3">
                      <Calendar size={18} className="shrink-0 mt-1 text-slate-400" />
                      <span className="text-sm">
                        {new Date(event.startDate).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-start text-slate-600 gap-3">
                      <MapPin size={18} className="shrink-0 mt-1 text-slate-400" />
                      <span className="text-sm line-clamp-1">{event.address}</span>
                    </div>
                  </div>
                </div>
                {event.link && (
                  <a 
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
                  >
                    View Details
                    <ExternalLink size={16} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
