/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Plus, X, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 block" id="floating-cta-container">
      {/* Floating Buttons Group with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col space-y-3 mb-3 items-end">
            
            {/* Call Action Button */}
            <motion.a
              href={`tel:${COMPANY_INFO.phone}`}
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex items-center space-x-2 rounded-xl bg-blue-600 px-4 py-2.5 text-white shadow-lg shadow-blue-600/30 border border-blue-500/30 font-bold text-xs"
              id="floating-cta-call"
            >
              <Phone className="h-4 w-4" />
              <span>Call Joiner Now</span>
            </motion.a>

            {/* WhatsApp Action Button */}
            <motion.a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-white shadow-lg shadow-emerald-600/30 border border-emerald-500/30 font-bold text-xs"
              id="floating-cta-whatsapp"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>WhatsApp Chat</span>
            </motion.a>

          </div>
        )}
      </AnimatePresence>

      {/* Main Trigger Toggle Button */}
      <button
        onClick={toggleOpen}
        className={`relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 cursor-pointer ${
          isOpen
            ? 'bg-slate-900 border border-slate-800 rotate-95 hover:bg-slate-800'
            : 'bg-blue-600 hover:bg-blue-500 hover:scale-105 active:bg-blue-700 shadow-blue-600/20'
        }`}
        aria-label="Toggle contact menu"
        id="floating-cta-trigger"
      >
        {/* Animated outer ring when closed to catch attention */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping -z-10" />
        )}

        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative">
            <MessageSquare className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-emerald-500 border border-blue-600" />
          </div>
        )}
      </button>
    </div>
  );
}
