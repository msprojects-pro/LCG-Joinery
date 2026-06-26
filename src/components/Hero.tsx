/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Calendar, ShieldCheck, Star, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Image with Blue & Dark Tonal Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={COMPANY_INFO.heroBg}
          alt="LCG Joinery Exquisite Craftsmanship"
          className="h-full w-full object-cover object-center transform scale-105 filter brightness-50"
          referrerPolicy="no-referrer"
        />
        {/* Double gradient overlays for maximum legibility and design depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-blue-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        {/* Subtle cyan/blue ambient glowing circles */}
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-600/10 blur-[100px] pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8 text-left">
            {/* Experience Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 rounded-full bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                {COMPANY_INFO.experience} Professional Experience
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl leading-[1.1]"
              id="hero-headline"
            >
              Bespoke Joinery & Carpentry <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                Crafted with Perfection
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed font-normal"
              id="hero-subheadline"
            >
              {COMPANY_INFO.tagline} From bespoke hand-crafted staircases and custom-fitted shaker kitchens to luxury garden pergolas and complete house refurbishments in Doncaster and South Yorkshire.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
              id="hero-cta-group"
            >
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center space-x-3 rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/30 active:bg-blue-700 transition-all cursor-pointer transform hover:-translate-y-0.5"
                id="hero-quote-btn"
              >
                <Calendar className="h-5 w-5" />
                <span>Request a Free Quote</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center space-x-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 px-8 py-4 text-base font-bold text-white transition-all transform hover:-translate-y-0.5"
                id="hero-call-btn"
              >
                <Phone className="h-5 w-5 text-blue-400" />
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </motion.div>

            {/* Local Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900 max-w-lg"
              id="hero-trust-badges"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-300">Fully Insured & Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-300">5-Star Rated Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-300">South Yorkshire Local</span>
              </div>
            </motion.div>
          </div>

          {/* Large Floating Experience Circle Panel on the right (hidden on smaller displays) */}
          <div className="hidden lg:col-span-4 lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 1, delay: 0.3 }}
              className="relative p-8 rounded-3xl bg-slate-900/85 backdrop-blur-md border border-slate-800/80 text-center w-full max-w-sm shadow-2xl"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 border-4 border-slate-950 text-white shadow-xl">
                <Star className="h-10 w-10 fill-white" />
              </div>

              <div className="pt-10 space-y-4">
                <div className="text-5xl font-extrabold text-white tracking-tight">20+</div>
                <div className="text-sm font-bold uppercase tracking-wider text-blue-400">Years of Master Joinery</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Serving homeowners, commercial properties, and residential builders throughout Doncaster, Rotherham, Sheffield, Barnsley and surrounding South Yorkshire locales.
                </p>
                
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-900/80 text-left space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                    <span>Quality Craftsmanship</span>
                    <span className="text-blue-400">100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[100%] bg-blue-500 rounded-full" />
                  </div>
                  
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mt-2">
                    <span>Reliability & Cleanliness</span>
                    <span className="text-blue-400">100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[100%] bg-blue-500 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative slant overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
