import React, { useState } from 'react';
import { 
  Sparkles, 
  Palette, 
  Type, 
  Eye, 
  Copy, 
  Check, 
  RefreshCw, 
  Send, 
  Layers,
  Smartphone,
  CreditCard,
  Building,
  Sliders,
  ChevronRight
} from 'lucide-react';

interface BriefResult {
  creativeConcept: string;
  tagline: string;
  brandArchetype: string;
  colorRecommendation: { name: string; hex: string; meaning: string }[];
  typographyPairing: { display: string; body: string };
  keyDeliverables: string[];
  strategicAdvice: string;
}

interface DesignLabProps {
  onUseGeneratedBrief: (briefText: string, brandName: string) => void;
}

const PRESET_PALETTES = [
  {
    name: 'Himalayan Mineral',
    colors: ['#0E1013', '#B8860B', '#2C3E50', '#EAE6DF']
  },
  {
    name: 'Kyoto Sanctuary',
    colors: ['#1C1A18', '#3E493A', '#D4AF7A', '#F7F5F0']
  },
  {
    name: 'Milano Haute Noir',
    colors: ['#111113', '#CBA135', '#0F2C23', '#F3EFEA']
  },
  {
    name: 'Spatial Cybernetic',
    colors: ['#0B0D14', '#00F0FF', '#7000FF', '#FFFFFF']
  }
];

