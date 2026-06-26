/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat, DoorOpen, Hammer, Fence, Home, Wrench, Layout, Briefcase, ChevronRight, Check } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

// Map icon names safely to avoid heavy imports
const ICON_COMPONENTS = {
  ChefHat,
  DoorOpen,
  Hammer,
  Fence,
  Home,
  Wrench,
  Layout,
  Briefcase,
};

interface ServicesProps {
  onOpenQuoteWithService: (serviceTitle: string) => void;
}

export default function Services({ onOpenQuoteWithService }: ServicesProps) {
  const [activeDetailsId, setActiveDetailsId] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setActiveDetailsId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="relative py-24 bg-slate-900 border-y border-slate-950">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Services & Solutions</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="services-heading">
            Exceptional Carpentry for All Aspects of Joinery
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            From the initial consultation to the final finish, we execute every carpentry project with top-tier British craftsmanship, high-quality timber, and impeccable tidy site-keeping.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="services-grid">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_COMPONENTS[service.iconName as keyof typeof ICON_COMPONENTS] || Wrench;
            const isOpen = activeDetailsId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 transition-all hover:border-slate-700 hover:shadow-xl hover:-translate-y-1 h-full"
                id={`service-card-${service.id}`}
              >
                {/* Upper Section */}
                <div>
                  {/* Photo Thumbnail */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    
                    {/* Floating Circular Icon */}
                    <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800/80 text-blue-400 shadow-md">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Expandable Long Description Panel */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-xs text-slate-300 leading-relaxed border-t border-slate-900 pt-3 italic">
                            {service.longDescription}
                          </p>
                          <div className="mt-3 flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                            <Check className="h-3 w-3 text-blue-400" />
                            <span>Experienced Fitting Included</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-900 mt-auto">
                  <button
                    onClick={() => toggleDetails(service.id)}
                    className="flex items-center space-x-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{isOpen ? 'Show Less' : 'Learn More'}</span>
                    <ChevronRight className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                  </button>

                  <button
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer"
                  >
                    Quote
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick bottom CTA panel */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-900/20 to-slate-950 p-6 md:p-8 border border-blue-500/10 flex flex-col md:flex-row items-center justify-between gap-6" id="services-cta">
          <div className="space-y-1 max-w-xl text-left">
            <h4 className="text-lg font-bold text-white">Need a custom woodwork job that is not listed?</h4>
            <p className="text-xs text-slate-400">
              We handle all aspects of carpentry, repair, and joinery. Contact us with your specific measurements and drawings for a custom quotation.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteWithService('Custom Carpentry Project')}
            className="rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 shadow-md flex-shrink-0 cursor-pointer"
          >
            Request Custom Project Quote
          </button>
        </div>
      </div>
    </section>
  );
}
