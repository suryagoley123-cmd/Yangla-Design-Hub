import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProductsSection } from './components/ProductsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintRunModal } from './components/PrintRunModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [isPrintRunModalOpen, setIsPrintRunModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<string | undefined>(undefined);
  const [contactPrefilledProduct, setContactPrefilledProduct] = useState<string | undefined>(undefined);

  const handleOpenPrintRunModal = (productName?: string) => {
    if (productName) {
      setSelectedProductForModal(productName);
    } else {
      setSelectedProductForModal(undefined);
    }
    setIsPrintRunModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenContact = (initialProductOrService?: string) => {
    if (initialProductOrService) {
      setContactPrefilledProduct(initialProductOrService);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* 
        Sticky Navigation Bar
        Contains: Logo (Yangla Design & Printing Hub)
        Sections: HOME | ABOUT | SERVICES | PORTFOLIO | PRODUCTS | CONTACT | Phone | REQUEST A PRINT RUN ↗
      */}
      <Navbar
        onRequestPrintRun={() => handleOpenPrintRunModal()}
        onOpenContact={handleOpenContact}
      />

      {/* Main Flow: Exactly the 6 requested sections */}
      <main className="flex-grow">
        {/* 1. HOME */}
        <HomeHero
          onRequestPrintRun={handleOpenPrintRunModal}
          onExploreProducts={() => scrollToSection('products')}
          onSelectService={() => scrollToSection('services')}
        />

        {/* 2. ABOUT */}
        <AboutSection
          onRequestPrintRun={() => handleOpenPrintRunModal()}
          onOpenContact={() => handleOpenContact()}
        />

        {/* 3. SERVICES */}
        <ServicesSection
          onRequestPrintRun={handleOpenPrintRunModal}
          onOpenContact={handleOpenContact}
        />

        {/* 4. PORTFOLIO */}
        <PortfolioSection
          onRequestPrintRun={handleOpenPrintRunModal}
        />

        {/* 5. PRODUCTS */}
        <ProductsSection
          onRequestPrintRun={handleOpenPrintRunModal}
        />

        {/* 6. CONTACT */}
        <ContactSection
          initialServiceOrProduct={contactPrefilledProduct}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onRequestPrintRun={() => handleOpenPrintRunModal()}
      />

      {/* Interactive "REQUEST A PRINT RUN" Order Wizard Modal */}
      <PrintRunModal
        isOpen={isPrintRunModalOpen}
        onClose={() => setIsPrintRunModalOpen(false)}
        initialProduct={selectedProductForModal}
      />
      {/* Floating WHATSAPP US Action Button */}
      <WhatsAppButton phoneNumber="9779843736995" />
    </div>
  );
}
