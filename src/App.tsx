/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenQuote = () => {
    setSelectedService('');
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-blue-600 selection:text-white" id="lcg-app-root">
      {/* Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Page Content */}
      <main>
        {/* Home/Hero */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* About Us */}
        <About />

        {/* Services */}
        <Services onOpenQuoteWithService={handleOpenQuoteWithService} />

        {/* Portfolio Gallery */}
        <Gallery />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact form and regional map */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA buttons for easy call & WhatsApp actions */}
      <FloatingCTA />

      {/* Persistent interactive free quote form modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialService={selectedService}
      />
    </div>
  );
}
