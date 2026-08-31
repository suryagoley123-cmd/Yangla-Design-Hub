import React from 'react';
import { 
  Award, 
  Cpu, 
  Leaf, 
  ShieldCheck, 
  Truck, 
  Check, 
  ArrowRight,
  Factory,
  Gauge,
  Sparkles
} from 'lucide-react';
import { PRINT_MACHINERY } from '../data/printData';
import { YanglaLogo, YanglaEmblem } from './YanglaLogo';

interface AboutSectionProps {
  onRequestPrintRun: () => void;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onRequestPrintRun,
  onOpenContact
}) => {
  const pillars = [
    {
      icon: Gauge,
      title: 'German & Japanese Press Precision',
      desc: 'Equipped with Heidelberg Speedmaster offset presses and Roland UV flatbeds, ensuring microscopic dot fidelity and razor-sharp color registration across 100 to 100,000+ copies.'
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious & Food-Safe Inks',
      desc: 'We utilize low-VOC vegetable and soy-based inks, biodegradable matte/gloss laminations, and 100% FSC-certified ethically sourced virgin and recycled paper stocks.'
    },
    {
      icon: ShieldCheck,
      title: 'Rigorous 5-Point Pre-Press Audit',
      desc: 'Every client file is analyzed by senior pre-press engineers for bleed safety, color trapping, font rasterization, and spot UV registration before plate burning.'
    },
    {
      icon: Truck,
      title: 'Rapid On-Demand Turnaround & Logistics',
      desc: 'With automated post-press folding, creasing, and binding units running round the clock, we deliver urgent same-day jobs and volume shipments directly to your doorstep.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7e22ce] mb-2">
              <Factory className="w-3.5 h-3.5" />
              <span>ABOUT THE PRINT HUB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Where Precision Engineering Meets Graphic Craft.
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-md mt-4 md:mt-0 leading-relaxed">
            Yangla Design & Printing Hub is a full-service commercial press facility headquartered in Kathmandu, powering high-impact packaging, books, and corporate branding across the region.
          </p>
        </div>

        {/* Story & Facility Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Press Facility Photo Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80"
                alt="Yangla Printing Facility Heidelberg Press"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  Main Press Floor • Offset Bay 01
                </span>
                <h3 className="text-xl font-bold">5-Color Heidelberg Speedmaster CD-102</h3>
                <p className="text-xs text-neutral-300 mt-1">
                  15,000 sheets/hour continuous throughput with inline aqueous coater.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge with Yangla Emblem */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-neutral-900 text-white p-4 sm:p-5 rounded-xl shadow-2xl border border-neutral-700 max-w-[240px] flex items-center gap-3.5">
              <div className="p-1 rounded-lg bg-white/10 shrink-0 border border-white/10">
                <YanglaEmblem size={40} />
              </div>
              <div>
                <div className="text-2xl font-black text-[#ea580c] leading-none">15+ Yrs</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-200 mt-1">
                  Print Excellence
                </div>
                <div className="text-[10px] text-neutral-400">ISO 9001:2015 Press</div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Story & Commitments */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-black text-neutral-900 leading-snug">
              Elevating brands through the power of tangible, tactile print mediums.
            </h3>
            
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Founded with the conviction that great design deserves uncompromising execution, Yangla Design & Printing Hub has grown into an integrated creative and commercial production powerhouse.
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Whether you need 500 bespoke velvet business cards with copper foil edges, 20,000 custom-engineered food packaging boxes, or an entire exhibition hall branded in 48 hours, our hybrid offset-digital press floor ensures zero compromise between speed, budget, and print perfection.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Free Paper & Finish Sample Swatch Kit',
                'Pre-flight File Verification & 3D Proofing',
                'Bulk Storage & Split Delivery Scheduling',
                'Dedicated Account Manager for Every Run',
                '100% Reprint Guarantee on Color Defects',
                'Custom CNC Die-Line Sample Prototyping'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onRequestPrintRun}
                className="px-6 py-3 bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-bold text-xs uppercase tracking-wider rounded-none shadow transition-colors flex items-center gap-2"
              >
                <span>Request Machine Time</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-3 border border-neutral-300 hover:border-neutral-400 bg-neutral-50 text-neutral-800 font-bold text-xs uppercase tracking-wider rounded-none transition-colors"
              >
                Visit Our Hub
              </button>
            </div>

          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-50 hover:bg-purple-50/40 p-6 rounded-xl border border-neutral-200 hover:border-purple-200 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-[#7e22ce] shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-neutral-900">{p.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Machinery Arsenal Table */}
        <div className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                Advanced Production Fleet
              </span>
              <h3 className="text-2xl font-black mt-1">Our Industrial Machinery Arsenal</h3>
            </div>
            <div className="text-xs text-neutral-400 max-w-xs font-mono">
              Calibrated weekly with X-Rite spectrophotometers to maintain delta-E &lt; 1.5 color deviation.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {PRINT_MACHINERY.map((mach, idx) => (
              <div key={idx} className="bg-neutral-800/80 p-5 rounded-xl border border-neutral-700/60 space-y-2">
                <div className="text-xs font-mono text-purple-300 font-bold">{mach.origin}</div>
                <h4 className="text-base font-bold text-white">{mach.name}</h4>
                <div className="text-xs text-amber-400 font-medium">{mach.speed}</div>
                <div className="text-[11px] text-neutral-400 pt-1 border-t border-neutral-700">{mach.purpose}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
