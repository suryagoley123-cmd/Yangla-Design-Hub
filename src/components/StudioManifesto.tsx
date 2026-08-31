import React from 'react';
import { 
  Award, 
  Globe, 
  HeartHandshake, 
  Sparkles, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';
import { STUDIO_TEAM } from '../data/projectsData';

export const StudioManifesto: React.FC = () => {
  return (
    <section className="py-24 bg-[#09090b] border-t border-white/[0.06] relative" id="studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <span>05 / The Studio & Ethos</span>
            <span>•</span>
            <span>Est. 2018</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Mindfulness Meets Modernist Architecture
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Founded with roots in the sacred architectural traditions of the Kathmandu Valley and refined in London, Zurich, and Tokyo — Yangla Design creates work of quiet gravity and enduring relevance.
          </p>
        </div>

        {/* Manifesto Statement Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-neutral-900/80 via-[#131316] to-[#0c0c0e] border border-white/10 shadow-2xl mb-20 space-y-6">
          <div className="text-amber-400 font-mono text-xs uppercase tracking-widest">
            The Yangla Design Manifesto
          </div>
          <blockquote className="font-playfair text-xl sm:text-3xl text-neutral-100 font-normal leading-relaxed italic">
            “We reject transient digital noise and ephemeral design trends. True luxury is intentionality, tactile material permanence, and computational clarity that endures for generations.”
          </blockquote>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="space-y-1">
              <div className="font-syne font-bold text-base text-white">01. Material Honesty</div>
              <p className="text-xs text-neutral-400 font-light">Whether crafting timber joinery or WebGL fragment shaders, every pixel and joint serves a purpose.</p>
            </div>
            <div className="space-y-1">
              <div className="font-syne font-bold text-base text-white">02. Spatial Restraint</div>
              <p className="text-xs text-neutral-400 font-light">Whitespace and negative void are active architectural instruments, not empty room.</p>
            </div>
            <div className="space-y-1">
              <div className="font-syne font-bold text-base text-white">03. Cultural Resonance</div>
              <p className="text-xs text-neutral-400 font-light">We honor indigenous craftsmanship while engineering cutting-edge digital infrastructure.</p>
            </div>
          </div>
        </div>

        {/* Studio Leadership */}
        <div className="space-y-8 mb-20">
          <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase">Leadership Pod</span>
              <h3 className="font-syne font-bold text-2xl text-white">Studio Partners & Directors</h3>
            </div>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">Multidisciplinary Foundry</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDIO_TEAM.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-xl overflow-hidden bg-neutral-900/40 border border-white/10 hover:border-amber-400/40 transition-all p-4 space-y-4"
              >
                <div className="aspect-[4/5] rounded-lg overflow-hidden bg-neutral-950">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-syne font-bold text-base text-white">{member.name}</h4>
                    <span className="text-[10px] font-mono text-amber-400">{member.location}</span>
                  </div>
                  <div className="text-xs text-neutral-300 font-mono font-medium">{member.role}</div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light line-clamp-3">
                    {member.bio}
                  </p>
                  {member.awards && (
                    <div className="text-[10px] font-mono text-neutral-500 pt-2 border-t border-white/5 truncate">
                      {member.awards}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Studio Locations */}
        <div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-syne font-bold text-lg text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-amber-400" />
              <span>Worldwide Studio Presence</span>
            </h3>
            <span className="text-xs font-mono text-neutral-400">4 Timezones Synchronized</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1.5 p-4 rounded-lg bg-black/40 border border-white/5">
              <div className="font-syne font-bold text-white text-base">Kathmandu (HQ)</div>
              <div className="text-xs text-neutral-400 font-mono">Patan Durbar Atelier, Lalitpur</div>
              <div className="text-xs text-amber-400 font-mono pt-1">Timezone: UTC +5:45</div>
            </div>

            <div className="space-y-1.5 p-4 rounded-lg bg-black/40 border border-white/5">
              <div className="font-syne font-bold text-white text-base">London</div>
              <div className="text-xs text-neutral-400 font-mono">Shoreditch High St, EC1</div>
              <div className="text-xs text-amber-400 font-mono pt-1">Timezone: UTC +1:00</div>
            </div>

            <div className="space-y-1.5 p-4 rounded-lg bg-black/40 border border-white/5">
              <div className="font-syne font-bold text-white text-base">New York</div>
              <div className="text-xs text-neutral-400 font-mono">Crosby St, SoHo 10012</div>
              <div className="text-xs text-amber-400 font-mono pt-1">Timezone: UTC -4:00</div>
            </div>

            <div className="space-y-1.5 p-4 rounded-lg bg-black/40 border border-white/5">
              <div className="font-syne font-bold text-white text-base">Tokyo</div>
              <div className="text-xs text-neutral-400 font-mono">Aoyama Minato-ku</div>
              <div className="text-xs text-amber-400 font-mono pt-1">Timezone: UTC +9:00</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
