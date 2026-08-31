import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Sliders, 
  Award, 
  ShieldCheck, 
  Layers, 
  Play, 
  ChevronRight,
  Eye
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projectsData';
import { ProjectCaseStudy } from '../types';

interface HeroProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenEstimate: () => void;
  onOpenLab: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectProject,
  onOpenEstimate,
  onOpenLab,
  onOpenContact
}) => {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const featuredThree = FEATURED_PROJECTS.slice(0, 3);
  const currentProject = featuredThree[activeHeroIndex];

  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-dot-pattern" id="hero">
      {/* Background Ambient Aura Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Studio Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono mb-8 backdrop-blur-sm shadow-inner">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-neutral-400">EST. 2018</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-200 uppercase tracking-wider font-semibold">
            Global Design & Spatial Studio
          </span>
          <span className="text-neutral-600">/</span>
          <span className="text-amber-300 font-sans font-medium hidden sm:inline">
            Awwwards Studio Nominee
          </span>
        </div>

        {/* Main Editorial Hero Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.03]">
              Crafting <span className="font-playfair italic font-normal text-amber-200/90 underline decoration-amber-500/30 decoration-2 underline-offset-8">distinctive</span> identities & spaces.
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-5">
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-sans font-normal max-w-lg">
              Yangla Design is an international creative consultancy bridging geometric brutalism, sustainable architecture, and next-generation digital flagships.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white hover:bg-amber-300 text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-95"
                id="hero-explore-work-btn"
              >
                <span>View Selected Works</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenLab}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-medium text-xs uppercase tracking-wider transition-all duration-200 backdrop-blur-sm"
                id="hero-design-lab-btn"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>AI Design Lab</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Studio Reel & Spotlight Card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/60 shadow-2xl backdrop-blur-xl group">
          {/* Main Visual Showcase Container */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-neutral-950">
            <img
              src={currentProject.heroImage}
              alt={currentProject.title}
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter brightness-95"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e]/80 via-transparent to-transparent hidden md:block" />

            {/* Floating Case Study Overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-amber-400/90 text-neutral-950 font-mono text-[11px] font-bold uppercase tracking-wider">
                    {currentProject.categoryLabel}
                  </span>
                  <span className="text-neutral-300 font-mono text-xs">
                    Client: {currentProject.client} • {currentProject.year}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-2xl sm:text-4xl text-white">
                  {currentProject.title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base line-clamp-2 font-sans font-light max-w-xl">
                  {currentProject.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectProject(currentProject)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 hover:border-amber-400 transition-all shadow-xl backdrop-blur-md"
                  id={`hero-inspect-case-study-${currentProject.id}`}
                >
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Inspect Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              </div>
            </div>

            {/* Quick Carousel Selector Indicators */}
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-neutral-950/80 p-1.5 rounded-lg border border-white/10 backdrop-blur-md">
              {featuredThree.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveHeroIndex(idx)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                    activeHeroIndex === idx
                      ? 'bg-amber-400 text-neutral-950 font-bold shadow'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                  id={`hero-reel-tab-${idx}`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Studio Metrics & Credentials Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4 hover:border-white/15 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-syne font-bold text-2xl text-white">18+</div>
              <div className="text-xs text-neutral-400 font-sans">Global Design Laurels</div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4 hover:border-white/15 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-syne font-bold text-2xl text-white">99.4%</div>
              <div className="text-xs text-neutral-400 font-sans">Client Partnership Score</div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4 hover:border-white/15 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="font-syne font-bold text-2xl text-white">160+</div>
              <div className="text-xs text-neutral-400 font-sans">Completed Masterworks</div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4 hover:border-white/15 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-indigo-400/10 border border-indigo-400/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-syne font-bold text-2xl text-white">4 Studios</div>
              <div className="text-xs text-neutral-400 font-sans">KTM • LND • NYC • TKO</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
