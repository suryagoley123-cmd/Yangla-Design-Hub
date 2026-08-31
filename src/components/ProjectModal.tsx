import React, { useState } from 'react';
import { 
  X, 
  ArrowUpRight, 
  Check, 
  Copy, 
  ExternalLink, 
  Layers, 
  Palette, 
  Type, 
  Award,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onInquireSimilar: (projectName: string, serviceType: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireSimilar
}) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!project) return null;

  const currentGallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage];

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200" id="project-modal-backdrop">
      <div className="relative w-full max-w-5xl bg-[#111114] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-[#111114]/90 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-amber-400/90 text-neutral-950 font-mono text-xs font-bold uppercase">
              {project.categoryLabel}
            </span>
            <span className="text-neutral-400 font-mono text-xs hidden sm:inline">
              Case Study #{project.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onInquireSimilar(project.title, project.categoryLabel)}
              className="px-3.5 py-1.5 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-colors"
              id="modal-inquire-similar-btn"
            >
              Start Similar Project
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              aria-label="Close Case Study"
              id="close-project-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 md:p-10 space-y-10">
          
          {/* Title & Metadata */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <span>CLIENT: <strong className="text-white">{project.client}</strong></span>
              <span>YEAR: <strong className="text-white">{project.year}</strong></span>
              <span>STUDIO LEAD: <strong className="text-white">Yangla Special Projects</strong></span>
            </div>

            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white">
              {project.title}
            </h2>
            <p className="text-xl font-playfair italic text-amber-200/90 max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* Gallery Viewport */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-950 border border-white/10">
              <img
                src={currentGallery[selectedImageIdx]}
                alt={`${project.title} specimen ${selectedImageIdx + 1}`}
                className="w-full h-full object-cover object-center"
              />

              {currentGallery.length > 1 && (
                <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={() => setSelectedImageIdx((prev) => (prev > 0 ? prev - 1 : currentGallery.length - 1))}
                    className="p-2 rounded-full bg-neutral-950/80 hover:bg-neutral-900 text-white border border-white/15 pointer-events-auto transition-colors"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImageIdx((prev) => (prev < currentGallery.length - 1 ? prev + 1 : 0))}
                    className="p-2 rounded-full bg-neutral-950/80 hover:bg-neutral-900 text-white border border-white/15 pointer-events-auto transition-colors"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {currentGallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {currentGallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                      selectedImageIdx === idx
                        ? 'border-amber-400 ring-2 ring-amber-400/40'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Strategic Metrics Badges */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-xs font-mono text-neutral-400 uppercase">{m.label}</div>
                  <div className="font-syne font-bold text-2xl sm:text-3xl text-amber-300 mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Deep Dive Narrative (Challenge vs Solution vs Outcome) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="space-y-2 p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                01. The Challenge
              </span>
              <h4 className="font-syne font-bold text-lg text-white">Context & Friction</h4>
              <p className="text-neutral-300 text-sm leading-relaxed font-sans font-light">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
                02. Our Solution
              </span>
              <h4 className="font-syne font-bold text-lg text-white">The Creative Thesis</h4>
              <p className="text-neutral-300 text-sm leading-relaxed font-sans font-light">
                {project.solution}
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
                03. The Impact
              </span>
              <h4 className="font-syne font-bold text-lg text-white">Measurable Reality</h4>
              <p className="text-neutral-300 text-sm leading-relaxed font-sans font-light">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Design System Elements: Color Palette & Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Color Palette Specimen */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-white font-syne font-bold text-base">
                <Palette className="w-4 h-4 text-amber-400" />
                <span>Brand Chromatic Palette</span>
              </div>
              <p className="text-xs text-neutral-400">Click any swatch to copy HEX code to clipboard.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.colorPalette.map((col, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCopyHex(col.hex)}
                    className="group text-left space-y-2 p-2 rounded-lg bg-neutral-900 border border-white/5 hover:border-amber-400/50 transition-all"
                  >
                    <div
                      className="w-full h-14 rounded-md border border-white/10 flex items-end justify-end p-1.5 shadow-inner"
                      style={{ backgroundColor: col.hex }}
                    >
                      {copiedHex === col.hex && (
                        <span className="px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                          <Check className="w-3 h-3" /> Copied
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-neutral-200 truncate">{col.name}</div>
                      <div className="text-[10px] font-mono text-neutral-400 flex items-center justify-between">
                        <span>{col.hex}</span>
                        <Copy className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography Matrix */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-white font-syne font-bold text-base">
                <Type className="w-4 h-4 text-amber-400" />
                <span>Typographic Specimen</span>
              </div>
              <p className="text-xs text-neutral-400">Hierarchical type pairings crafted for this project.</p>

              <div className="space-y-3">
                {project.typography.map((t, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-neutral-900 border border-white/5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-amber-300">
                      <span>{t.role}</span>
                      <span className="text-neutral-400">{t.family}</span>
                    </div>
                    <div className="font-playfair text-lg text-white mt-1 italic">
                      "{t.sample}"
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Client Testimonial Endorsement */}
          {project.clientQuote && (
            <div className="p-8 rounded-xl bg-gradient-to-r from-amber-500/10 via-neutral-900 to-neutral-900 border border-amber-400/30 space-y-4">
              <div className="text-amber-400 font-serif text-3xl">“</div>
              <p className="text-neutral-200 font-serif italic text-lg sm:text-xl leading-relaxed">
                {project.clientQuote.text}
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                {project.clientQuote.avatar && (
                  <img
                    src={project.clientQuote.avatar}
                    alt={project.clientQuote.author}
                    className="w-12 h-12 rounded-full object-cover border border-amber-400/40"
                  />
                )}
                <div>
                  <div className="font-syne font-bold text-sm text-white">
                    {project.clientQuote.author}
                  </div>
                  <div className="text-xs text-neutral-400 font-mono">
                    {project.clientQuote.role}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Deliverables Checklist */}
          <div className="space-y-3 pt-2">
            <h4 className="font-syne font-bold text-base text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Project Deliverables & Artifacts</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300 p-2.5 rounded bg-white/[0.02] border border-white/5">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Drawer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-syne font-bold text-lg text-white">Ready to create something iconic?</div>
              <div className="text-xs text-neutral-400">Our senior studio partners review all inquiries within 24 hours.</div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors w-full sm:w-auto"
              >
                Close Case Study
              </button>
              <button
                onClick={() => onInquireSimilar(project.title, project.categoryLabel)}
                className="px-6 py-3 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-colors w-full sm:w-auto text-center"
              >
                Inquire Similar Scope
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