export const DesignLab: React.FC<DesignLabProps> = ({ onUseGeneratedBrief }) => {
  const [activeTab, setActiveTab] = useState<'ai-brief' | 'palette' | 'mockup'>('ai-brief');
  
  // AI Brief State
  const [brandName, setBrandName] = useState('Vanguard Atelier');
  const [industry, setIndustry] = useState('Sustainable Architecture & Luxury Design');
  const [aesthetic, setAesthetic] = useState('Brutalist Warmth & Geometric Minimalism');
  const [audience, setAudience] = useState('High-net-worth patrons and design collectors');
  const [isLoadingBrief, setIsLoadingBrief] = useState(false);
  const [generatedBrief, setGeneratedBrief] = useState<BriefResult | null>(null);

  // Palette State
  const [selectedPalette, setSelectedPalette] = useState(PRESET_PALETTES[0]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Mockup Simulator State
  const [mockupType, setMockupType] = useState<'card' | 'mobile' | 'billboard'>('card');
  const [customTagline, setCustomTagline] = useState('Architectural Permanence.');

  const handleGenerateBrief = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingBrief(true);

    try {
      const res = await fetch('/api/generate-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brandName,
          industry,
          aestheticPreference: aesthetic,
          targetAudience: audience
        })
      });

      const data = await res.json();
      if (data.brief) {
        setGeneratedBrief(data.brief);
        if (data.brief.tagline) {
          setCustomTagline(data.brief.tagline);
        }
      }
    } catch (err) {
      console.error('Failed to generate brief:', err);
    } finally {
      setIsLoadingBrief(false);
    }
  };

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section className="py-24 bg-[#0a0a0c] border-t border-white/[0.06] relative" id="design-lab">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <span>04 / Interactive Studio Lab</span>
            <span>•</span>
            <span>AI Strategy & Prototyping</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            The Yangla Design Laboratory
          </h2>
          <p className="text-neutral-400 text-base font-light">
            Experiment with our interactive brand strategy engine, test chromatic architectural palettes, and preview live design mockups in real-time.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('ai-brief')}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'ai-brief'
                ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                : 'bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/10'
            }`}
            id="tab-ai-brief-btn"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Creative Brief Assistant</span>
          </button>

          <button
            onClick={() => setActiveTab('palette')}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'palette'
                ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                : 'bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/10'
            }`}
            id="tab-palette-btn"
          >
            <Palette className="w-4 h-4" />
            <span>Chromatic Palette Foundry</span>
          </button>

          <button
            onClick={() => setActiveTab('mockup')}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'mockup'
                ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                : 'bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/10'
            }`}
            id="tab-mockup-btn"
          >
            <Eye className="w-4 h-4" />
            <span>Live Brand Mockup Simulator</span>
          </button>
        </div>

        {/* TAB 1: AI CREATIVE BRIEF GENERATOR */}
        {activeTab === 'ai-brief' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Form (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-5">
              <div className="space-y-1">
                <h3 className="font-syne font-bold text-lg text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Configure Your Vision</span>
                </h3>
                <p className="text-xs text-neutral-400">
                  Our neural design director synthesizes strategic archetypes and aesthetic direction.
                </p>
              </div>

              <form onSubmit={handleGenerateBrief} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-neutral-300 uppercase">Brand / Venture Name</label>
                  <input
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                    id="lab-brand-name-input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-neutral-300 uppercase">Industry / Practice Area</label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                    id="lab-industry-input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-neutral-300 uppercase">Aesthetic Intent</label>
                  <input
                    type="text"
                    value={aesthetic}
                    onChange={(e) => setAesthetic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                    id="lab-aesthetic-input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-neutral-300 uppercase">Audience / Patronage</label>
                  <input
                    type="text"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                    id="lab-audience-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoadingBrief}
                  className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 active:scale-95"
                  id="lab-generate-brief-submit"
                >
                  {isLoadingBrief ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Synthesizing Creative Strategy...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate Strategic Creative Brief</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Brief Output Display (7 Cols) */}
            <div className="lg:col-span-7">
              {generatedBrief ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/90 border border-amber-400/30 space-y-6 animate-in fade-in duration-300 shadow-2xl">
                  
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 uppercase font-bold">
                      Creative Strategy Output • {brandName}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 text-[11px] font-mono">
                      Yangla Neural Director
                    </span>
                  </div>

                  {/* Core Thesis & Tagline */}
                  <div className="space-y-2">
                    <div className="font-playfair italic text-2xl sm:text-3xl text-white">
                      "{generatedBrief.tagline}"
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed font-light">
                      {generatedBrief.creativeConcept}
                    </p>
                  </div>

                  {/* Brand Archetype */}
                  <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-mono">BRAND ARCHETYPE:</span>
                    <span className="text-amber-300 font-bold">{generatedBrief.brandArchetype}</span>
                  </div>

                  {/* Chromatic Palette */}
                  {generatedBrief.colorRecommendation && (
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-neutral-300 uppercase">Recommended Chromatic Palette:</div>
                      <div className="grid grid-cols-3 gap-2">
                        {generatedBrief.colorRecommendation.map((c, i) => (
                          <div key={i} className="p-2.5 rounded bg-neutral-950 border border-white/10 space-y-1">
                            <div className="h-8 rounded" style={{ backgroundColor: c.hex }} />
                            <div className="text-[11px] font-bold text-white truncate">{c.name}</div>
                            <div className="text-[10px] font-mono text-neutral-400">{c.hex}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Typography Pairing */}
                  {generatedBrief.typographyPairing && (
                    <div className="p-4 rounded-lg bg-neutral-950 border border-white/5 space-y-1 text-xs">
                      <div className="font-mono text-neutral-400 uppercase">Typographic Pairings:</div>
                      <div className="text-neutral-200">
                        <strong className="text-amber-300">Display:</strong> {generatedBrief.typographyPairing.display}
                      </div>
                      <div className="text-neutral-200">
                        <strong className="text-amber-300">Body:</strong> {generatedBrief.typographyPairing.body}
                      </div>
                    </div>
                  )}

                  {/* Strategic Advice */}
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-400/20 text-xs text-amber-200 leading-relaxed font-light">
                    <strong className="font-bold text-amber-300 block mb-1">Director's Strategic Note:</strong>
                    {generatedBrief.strategicAdvice}
                  </div>

                  {/* Use in Inquiry Button */}
                  <button
                    onClick={() => onUseGeneratedBrief(
                      `Creative Concept: ${generatedBrief.creativeConcept}\nTagline: ${generatedBrief.tagline}\nArchetype: ${generatedBrief.brandArchetype}`,
                      brandName
                    )}
                    className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Use this Strategy in Project Inquiry</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                </div>
              ) : (
                <div className="p-12 rounded-2xl bg-white/[0.02] border border-white/5 text-center space-y-4 flex flex-col items-center justify-center min-h-[380px]">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-400">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h4 className="font-syne font-bold text-xl text-white">Awaiting Your Parameters</h4>
                  <p className="text-xs text-neutral-400 max-w-md">
                    Fill in your brand vision on the left and click Generate to see bespoke strategic positioning, tagline, and architectural typography pairings.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: CHROMATIC PALETTE FOUNDRY */}
        {activeTab === 'palette' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PRESET_PALETTES.map((pal, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPalette(pal)}
                  className={`p-5 rounded-xl border text-left transition-all ${
                    selectedPalette.name === pal.name
                      ? 'bg-neutral-900 border-amber-400 ring-2 ring-amber-400/20'
                      : 'bg-neutral-950 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="font-syne font-bold text-sm text-white mb-3">{pal.name}</div>
                  <div className="grid grid-cols-4 gap-1.5 h-12 rounded-md overflow-hidden">
                    {pal.colors.map((c, i) => (
                      <div key={i} className="h-full" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Palette Inspect & Copy */}
            <div className="p-8 rounded-2xl bg-neutral-900/70 border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-syne font-bold text-2xl text-white">{selectedPalette.name} Specification</h3>
                  <p className="text-xs text-neutral-400">Click individual swatches to copy exact hex value.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {selectedPalette.colors.map((hex, i) => (
                  <button
                    key={i}
                    onClick={() => copyHex(hex)}
                    className="group text-left p-3 rounded-xl bg-neutral-950 border border-white/10 hover:border-amber-400 transition-all space-y-3"
                  >
                    <div
                      className="w-full h-24 rounded-lg border border-white/10 flex items-end justify-end p-2"
                      style={{ backgroundColor: hex }}
                    >
                      {copiedColor === hex && (
                        <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                          <Check className="w-3 h-3" /> Copied
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between font-mono text-xs text-neutral-300">
                      <span>{hex}</span>
                      <Copy className="w-3 h-3 text-neutral-500 group-hover:text-amber-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: LIVE MOCKUP SIMULATOR */}
        {activeTab === 'mockup' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-neutral-900 border border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-neutral-400">SELECT SURFACE:</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setMockupType('card')}
                    className={`px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 ${
                      mockupType === 'card' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Letterpress Business Card</span>
                  </button>
                  <button
                    onClick={() => setMockupType('mobile')}
                    className={`px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 ${
                      mockupType === 'mobile' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Spatial Mobile UI</span>
                  </button>
                  <button
                    onClick={() => setMockupType('billboard')}
                    className={`px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 ${
                      mockupType === 'billboard' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    <Building className="w-3.5 h-3.5" />
                    <span>Architectural Banner</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-mono text-neutral-400">TAGLINE:</span>
                <input
                  type="text"
                  value={customTagline}
                  onChange={(e) => setCustomTagline(e.target.value)}
                  className="px-3 py-1 text-xs rounded bg-neutral-950 border border-white/10 text-white w-full sm:w-64"
                />
              </div>
            </div>

            {/* Mockup Canvas */}
            <div className="p-10 rounded-2xl bg-neutral-950 border border-white/10 flex items-center justify-center min-h-[440px]">
              
              {/* Business Card Mockup */}
              {mockupType === 'card' && (
                <div className="w-[360px] sm:w-[420px] aspect-[1.75/1] rounded-xl bg-[#141417] border border-amber-400/40 p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between">
                    <div className="font-syne font-extrabold text-xl tracking-wider text-white">
                      YANGLA<span className="text-amber-400">.</span>
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">
                      NO. 8812 / 2026
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="font-playfair italic text-lg text-amber-200/90">
                      "{customTagline}"
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      KATHMANDU • LONDON • NEW YORK • TOKYO
                    </div>
                  </div>

                  <div className="flex items-end justify-between border-t border-white/10 pt-3">
                    <div>
                      <div className="font-syne font-bold text-xs text-white">Aarya Bajracharya</div>
                      <div className="text-[9px] font-mono text-neutral-400">Executive Creative Director</div>
                    </div>
                    <div className="font-mono text-[9px] text-amber-400">
                      studio@yangla.design
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Screen Mockup */}
              {mockupType === 'mobile' && (
                <div className="w-[280px] sm:w-[320px] aspect-[9/18] rounded-3xl bg-[#0e0e11] border-4 border-neutral-800 p-5 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                  <div className="w-20 h-4 bg-neutral-900 rounded-full mx-auto mb-2" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                      <span>09:41</span>
                      <span className="text-amber-400">● 5G</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-amber-400 uppercase">Spatial Experience</span>
                      <h4 className="font-syne font-bold text-xl text-white leading-tight">
                        {customTagline}
                      </h4>
                    </div>

                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                        alt="Mobile Specimen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <button className="w-full py-2.5 rounded-lg bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider">
                    Explore Exhibition
                  </button>
                </div>
              )}

              {/* Billboard Mockup */}
              {mockupType === 'billboard' && (
                <div className="w-full max-w-2xl aspect-[21/9] rounded-xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-[#121215] border-2 border-white/15 p-8 sm:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-amber-400 tracking-widest">
                      MILANO DESIGN WEEK PAVILION
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">OCT 2026</span>
                  </div>

                  <h3 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-none">
                    {customTagline}
                  </h3>

                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-white/10 pt-4">
                    <span>DESIGNED BY YANGLA STUDIO</span>
                    <span className="text-amber-300 font-bold">WWW.YANGLA.DESIGN</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
