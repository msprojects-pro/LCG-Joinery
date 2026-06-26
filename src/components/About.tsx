/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Award, ThumbsUp, MapPin, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function About() {
  const highlights = [
    '20+ Years Professional Carpentry & Joinery Experience',
    'Fully Insured with Public Liability Protection',
    'Serving Doncaster, Rotherham, Sheffield & Barnsley',
    'Meticulous Clean-up Policy (We leave your home pristine)',
    '100% Sourced Sustainable & Premium Grade Timber',
    'No-Obligation Transparent Free Quotes',
  ];

  const stats = [
    { label: 'Years Experience', value: '20+' },
    { label: 'Completed Jobs', value: '1,200+' },
    { label: 'Happy Customers', value: '100%' },
    { label: 'Local Serviced Towns', value: '15+' },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Images and stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Overlay Box */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-2xl -z-10" />

              <img
                src="https://images.unsplash.com/photo-1534081333815-ae5019106622?q=80&w=600&auto=format&fit=crop"
                alt="Woodworking workshop with tools"
                className="rounded-2xl border border-slate-800 shadow-2xl w-full object-cover h-[350px]"
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">City & Guilds Standards</h4>
                    <p className="text-xs text-slate-400">Exceptional local craftsmanship assured.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Blocks */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-2xl font-extrabold text-blue-400">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
              {stats.slice(2, 4).map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-2xl font-extrabold text-blue-400">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Text & Detail Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Heritage & Expertise</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="about-heading">
                Twenty Years of Master Woodworking & Carpentry
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              At <strong className="text-white">LCG Joinery</strong>, we believe wood is more than just a material—it's the structure, warmth, and character of your home. Established over 20 years ago, we have been delivering premier carpentry and joinery solutions throughout <strong className="text-blue-400">Doncaster</strong>, <strong className="text-blue-400">Rotherham</strong>, <strong className="text-blue-400">Sheffield</strong>, <strong className="text-blue-400">Barnsley</strong>, and the wider <strong className="text-blue-400">South Yorkshire</strong> region.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm">
              We cover all aspects of commercial and domestic joinery. Whether you are seeking a complete custom kitchen renovation, structural timber frame decking, sleek fitted bedroom wardrobes, or just simple door adjustments, we prioritize absolute structural integrity and fine finishing.
            </p>

            {/* Checkmark Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mt-0.5 flex-shrink-0 border border-blue-500/20">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 leading-tight">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Contact Link */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-6 border-t border-slate-900">
              <div className="flex items-center space-x-2.5">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Based in Doncaster</span>
                  <span className="text-xs text-slate-200">Serving South Yorkshire & Midlands</span>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-slate-800" />

              <div className="flex items-center space-x-2.5">
                <ThumbsUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Pride in Workmanship</span>
                  <span className="text-xs text-slate-200">100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
