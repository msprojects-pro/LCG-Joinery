/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { Phone, Mail, MapPin, Hammer, Facebook, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 text-slate-400 text-sm z-10" id="app-footer">
      
      {/* Decorative slant overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Main Link Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* LCG Joinery Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/20 bg-slate-900 font-black text-sm tracking-tighter text-blue-400">
                <span>LCG</span>
                {/* Accent dot */}
                <span className="absolute bottom-1 right-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
              </div>
              <div>
                <span className="block text-lg font-extrabold text-white leading-tight">
                  {COMPANY_INFO.name}
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Doncaster & South Yorkshire
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              With over 20 years of experience, LCG Joinery delivers professional carpentry solutions for domestic and commercial projects. Specializing in custom shaker kitchens, premium timber staircases, bespoke furniture, and wooden decking in Doncaster, Sheffield, Rotherham, and Barnsley.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white transition-colors text-xs font-semibold px-2 w-auto space-x-1.5"
                aria-label="WhatsApp Contact"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-wider">WhatsApp Live</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">Portfolio Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact Details</a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-blue-400 transition-colors flex items-center space-x-1.5">
                    <Hammer className="h-3 w-3 text-blue-500 flex-shrink-0" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Serving South Yorkshire</h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-semibold leading-tight">Doncaster (HQ)</span>
                  <span className="block text-slate-500 text-[10px] mt-0.5">And surrounding villages</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-semibold leading-tight">Sheffield, Rotherham & Barnsley</span>
                  <span className="block text-slate-500 text-[10px] mt-0.5">West & South Yorkshire reach</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300 font-semibold leading-tight">North Nottinghamshire border</span>
                  <span className="block text-slate-500 text-[10px] mt-0.5">Worksop & Retford</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Slant and Back to Top */}
      <div className="bg-slate-950 border-t border-slate-900/60 py-6 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-center sm:text-left space-y-1">
            <p>© {currentYear} {COMPANY_INFO.name}. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-600">Registered Office: South Yorkshire, Doncaster, UK. Master joinery with 20+ years of carpentry pedigree.</p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            
            <button
              onClick={handleScrollTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
