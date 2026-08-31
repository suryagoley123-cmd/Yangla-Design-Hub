import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ArrowUpRight, Heart, ShieldCheck, Printer } from 'lucide-react';
import { YanglaLogo } from './YanglaLogo';

interface FooterProps {
  onRequestPrintRun: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPrintRun }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Products', href: '#products' },
    { label: 'Contact Hub', href: '#contact' }
  ];

  return (
    <footer className="bg-[#120d22] text-white pt-16 pb-12 border-t border-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <YanglaLogo variant="light" size="lg" />
            
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm pt-2">
              Kathmandu’s premier industrial design & commercial printing press. Powered by Heidelberg 5-color offset systems, Japanese Roland UV large format lines, and luxury post-press finishing mastery.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onRequestPrintRun}
                className="bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-none inline-flex items-center gap-1.5 shadow"
              >
                <span>Request a Print Run</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 3: Direct Sections Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-bold font-mono tracking-widest text-amber-400 uppercase">
              Sections
            </div>
            <ul className="space-y-2 text-xs text-neutral-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Top Print Services */}
          <div className="space-y-3">
            <div className="text-xs font-bold font-mono tracking-widest text-purple-300 uppercase">
              Key Capabilities
            </div>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>Commercial Offset Printing</li>
              <li>Same-Day Digital Quick-Print</li>
              <li>Luxury Rigid & Box Packaging</li>
              <li>Roll-Up Standees & Flex Banners</li>
              <li>Raised Spot UV & UV DTF Printing</li>
              <li>Corporate Merchandise & Gifts</li>
            </ul>
          </div>

          {/* Col 5: Direct Hub Contact */}
          <div className="space-y-3">
            <div className="text-xs font-bold font-mono tracking-widest text-amber-400 uppercase">
              Press Facility
            </div>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Kathmandu, Bhaktapur, Lalitpur (All Over Nepal)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+9779843736995" className="hover:text-white font-semibold">
                  +977 984-3736995
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-300 shrink-0" />
                <a href="mailto:yangladesignhub@gmail.com" className="hover:text-white">
                  yangladesignhub@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Yangla Design and Printing Hub. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-neutral-400">ISO 9001:2015 & FSC Certified Press</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-300 hover:text-amber-400 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
