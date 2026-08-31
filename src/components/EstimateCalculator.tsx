import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Users, 
  DollarSign, 
  ShieldAlert,
  DownloadCloud,
  FileCheck
} from 'lucide-react';

interface EstimateCalculatorProps {
  preselectedServiceId?: string;
  onProceedToInquiry: (estimateData: {
    services: string[];
    scale: string;
    speed: string;
    addons: string[];
    priceRange: string;
    weeks: number;
  }) => void;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({
  preselectedServiceId,
  onProceedToInquiry
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['brand-strategy', 'digital-experiences']);
  const [scale, setScale] = useState<'startup' | 'growth' | 'enterprise'>('growth');
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'rush' | 'relaxed'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['3d-webgl']);
  const [isCalculating, setIsCalculating] = useState(false);
  const [estimateResult, setEstimateResult] = useState<{
    low: number;
    high: number;
    weeks: number;
  }>({ low: 24000, high: 32000, weeks: 8 });

  // Handle preselected service from Services section
  useEffect(() => {
    if (preselectedServiceId && !selectedServices.includes(preselectedServiceId)) {
      setSelectedServices((prev) => [...prev, preselectedServiceId]);
    }
  }, [preselectedServiceId]);

  // Recalculate on state changes
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      // Calculate local transparent pricing
      let base = 0;
      let weeks = 4;

      const serviceMap: Record<string, { cost: number; weeks: number }> = {
        'brand-strategy': { cost: 12000, weeks: 6 },
        'digital-experiences': { cost: 16000, weeks: 8 },
        'spatial-design': { cost: 20000, weeks: 10 },
        'art-direction': { cost: 9500, weeks: 4 }
      };

      selectedServices.forEach((s) => {
        if (serviceMap[s]) {
          base += serviceMap[s].cost;
          weeks = Math.max(weeks, serviceMap[s].weeks);
        }
      });

      if (base === 0) {
        base = 8000;
        weeks = 4;
      }

      let scaleMult = 1.0;
      if (scale === 'startup') scaleMult = 0.85;
      if (scale === 'enterprise') scaleMult = 1.45;

      let speedMult = 1.0;
      if (timelineSpeed === 'rush') {
        speedMult = 1.25;
        weeks = Math.max(3, Math.round(weeks * 0.65));
      } else if (timelineSpeed === 'relaxed') {
        speedMult = 0.95;
        weeks = Math.round(weeks * 1.2);
      }

      let addonsTotal = 0;
      const addonMap: Record<string, number> = {
        '3d-webgl': 4500,
        'custom-typography': 3800,
        'motion-guidelines': 3200,
        'physical-prototypes': 4000
      };

      selectedAddons.forEach((a) => {
        if (addonMap[a]) addonsTotal += addonMap[a];
      });

