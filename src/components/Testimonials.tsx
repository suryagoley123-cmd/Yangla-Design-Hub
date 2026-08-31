import React from 'react';
import { Quote, Star, ArrowUpRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Yangla transformed our spatial and digital presence with astonishing aesthetic discipline. They redefined our luxury flagship, multiplying average order values by 3.8x.',
      author: 'Matteo Moretti',
      role: 'Founder & Master Gemologist, Lumina Milano',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
      metric: '+380% Order Value Growth',
      tag: 'Brand Identity & Web Flagship'
    },
    {
      quote: 'The architectural pavilion Yangla designed in the Kyoto foothills seamlessly balances carbon-negative timber engineering with contemplative sacred light.',
      author: 'Kenji Takahashi',
      role: 'Director of Cultural Heritage, Kyoto',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
      metric: 'WAF Sustainability Laureate',
      tag: 'Spatial Architecture'
    },
    {
      quote: 'Yangla did not simply design user interfaces for our spatial headsets; they invented the spatial typography and ergonomic grammar of the next computing era.',
      author: 'Dr. Elena Rostova',
      role: 'Chief Product Officer, Aether OS',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      metric: '$38M Series B Raised',
      tag: 'Digital Product & Spatial 3D'
    }
  ];

  const press = [
    { outlet: 'Awwwards', note: 'Studio of the Year Nominee 2025' },
    { outlet: 'Wallpaper*', note: 'The Next Vanguard in Spatial Design' },
    { outlet: 'Fast Company', note: 'Innovation by Design Laureate' },
    { outlet: 'Architectural Digest', note: 'Top 10 Global Architectural Practices' }
  ];

  return (
    <section className="py-24 bg-[#09090b] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <span>07 / Client Endorsements</span>
            <span>•</span>
            <span>Measurable Impact</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Trusted by Visionary Patrons & Founders
          </h2>
          <p className="text-neutral-400 text-base font-light">
            We forge deep, long-term partnerships with founders and cultural stewards across Milan, Kyoto, San Francisco, and London.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] text-amber-300 font-mono text-[10px] uppercase border border-white/5">
                    {t.tag}
                  </span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="font-playfair italic text-base sm:text-lg text-neutral-200 leading-relaxed">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="font-mono text-xs text-emerald-400 font-bold">
                  {t.metric}
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="font-syne font-bold text-sm text-white">{t.author}</div>
                    <div className="text-[11px] text-neutral-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Marquee & Mentions */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
          <div className="text-center font-mono text-xs text-neutral-400 uppercase tracking-widest mb-6">
            Featured In & Recognized By
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {press.map((p, idx) => (
              <div key={idx} className="space-y-1 p-3 rounded-lg bg-neutral-950/40 border border-white/5">
                <div className="font-syne font-extrabold text-xl text-white tracking-wider">{p.outlet}</div>
                <div className="text-[11px] text-neutral-400 font-mono">{p.note}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
