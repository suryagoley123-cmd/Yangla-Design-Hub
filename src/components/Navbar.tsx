import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X, Clock, MessageSquare, MapPin } from 'lucide-react';
import { YanglaLogo } from './YanglaLogo';

interface NavbarProps {
  activeSection?: string;
  onRequestPrintRun: () => void;
  onOpenContact: (initialProductOrService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onRequestPrintRun,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'products', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'PORTFOLIO', href: '#portfolio', id: 'portfolio' },
    { label: 'PRODUCTS', href: '#products', id: 'products' },
    { label: 'CONTACT', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70; // Header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Quick Info Bar */}
      <div className="bg-[#1e1435] text-white/85 text-[11px] font-sans py-1.5 px-4 border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-emerald-300">Live Press Floor:</span>
            <span className="hidden sm:inline text-neutral-300">Offset & Digital Units Operating • Same-Day Express Runs Available</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-300">
            <div className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>Mon – Sat: 9:00 AM – 7:30 PM (NPT)</span>
            </div>
            <div className="flex items-center gap-1 text-purple-200 font-semibold">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Kathmandu, Lalitpur, Bhaktapur (All Over Nepal)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation matching user specification */}
      <div
        className={`w-full bg-white transition-all duration-200 ${
          isScrolled
            ? 'shadow-md py-3 border-b border-neutral-200'
            : 'py-3.5 border-b border-neutral-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo: Yangla Design & Printing Hub */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group focus:outline-none flex items-center"
            id="navbar-logo-link"
          >
            <YanglaLogo type="horizontal" variant="dark" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold tracking-wider text-[#475569]">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  id={`nav-link-${item.id}`}
                  className={`transition-colors duration-150 relative py-1 hover:text-[#682A8F] ${
                    isActive
                      ? 'text-[#682A8F] font-extrabold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#7e22ce]'
                      : 'text-neutral-600'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area: Phone + REQUEST A PRINT RUN Button */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Phone Icon with Quick Contact Popover */}
            <div className="relative">
              <button
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="p-2.5 rounded-full text-neutral-700 hover:text-[#682A8F] hover:bg-purple-50 transition-colors focus:outline-none"
                aria-label="Direct Phone Call"
                id="navbar-phone-btn"
                title="Call Yangla Print Desk"
              >
                <Phone className="w-5 h-5 text-neutral-700 hover:text-[#682A8F]" />
              </button>

              {/* Phone quick dial dropdown */}
              {phoneDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-neutral-200 p-4 z-50 text-neutral-900 animate-in fade-in slide-in-from-top-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-2 flex items-center justify-between">
                    <span>Direct Press Lines</span>
                    <button
                      onClick={() => setPhoneDropdownOpen(false)}
                      className="text-neutral-400 hover:text-neutral-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <a
                      href="tel:+9779843736995"
                      className="flex items-center gap-2.5 p-2 rounded-md hover:bg-purple-50 transition-colors text-neutral-800 font-semibold"
                    >
                      <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-purple-800">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-neutral-500 font-normal">Customer Desk / Direct Line</div>
                        <div className="text-xs font-bold text-neutral-900">+977 984-3736995</div>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/9779843736995"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2 rounded-md hover:bg-emerald-50 transition-colors text-neutral-800 font-semibold"
                    >
                      <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-neutral-500 font-normal">WhatsApp Urgent Proofing</div>
                        <div className="text-xs font-bold text-emerald-800">+977 984-3736995</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* REQUEST A PRINT RUN ↗ CTA Button matching image */}
            <button
              onClick={onRequestPrintRun}
              id="navbar-request-print-run-btn"
              className="bg-[#7e22ce] hover:bg-[#6b21a8] active:bg-[#581c87] text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-none inline-flex items-center gap-1.5 transition-all shadow-md hover:shadow-lg focus:outline-none"
              style={{ letterSpacing: '0.08em' }}
            >
              <span>REQUEST A PRINT RUN</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestPrintRun}
              className="bg-[#7e22ce] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-2 rounded-none"
            >
              Print Run ↗
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-700 hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle Mobile Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3 font-bold text-sm tracking-wide text-neutral-800">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="py-2 px-1 hover:text-[#7e22ce] border-b border-neutral-100 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-neutral-400 font-normal">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-5 space-y-3">
              <a
                href="tel:+9779843736995"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded border border-purple-200 bg-purple-50 text-purple-900 font-semibold text-xs"
              >
                <Phone className="w-4 h-4 text-purple-700" />
                <span>Call Hotline: +977 984-3736995</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestPrintRun();
                }}
                className="w-full py-3 bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>REQUEST A PRINT RUN</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
