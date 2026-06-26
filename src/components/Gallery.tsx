/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Derive categories dynamically plus "All"
  const categories = ['All', ...Array.from(new Set(GALLERY_ITEMS.map((item) => item.category)))];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (itemIndexInFiltered: number) => {
    // We map the index from the filtered array back to the overall gallery list to avoid navigation bugs
    const selectedItem = filteredItems[itemIndexInFiltered];
    const overallIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id);
    setLightboxIndex(overallIndex !== -1 ? overallIndex : null);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="relative py-24 bg-slate-950">
      <div className="absolute bottom-1/2 right-0 h-96 w-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Portfolio</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="gallery-heading">
            Showcase of Our Finest Carpentry Projects
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Take a look through our gallery of completed domestic and commercial joinery work across Doncaster and South Yorkshire. Quality workmanship that speaks for itself.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="gallery-category-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-900 border border-slate-850 shadow-md"
                onClick={() => openLightbox(index)}
                id={`gallery-item-${item.id}`}
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6" />
                  
                  {/* Floating Zoom Indicator on Hover */}
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 flex items-center justify-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>

                {/* Visible Info */}
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md">
              {/* Overlay Background to close */}
              <div className="absolute inset-0 cursor-default" onClick={closeLightbox} />

              {/* Header Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
                id="lightbox-close-btn"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Slider Content */}
              <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center">
                
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:-left-16 top-1/2 transform -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous Image"
                  id="lightbox-prev-btn"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Main image container */}
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl max-h-[70vh] flex items-center justify-center"
                >
                  <img
                    src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                    alt={GALLERY_ITEMS[lightboxIndex].title}
                    className="max-h-[65vh] w-auto max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:-right-16 top-1/2 transform -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next Image"
                  id="lightbox-next-btn"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Text Description Block */}
                <div className="mt-6 text-center max-w-xl text-slate-100 px-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    {GALLERY_ITEMS[lightboxIndex].category}
                  </span>
                  <h4 className="text-xl font-bold mt-1 text-white">
                    {GALLERY_ITEMS[lightboxIndex].title}
                  </h4>
                  <p className="text-sm text-slate-300 mt-2">
                    {GALLERY_ITEMS[lightboxIndex].description}
                  </p>
                  <div className="text-xs text-slate-500 mt-3 font-semibold">
                    Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                  </div>
                </div>

              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