      const total = Math.round((base * scaleMult * speedMult) + addonsTotal);
      setEstimateResult({
        low: Math.round(total * 0.9),
        high: Math.round(total * 1.15),
        weeks
      });
      setIsCalculating(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [selectedServices, scale, timelineSpeed, selectedAddons]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExportBrief = () => {
    onProceedToInquiry({
      services: selectedServices,
      scale,
      speed: timelineSpeed,
      addons: selectedAddons,
      priceRange: `$${estimateResult.low.toLocaleString()} – $${estimateResult.high.toLocaleString()}`,
      weeks: estimateResult.weeks
    });
  };

  return (
    <section className="py-24 bg-[#09090b] border-t border-white/[0.06] relative" id="estimate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <span>03 / Investment Forecaster</span>
            <span>•</span>
            <span>Transparent Budgeting</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Interactive Project Scope & Estimate Calculator
          </h2>
          <p className="text-neutral-400 text-base font-light">
            Customize your project parameters to receive instant delivery estimates, recommended studio allocation, and budget transparency.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Configurator (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-white/10">
            
            {/* Step 1: Select Service Pillars */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block flex items-center justify-between">
                <span>01. Select Core Service Modules</span>
                <span className="text-amber-400 font-mono text-[11px]">{selectedServices.length} Selected</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'brand-strategy', name: 'Brand Strategy & Identity', price: '$12k Base' },
                  { id: 'digital-experiences', name: 'Digital Flagship / Web App', price: '$16k Base' },
                  { id: 'spatial-design', name: 'Spatial & Pavilion Design', price: '$20k Base' },
                  { id: 'art-direction', name: 'Art Direction & Editorial', price: '$9.5k Base' }
                ].map((s) => {
                  const active = selectedServices.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleService(s.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start justify-between ${
                        active
                          ? 'bg-neutral-800 border-amber-400/70 text-white shadow-md'
                          : 'bg-neutral-950/60 border-white/5 text-neutral-400 hover:border-white/20'
                      }`}
                      id={`estimate-service-${s.id}`}
                    >
                      <div className="space-y-1">
                        <div className="font-syne font-bold text-sm text-white">{s.name}</div>
                        <div className="text-[11px] font-mono text-amber-400/80">{s.price}</div>
                      </div>
                      <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                        active ? 'bg-amber-400 border-amber-400 text-neutral-950' : 'border-white/20'
                      }`}>
                        {active && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale of Venture */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block">
                02. Scope & Organization Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'startup', label: 'Emerging Brand', desc: 'Seed / Series A' },
                  { id: 'growth', label: 'Growth Scale', desc: 'Mid-Market / Established' },
                  { id: 'enterprise', label: 'Global Enterprise', desc: 'Multi-Region Flagship' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setScale(tier.id as any)}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      scale === tier.id
                        ? 'bg-neutral-800 border-amber-400 text-white'
                        : 'bg-neutral-950/60 border-white/5 text-neutral-400 hover:border-white/20'
                    }`}
                    id={`estimate-scale-${tier.id}`}
                  >
                    <div className="font-syne font-bold text-xs sm:text-sm text-white">{tier.label}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Timeline Speed */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block">
                03. Target Velocity
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'relaxed', label: 'Flexible / Phased', mult: 'Standard Pace' },
                  { id: 'standard', label: 'Standard Cadence', mult: 'Recommended' },
                  { id: 'rush', label: 'Priority Sprint', mult: '+25% Rapid Studio' }
                ].map((speed) => (
                  <button
                    key={speed.id}
                    type="button"
                    onClick={() => setTimelineSpeed(speed.id as any)}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      timelineSpeed === speed.id
                        ? 'bg-neutral-800 border-amber-400 text-white'
                        : 'bg-neutral-950/60 border-white/5 text-neutral-400 hover:border-white/20'
                    }`}
                    id={`estimate-speed-${speed.id}`}
                  >
                    <div className="font-syne font-bold text-xs sm:text-sm text-white">{speed.label}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">{speed.mult}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Custom Studio Add-ons */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block">
                04. Specialized Studio Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: '3d-webgl', name: 'Interactive 3D / WebGL Shaders', price: '+$4,500' },
                  { id: 'custom-typography', name: 'Bespoke Typeface Foundry Design', price: '+$3,800' },
                  { id: 'motion-guidelines', name: 'Comprehensive Kinetic Motion Kit', price: '+$3,200' },
                  { id: 'physical-prototypes', name: 'Tactile Material Sampling Box', price: '+$4,000' }
                ].map((addon) => {
                  const active = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all ${
                        active
                          ? 'bg-neutral-800 border-amber-400/60 text-white'
                          : 'bg-neutral-950/40 border-white/5 text-neutral-400 hover:border-white/20'
                      }`}
                      id={`estimate-addon-${addon.id}`}
                    >
                      <div>
                        <div className="text-xs font-medium text-white">{addon.name}</div>
                        <div className="text-[10px] font-mono text-amber-400">{addon.price}</div>
                      </div>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        active ? 'bg-amber-400 border-amber-400 text-neutral-950' : 'border-white/20'
                      }`}>
                        {active && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Summary Card (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#151518] to-neutral-950 border border-amber-400/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
                  Estimated Studio Investment
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 font-mono text-[11px]">
                  Transparent Quote
                </span>
              </div>

              {/* Price Display */}
              <div className="space-y-1">
                <div className="text-xs font-mono text-neutral-400">PROJECT BUDGET RANGE</div>
                <div className="font-syne font-extrabold text-3xl sm:text-4xl text-white flex items-baseline gap-1">
                  <span>${estimateResult.low.toLocaleString()}</span>
                  <span className="text-neutral-500 font-light text-2xl">–</span>
                  <span>${estimateResult.high.toLocaleString()}</span>
                  <span className="text-xs text-neutral-400 font-mono font-normal">USD</span>
                </div>
                <div className="text-xs text-neutral-400">
                  Estimated Timeline: <strong className="text-amber-300 font-mono">{estimateResult.weeks} Weeks</strong> to Delivery
                </div>
              </div>

              {/* Team Allocation Preview */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <div className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dedicated Studio Pod Assigned</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span>Executive Creative Director</span>
                    <span className="font-mono text-neutral-300">25% Senior Advisory</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span>Lead Visual & Spatial Designer</span>
                    <span className="font-mono text-amber-300">100% Dedicated</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span>Creative Technologist / WebGL</span>
                    <span className="font-mono text-neutral-300">75% Core Sprint</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleExportBrief}
                className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-amber-500/10 flex items-center justify-center gap-2 group active:scale-95"
                id="estimate-proceed-to-inquiry-btn"
              >
                <span>Export Scope & Submit Project Brief</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-[11px] text-neutral-400 text-center leading-relaxed">
                * All commissions receive an executive contract, IP transfer agreements, and 60-day hypercare support.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
