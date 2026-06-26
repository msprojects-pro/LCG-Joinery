/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      console.log('--- LCG Joinery Contact Form Submission ---');
      console.log(formData);
      console.log('-------------------------------------------');
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Titles */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Get in touch</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="contact-heading">
            Let's Discuss Your Joinery Project
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            No project is too big or too small. Contact us today via our form, direct telephone, or WhatsApp for an honest discussion and a free quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Contact Details</h3>
              
              {/* Telephone */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="group flex items-start space-x-4 rounded-xl bg-slate-900 border border-slate-850 p-4 hover:border-blue-500/30 transition-all"
                id="contact-phone-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider">Phone / WhatsApp</span>
                  <span className="block text-base font-bold text-white group-hover:text-blue-400 transition-colors mt-0.5">
                    {COMPANY_INFO.phoneFormatted}
                  </span>
                  <span className="block text-xs text-slate-400 mt-1">
                    Available for calls & messages 7 days a week.
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group flex items-start space-x-4 rounded-xl bg-slate-900 border border-slate-850 p-4 hover:border-blue-500/30 transition-all"
                id="contact-email-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Address</span>
                  <span className="block text-base font-bold text-white group-hover:text-blue-400 transition-colors mt-0.5">
                    {COMPANY_INFO.email}
                  </span>
                  <span className="block text-xs text-slate-400 mt-1">
                    Send drawings or lists directly to our inbox.
                  </span>
                </div>
              </a>

              {/* Location */}
              <div
                className="flex items-start space-x-4 rounded-xl bg-slate-900 border border-slate-850 p-4"
                id="contact-location-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider">Our Service Area</span>
                  <span className="block text-base font-bold text-white mt-0.5">
                    {COMPANY_INFO.location}
                  </span>
                  <span className="block text-xs text-slate-400 mt-1">
                    Doncaster, Sheffield, Rotherham, Barnsley, Worksop, and South Yorkshire.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8 flex flex-col justify-between">
            {!isSuccess ? (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Send Us a Direct Message</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below with your project requirements, and we'll reply to your query promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07496 513727"
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Message / Enquiry Details *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the joinery or carpentry work you require. Please mention any specific timber choices or estimated dimensions if known."
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 active:bg-blue-700 transition-all disabled:opacity-50 cursor-pointer text-center"
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        'Send Enquiry Message'
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12 h-full" id="contact-success">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received Successfully!</h3>
                <p className="text-slate-300 text-sm max-w-md mb-6">
                  Thank you, <span className="font-semibold text-blue-400">{formData.name}</span>. Your enquiry has been sent directly to LCG Joinery. We will review your message and reply within 24 hours.
                </p>

                <div className="w-full max-w-sm rounded-xl bg-slate-950 border border-slate-800 p-4 mb-8 space-y-2.5 text-xs text-slate-400 text-left">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span>Your registered phone: <strong>{formData.phone}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span>Your registered email: <strong>{formData.email}</strong></span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs px-6 py-3 transition-colors cursor-pointer"
                  id="contact-new-msg-btn"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
