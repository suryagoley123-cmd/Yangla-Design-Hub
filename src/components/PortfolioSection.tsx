import React, { useState } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  Layers, 
  Clock, 
  Sparkles, 
  Check, 
  X, 
  ArrowUpRight 
} from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/printData';

interface PortfolioSectionProps {
  onRequestPrintRun: (preselectedProduct?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onRequestPrintRun
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Print Works' },
    { id: 'packaging', label: 'Custom Packaging' },
    { id: 'branding', label: 'Stationery & Cards' },
    { id: 'editorial', label: 'Books & Catalogs' },
    { id: 'signage', label: 'Signage & Displays' },
    { id: 'merchandise', label: 'Merchandise & Kits' }
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7e22ce] mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CRAFT & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Selected Press & Packaging Portfolio
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-md mt-4 md:mt-0 leading-relaxed">
            Real production runs engineered for regional leaders, international brands, luxury hospitality, and government institutions.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                  isActive
                    ? 'bg-[#7e22ce] text-white shadow-md'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="bg-neutral-50 rounded-xl border border-neutral-200 hover:border-purple-300 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-neutral-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                  {item.category}
                </div>

                {/* Client Name */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] text-amber-300 font-mono font-medium">{item.client}</div>
                  <h3 className="text-base font-bold leading-snug group-hover:text-amber-200 transition-colors">
                    {item.title.split('•')[0]}
                  </h3>
                </div>
              </div>

              {/* Card Specs Summary */}
              <div className="p-5 space-y-3 flex-grow bg-white">
                <div className="space-y-1 text-xs text-neutral-600">
                  <div className="flex items-start gap-1">
                    <span className="font-bold text-neutral-800 shrink-0">Stock:</span>
                    <span className="truncate">{item.specs.paper}</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <span className="font-bold text-neutral-800 shrink-0">Finish:</span>
                    <span className="truncate text-purple-800 font-medium">{item.specs.finishing}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-[11px] font-mono text-neutral-500">
                    <span>Run: {item.specs.runSize}</span>
                    <span className="text-emerald-700 font-semibold">{item.specs.turnaround}</span>
                  </div>
                </div>
              </div>

              {/* View details footer */}
              <div className="px-5 py-3 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#7e22ce] group-hover:bg-purple-50 transition-colors">
                <span>View Full Production Specs</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-depth Portfolio Case Study */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 relative animate-in zoom-in-95 duration-200">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-900 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image banner */}
              <div className="relative aspect-[16/9] w-full bg-neutral-900">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                    {activeModalItem.category} • {activeModalItem.client}
                  </span>
                  <h3 className="text-2xl font-black">{activeModalItem.title}</h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    {activeModalItem.description}
                  </p>
                </div>

                {/* Technical Press Specifications Matrix */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7e22ce] mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Technical Press Specifications</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-200">
                      <div className="text-neutral-400 font-semibold mb-1">Paper Substrate:</div>
                      <div className="font-bold text-neutral-900">{activeModalItem.specs.paper}</div>
                    </div>
                    <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-200">
                      <div className="text-neutral-400 font-semibold mb-1">Post-Press Finishing:</div>
                      <div className="font-bold text-purple-900">{activeModalItem.specs.finishing}</div>
                    </div>
                    <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-200">
                      <div className="text-neutral-400 font-semibold mb-1">Dimensions:</div>
                      <div className="font-bold text-neutral-900">{activeModalItem.specs.dimensions}</div>
                    </div>
                    <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-200">
                      <div className="text-neutral-400 font-semibold mb-1">Production Run Size:</div>
                      <div className="font-bold text-emerald-800">{activeModalItem.specs.runSize}</div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-neutral-500">
                    Want an identical finish or customized version of this work?
                  </div>
                  <button
                    onClick={() => {
                      const itemTitle = activeModalItem.title;
                      setActiveModalItem(null);
                      onRequestPrintRun(itemTitle);
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-bold text-xs uppercase tracking-wider rounded-none shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Quote Similar Print Run</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
