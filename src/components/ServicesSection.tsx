import React, { useState } from 'react';
import { 
  Printer, 
  Zap, 
  Maximize, 
  Package, 
  Palette, 
  Shirt, 
  ArrowUpRight, 
  Clock, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { PRINT_SERVICES, PrintService } from '../data/printData';

interface ServicesSectionProps {
  onRequestPrintRun: (preselectedService?: string) => void;
  onOpenContact: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onRequestPrintRun,
  onOpenContact
}) => {
  const [selectedService, setSelectedService] = useState<string>('commercial-offset');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Printer':
        return <Printer className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Maximize':
        return <Maximize className="w-5 h-5" />;
      case 'Package':
        return <Package className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5" />;
      default:
        return <Printer className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#f8fafc] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7e22ce] mb-2">
              <Printer className="w-3.5 h-3.5" />
              <span>CAPABILITIES & PRESS SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Full-Spectrum Commercial Print Services
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-md mt-4 md:mt-0 leading-relaxed">
            From single bespoke prototypes to millions of commercial offset sheets, our end-to-end production lines handle every step in-house.
          </p>
        </div>

        {/* Services Grid (6 Core Commercial Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRINT_SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-xl border border-neutral-200 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Photo with Overlay Badge */}
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Turnaround Badge */}
                <div className="absolute top-3 right-3 bg-neutral-900/90 backdrop-blur-xs text-amber-300 text-[11px] font-mono font-bold px-2.5 py-1 rounded flex items-center gap-1 border border-neutral-700">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{svc.turnaround}</span>
                </div>

                {/* Service Icon */}
                <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-white text-[#7e22ce] flex items-center justify-center shadow-md">
                  {getIcon(svc.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow space-y-4">
                <div>
                  <h3 className="text-lg font-black text-neutral-900 group-hover:text-[#7e22ce] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                    {svc.tagline}
                  </p>
                </div>

                {/* Equipment & Best For */}
                <div className="space-y-1.5 text-xs bg-neutral-50 p-3 rounded-lg border border-neutral-100 font-sans">
                  <div className="flex items-start gap-1.5 text-neutral-700">
                    <Cpu className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                    <span className="font-semibold">{svc.equipment}</span>
                  </div>
                  <div className="text-neutral-500 text-[11px]">
                    <span className="font-semibold text-neutral-700">Optimal for:</span> {svc.bestFor}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Key Features:
                  </span>
                  {svc.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => onRequestPrintRun(svc.title)}
                  className="w-full py-2.5 bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Request Quote for {svc.title.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Print Specification Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1e1435] via-[#2d1b4e] to-[#1e1435] text-white p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
              Custom Industrial Engineering
            </span>
            <h3 className="text-2xl font-black">Have a complex custom die-line or multi-stage finish?</h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Our pre-press engineers offer complimentary CAD prototyping, physical sample proofs, and Pantone ink formulation before your mass production run.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onRequestPrintRun('Custom Engineered Print Run')}
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-none shadow transition-colors text-center"
            >
              Configure Custom Run ↗
            </button>
            <button
              onClick={() => onOpenContact('Custom Pre-Press & Consultation')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-none border border-white/20 transition-colors text-center"
            >
              Talk to an Engineer
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
