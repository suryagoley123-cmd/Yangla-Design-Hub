import React, { useState, useMemo } from 'react';
import { 
  Search, 
  LayoutGrid, 
  List, 
  ArrowUpRight, 
  Eye, 
  SlidersHorizontal,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projectsData';
import { ProjectCaseStudy, ProjectCategory } from '../types';

interface WorkShowcaseProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenContact: (initialService?: string) => void;
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = ({
  onSelectProject,
  onOpenContact
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'branding', label: 'Brand Identity' },
    { id: 'digital', label: 'Digital Products' },
    { id: 'spatial', label: 'Spatial & Architecture' },
    { id: 'editorial', label: 'Editorial & Print' },
    { id: 'motion', label: 'Motion & 3D' }
  ];

  const filteredProjects = useMemo(() => {
    return FEATURED_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.deliverables.some((d) => d.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 bg-[#09090b] border-t border-white/[0.06] relative" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <span>01 / Portfolio</span>
              <span>•</span>
              <span>2024 — 2026 Archive</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Selected Masterworks
            </h2>
            <p className="text-neutral-400 text-base max-w-xl font-light">
              Explore our curated portfolio of visual identities, architectural pavilions, and high-performance digital flagships.
            </p>
          </div>

          {/* View Mode & Count */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              Showing <strong className="text-white">{filteredProjects.length}</strong> of {FEATURED_PROJECTS.length} Case Studies
            </span>
            <div className="flex items-center p-1 rounded-lg bg-neutral-900 border border-white/10">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-amber-400 text-neutral-950 shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Grid View"
                id="view-mode-grid-btn"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-amber-400 text-neutral-950 shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Editorial List View"
                id="view-mode-list-btn"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all uppercase tracking-wider ${
                  selectedCategory === cat.id
                    ? 'bg-white text-neutral-950 font-bold shadow-md'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
                id={`filter-category-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, client, medium..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-neutral-900/80 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400/80 transition-colors"
              id="work-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-neutral-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center space-y-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mx-auto text-neutral-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-syne font-bold text-lg text-white">No projects found matching your criteria</h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              Try modifying your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded bg-amber-400 text-neutral-950 font-bold text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Grid View Mode */}
        {viewMode === 'grid' && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-neutral-900/40 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 flex flex-col justify-between"
                id={`project-card-${project.id}`}
              >
                <div>
                  {/* Thumbnail Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-300 bg-neutral-900/90 px-3 py-1.5 rounded-md border border-white/15">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Case Study</span>
                      </span>
                    </div>

                    {/* Category pill */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-neutral-950/85 backdrop-blur-md text-amber-300 font-mono text-[10px] font-semibold uppercase tracking-wider border border-white/10">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 rounded bg-neutral-950/85 text-neutral-400 font-mono text-[10px]">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 space-y-3">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wide">
                      {project.client}
                    </div>
                    <h3 className="font-syne font-bold text-xl text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-2 font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Deliverable Tags */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.deliverables.slice(0, 2).map((del, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-neutral-400"
                    >
                      {del}
                    </span>
                  ))}
                  {project.deliverables.length > 2 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-neutral-500">
                      +{project.deliverables.length - 2} more
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Editorial List View Mode */}
        {viewMode === 'list' && filteredProjects.length > 0 && (
          <div className="divide-y divide-white/10 border-y border-white/10">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group py-6 px-4 hover:bg-white/[0.02] transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                id={`project-list-row-${project.id}`}
              >
                <div className="flex items-start md:items-center gap-6">
                  <span className="font-mono text-xs text-neutral-400">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-syne font-bold text-2xl text-white group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-playfair italic mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 md:gap-12">
                  <div className="text-left md:text-right">
                    <div className="text-xs font-medium text-neutral-300">{project.client}</div>
                    <div className="text-[11px] font-mono text-neutral-500">{project.categoryLabel}</div>
                  </div>
                  <div className="font-mono text-xs text-neutral-400">
                    {project.year}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-amber-400 group-hover:border-amber-400 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-neutral-900 to-[#121215] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-syne font-bold text-xl text-white">Have a specific design challenge in mind?</h4>
            <p className="text-xs text-neutral-400 mt-1">We tailor dedicated multidisciplinary studio teams for complex architectural and digital commissions.</p>
          </div>
          <button
            onClick={() => onOpenContact('Brand Strategy & Identity')}
            className="px-6 py-3 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md"
            id="work-commission-custom-btn"
          >
            Commission a Project
          </button>
        </div>

      </div>
    </section>
  );
};
