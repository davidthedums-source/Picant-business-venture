/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { RepairProcess } from './components/RepairProcess';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { RepairModal } from './components/RepairModal';
import { NotFoundView } from './components/NotFoundView';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Computer Repair');
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  // If user navigates to an unknown custom subpath, show 404
  if (currentPath !== '/' && currentPath !== '' && !currentPath.startsWith('/#')) {
    return (
      <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col justify-between">
        <Navbar onOpenBooking={handleOpenBooking} />
        <NotFoundView onReturnHome={() => {
          window.history.pushState({}, '', '/');
          setCurrentPath('/');
        }} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Services Section */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 3. Portfolio & Completed Repairs Showcase */}
        <PortfolioSection onOpenBooking={handleOpenBooking} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 4. About Company Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking('General Technology Support')} />

        {/* 5. 4-Step Repair Process */}
        <RepairProcess onOpenBooking={() => handleOpenBooking('Computer Repair')} />

        {/* 6. Customer Review Section */}
        <CustomerReviews />

        {/* 7. Contact & Booking Section with Map */}
        <ContactSection initialService={selectedService} />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Modal for Instant Booking */}
      <RepairModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
    </div>
  );
}
