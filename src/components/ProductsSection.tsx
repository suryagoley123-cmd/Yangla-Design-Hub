import React, { useState } from 'react';
import { 
  Package, 
  ArrowUpRight, 
  Check, 
  Clock, 
  Sparkles, 
  Layers, 
  Sliders, 
  Tag 
} from 'lucide-react';
import { PRINT_PRODUCTS, PrintProduct } from '../data/printData';

interface ProductsSectionProps {
  onRequestPrintRun: (preselectedProduct?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onRequestPrintRun
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const productCategories = [
    { id: 'all', label: 'All Products' },
    { id: 'stationery', label: 'Business Cards & Stationery' },
    { id: 'marketing', label: 'Brochures & Stickers' },
    { id: 'packaging', label: 'Custom Packaging Boxes' },
    { id: 'signage', label: 'Standees & Banners' },
    { id: 'merchandise', label: 'Gifts & Apparel' },
    { id: 'editorial', label: 'Books & Catalogs' }
  ];

  const filteredProducts = PRINT_PRODUCTS.filter((prod) => {
    const matchesCat = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-[#f8fafc] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7e22ce] mb-2">
              <Package className="w-3.5 h-3.5" />
              <span>OFFICIAL CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Standard & Custom Print Products
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-md mt-4 md:mt-0 leading-relaxed">
            Select any standard substrate or configure custom paper GSM, lamination coatings, foil colors, and batch volumes.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {productCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                    isActive
                      ? 'bg-[#7e22ce] text-white shadow-sm'
                      : 'bg-white hover:bg-neutral-200 text-neutral-700 border border-neutral-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full lg:w-64">
            <input
              type="text"
              placeholder="Search products (e.g. boxes, foil)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-white border border-neutral-300 rounded-lg px-3.5 py-2 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#7e22ce] focus:ring-1 focus:ring-[#7e22ce]"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-xl border border-neutral-200 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Product Photo */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Turnaround Badge */}
                <div className="absolute top-2.5 right-2.5 bg-neutral-900/90 text-amber-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-neutral-700 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{prod.turnaroundDays}</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-200">
                    Min Run: {prod.minQty} pcs
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-grow space-y-3">
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#7e22ce] transition-colors leading-tight">
                  {prod.name}
                </h3>
                
                <p className="text-xs text-neutral-600 line-clamp-2">
                  {prod.description}
                </p>

                {/* Substrate & Finishes preview */}
                <div className="pt-2 border-t border-neutral-100 space-y-1.5 text-[11px] text-neutral-600">
                  <div className="flex items-start gap-1">
                    <span className="font-bold text-neutral-800 shrink-0">Papers:</span>
                    <span className="truncate text-neutral-600">{prod.paperOptions.slice(0, 2).join(', ')}</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <span className="font-bold text-neutral-800 shrink-0">Finishes:</span>
                    <span className="truncate text-purple-800 font-medium">{prod.finishOptions.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 bg-neutral-50 border-t border-neutral-100">
                <button
                  onClick={() => onRequestPrintRun(prod.name)}
                  className="w-full py-2.5 bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Configure & Order</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Catalog Assistance Callout */}
        <div className="mt-14 p-6 bg-white border border-neutral-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900">Looking for a product not listed here?</h4>
              <p className="text-xs text-neutral-500">We produce custom hologram security seals, vinyl vehicle wraps, calendar wall sets, and specialty wedding boxes.</p>
            </div>
          </div>
          <button
            onClick={() => onRequestPrintRun('Custom Non-Catalog Item')}
            className="shrink-0 px-5 py-2.5 bg-neutral-900 hover:bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors"
          >
            Request Custom Specs
          </button>
        </div>

      </div>
    </section>
  );
};
