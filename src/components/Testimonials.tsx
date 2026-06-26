/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-slate-900 border-t border-slate-950">
      {/* Glows */}
      <div className="absolute top-1/2 left-10 h-80 w-80 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Customer Reviews</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="testimonials-heading">
            What Our Local Clients Say
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            We are proud of our 5-star reputation in South Yorkshire. Read actual reviews from homeowners who have trusted LCG Joinery with their custom kitchens, staircases, and decks.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              id={`testimonial-${testimonial.id}`}
            >
              {/* Top Quote Decor */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-slate-800/60 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1" id={`stars-${testimonial.id}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-450" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author & Project footer */}
              <div className="mt-6 pt-5 border-t border-slate-900 flex items-center justify-between">
                <div>
                  <span className="block text-sm font-extrabold text-white">
                    {testimonial.name}
                  </span>
                  <span className="block text-[11px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                    {testimonial.location}, South Yorkshire
                  </span>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center rounded-lg bg-blue-500/5 border border-blue-500/10 px-2.5 py-1 text-xs text-blue-400 font-medium">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local trust statement */}
        <div className="mt-16 flex flex-col items-center justify-center text-center space-y-4">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Heart className="h-5 w-5 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Guaranteed Local Reliability</h4>
            <p className="text-xs text-slate-400 max-w-lg">
              We live and work in Doncaster. Our reputation is built on honesty, clean craftsmanship, and being a tradesman you can confidently invite back to your home.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
