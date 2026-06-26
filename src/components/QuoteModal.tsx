/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data';
import { QuoteRequest } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuoteModal({ isOpen, onClose, initialService = '' }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('--- LCG Joinery Quote Request Received ---');
      console.log(formData);
      console.log('-----------------------------------------');
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      location: '',
      message: '',
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
            id="quote-modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 shadow-2xl"
            id="quote-modal-container"
          >
            {/* Top decorative accent bar */}
            <div className="h-2 w-full bg-blue-600" />

            <div className="p-6 md:p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
                id="quote-modal-close-btn"
              >
                <X className="h-6 w-6" />
              </button>

              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl" id="quote-modal-title">
                      Request a Free Quote
                    </h3>
                    <p className="mt-2 text-slate-400 text-sm">
                      Provide a few details about your joinery project, and we'll get back to you with an honest, competitive quote.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" id="quote-modal-form">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="modal-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="modal-phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 07496 513727"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="modal-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="modal-location" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                          Location (South Yorkshire Area) *
                        </label>
                        <select
                          id="modal-location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                        >
                          <option value="" disabled>Select your location</option>
                          {COMPANY_INFO.servingAreas.map((area) => (
                            <option key={area} value={area}>
                              {area}
                            </option>
                          ))}
                          <option value="Other">Other (nearby)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-service" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                        Required Service *
                      </label>
                      <select
                        id="modal-service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                      >
                        <option value="" disabled>Select a service type</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Joinery">General Carpentry / Joinery Repair</option>
                        <option value="Other Project">Other Woodworking Project</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="modal-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                        Project Details & Dimensions *
                      </label>
                      <textarea
                        id="modal-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe the work required. E.g., 'Replacing 6 internal pine doors with oak doors', or 'Constructing a 4m x 3m raised softwood decking with balustrade'."
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-50 cursor-pointer text-center"
                        id="quote-modal-submit-btn"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            <span>Processing Request...</span>
                          </div>
                        ) : (
                          'Submit Quote Request'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-8" id="quote-modal-success">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                  >
                    <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Quote Request Sent!</h3>
                  <p className="text-slate-300 text-sm max-w-md mb-6">
                    Thank you, <span className="font-semibold text-blue-400">{formData.name}</span>. We have received your joinery request for <span className="italic">"{formData.service}"</span> in <span className="font-semibold text-blue-400">{formData.location}</span>.
                  </p>

                  <div className="w-full max-w-sm rounded-xl bg-slate-950 border border-slate-800 p-4 text-left mb-6 space-y-3 text-xs text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span>We normally respond within <strong>24 Hours</strong></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span>For urgent projects, call us at <strong>{COMPANY_INFO.phoneFormatted}</strong></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span>We copied this receipt to <strong>{formData.email}</strong></span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 text-xs font-semibold transition-colors cursor-pointer"
                    id="quote-modal-done-btn"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
