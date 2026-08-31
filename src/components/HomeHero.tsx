import React from 'react';
import { 
  ArrowUpRight, 
  Printer, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  PackageCheck
} from 'lucide-react';
import { YanglaEmblem } from './YanglaLogo';

interface HomeHeroProps {
  onRequestPrintRun: (preselectedProduct?: string) => void;
  onExploreProducts: () => void;
  onSelectService: (serviceId: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onRequestPrintRun,
  onExploreProducts,
  onSelectService
}) => {
  const quickProducts = [
    { name: 'Business Cards', tag: 'From 500 pcs', icon: '💳' },
    { name: 'Rigid Boxes', tag: 'Luxury Pack', icon: '📦' },
    { name: 'Roll-Up Standees', tag: 'Same-Day', icon: '🚩' },
    { name: 'Flyers & Books', tag: 'Offset Run', icon: '📖' },
    { name: 'Die-Cut Stickers', tag: 'Waterproof', icon: '🏷️' }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] text-neutral-900 overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200">
      {/* Decorative background grid and ambient color blooms */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7e22ce]"></span>
              </span>
              <span>KATHMANDU’S PREMIER DESIGN & PRINTING PRESS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.15]">
              Mastery in Every Impression.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] via-[#7e22ce] to-[#ea580c]">
                Offset, Digital & Custom Packaging.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              From high-volume commercial publications and luxury foil-stamped packaging to same-day corporate collateral and grand format signage. Engineered with German Heidelberg speed and Japanese color precision.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onRequestPrintRun()}
                id="hero-request-print-run-btn"
                className="bg-[#7e22ce] hover:bg-[#6b21a8] active:bg-[#581c87] text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-none shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 transition-all group"
              >
                <span>REQUEST A PRINT RUN</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreProducts}
                id="hero-explore-products-btn"
                className="bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-none transition-colors shadow-sm hover:border-neutral-400 flex items-center gap-2"
              >
                <span>View Products Catalog</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Quick Product Shortcuts */}
            <div className="pt-4 border-t border-neutral-200">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Instant Quote Shortcuts:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickProducts.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => onRequestPrintRun(p.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white hover:bg-purple-50 border border-neutral-200 hover:border-purple-300 text-xs font-semibold text-neutral-700 transition-colors shadow-xs"
                  >
                    <span>{p.icon}</span>
                    <span>{p.name}</span>
                    <span className="text-[10px] text-purple-700 font-mono bg-purple-100/60 px-1.5 py-0.5 rounded ml-1">
                      {p.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-2 text-xs font-semibold text-neutral-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-Color Shift CMYK</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24H Rush Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free Proofing & Prepress</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Print Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xl relative">
              
              {/* Badge with Yangla Emblem */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center">
                    <YanglaEmblem size={28} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900">Active Press Capacity</div>
                    <div className="text-[11px] text-neutral-500 font-mono">Heidelberg Speedmaster CD-102</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  15,000 Sheets/hr
                </span>
              </div>

              {/* Featured Visual Image of high quality print */}
              <div className="my-5 rounded-lg overflow-hidden relative aspect-[16/10] bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80"
                  alt="Yangla Custom Packaging & Gold Foil"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-mono tracking-wider text-amber-300 uppercase">
                    Sample Showcase
                  </span>
                  <h4 className="text-sm font-bold">Rigid Magnetic Box with Gold Foil & Velvet Foam</h4>
                  <p className="text-[11px] text-neutral-300">Run size: 5,000 pcs • Delivered in 6 Days</p>
                </div>
              </div>

              {/* Live Spec Checklist */}
              <div className="space-y-2.5 text-xs text-neutral-600 bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Paper Stocks Available:</span>
                  <span className="font-semibold text-neutral-900">80 GSM to 1800 GSM Greyboard</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Finishes:</span>
                  <span className="font-semibold text-neutral-900">Spot UV, Foil, Emboss, Velvet Matte</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Proofing Option:</span>
                  <span className="font-semibold text-purple-700">Free Physical Sample Proof</span>
                </div>
              </div>

              {/* Bottom Quick Trigger */}
              <button
                onClick={() => onRequestPrintRun()}
                className="w-full mt-4 py-3 bg-neutral-900 hover:bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 shadow"
              >
                <PackageCheck className="w-4 h-4 text-amber-400" />
                <span>Calculate & Quote Your Job</span>
              </button>

            </div>
          </div>

        </div>

        {/* Global Numbers Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
          <div className="border-r border-neutral-100 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-black text-[#6b21a8]">12M+</div>
            <div className="text-xs text-neutral-500 font-medium mt-0.5">High-Fidelity Impressions</div>
          </div>
          <div className="border-r border-neutral-100 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-black text-[#ea580c]">2,400+</div>
            <div className="text-xs text-neutral-500 font-medium mt-0.5">Corporate & Retail Clients</div>
          </div>
          <div className="border-r border-neutral-100 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-black text-[#0f172a]">24 Hours</div>
            <div className="text-xs text-neutral-500 font-medium mt-0.5">Rapid Turnaround Guarantee</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">99.8%</div>
            <div className="text-xs text-neutral-500 font-medium mt-0.5">On-Time Press Dispatch Rate</div>
          </div>
        </div>

      </div>
    </section>
  );
};
