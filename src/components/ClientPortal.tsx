import React, { useState } from 'react';
import { 
  Lock, 
  Search, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Download, 
  Send, 
  Sparkles, 
  ArrowRight, 
  User, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { DEMO_CLIENT_PROJECTS } from '../data/projectsData';
import { ClientPortalProject } from '../types';

export const ClientPortal: React.FC = () => {
  const [projectCodeInput, setProjectCodeInput] = useState('YANGLA-8821');
  const [activeProject, setActiveProject] = useState<ClientPortalProject | null>(DEMO_CLIENT_PROJECTS['YANGLA-8821']);
  const [errorMsg, setErrorMsg] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const code = projectCodeInput.toUpperCase().trim();
    if (DEMO_CLIENT_PROJECTS[code]) {
      setActiveProject(DEMO_CLIENT_PROJECTS[code]);
    } else {
      setErrorMsg(`No active commission found with access code "${code}". Try demo code: YANGLA-8821 or YANGLA-9402.`);
    }
  };

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackText('');
      setFeedbackSent(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-[#0b0b0d] border-t border-white/[0.06] relative" id="portal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <span>06 / Client Private Portal</span>
            <span>•</span>
            <span>Live Milestone Synchronization</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Commission Tracker & Asset Vault
          </h2>
          <p className="text-neutral-400 text-base font-light">
            Clients access live sprint deliverables, stage sign-offs, and design system tokens in real-time.
          </p>
        </div>

        {/* Access Code Input Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-white/10 shadow-xl mb-12">
          <form onSubmit={handleLookup} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-neutral-300 uppercase flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Enter Private Project Access Code</span>
              </label>
              <div className="text-xs text-neutral-400">
                Demo access codes: <button type="button" onClick={() => { setProjectCodeInput('YANGLA-8821'); setActiveProject(DEMO_CLIENT_PROJECTS['YANGLA-8821']); }} className="text-amber-300 underline font-mono">YANGLA-8821</button> (Lumina) or <button type="button" onClick={() => { setProjectCodeInput('YANGLA-9402'); setActiveProject(DEMO_CLIENT_PROJECTS['YANGLA-9402']); }} className="text-amber-300 underline font-mono">YANGLA-9402</button> (Aether)
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative flex-1 sm:w-64">
                <input
                  type="text"
                  value={projectCodeInput}
                  onChange={(e) => setProjectCodeInput(e.target.value)}
                  placeholder="e.g. YANGLA-8821"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-white/15 text-white font-mono text-xs uppercase focus:outline-none focus:border-amber-400"
                  id="portal-code-input"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
                id="portal-lookup-btn"
              >
                Access
              </button>
            </div>
          </form>

          {errorMsg && (
            <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-300 font-mono">
              {errorMsg}
            </div>
          )}
        </div>

        {/* Active Project Dashboard */}
        {activeProject && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Top Project Status Card */}
            <div className="p-8 rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-amber-300 font-bold">
                      {activeProject.projectCode}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {activeProject.clientName}
                    </span>
                  </div>
                  <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mt-1">
                    {activeProject.projectName}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
                  <div>
                    <span className="text-neutral-400 block text-[10px]">CURRENT STAGE</span>
                    <span className="text-emerald-400 font-bold text-sm">{activeProject.status}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px]">STUDIO LEAD</span>
                    <span className="text-white font-medium">{activeProject.leadDesigner}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px]">EST. LAUNCH</span>
                    <span className="text-amber-300 font-medium">{activeProject.targetLaunch}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-300">Total Project Progress</span>
                  <span className="text-amber-400 font-bold">{activeProject.progressPercentage}% Complete</span>
                </div>
                <div className="w-full h-3 rounded-full bg-neutral-950 overflow-hidden border border-white/10 p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-700"
                    style={{ width: `${activeProject.progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Milestones & Asset Vault 2-Col Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Milestones (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-white/10">
                <h4 className="font-syne font-bold text-lg text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Sprint Roadmap & Phase Deliverables</span>
                </h4>

                <div className="space-y-4 pt-2">
                  {activeProject.milestones.map((m, idx) => (
                    <div
                      key={m.id}
                      className={`p-5 rounded-xl border transition-all ${
                        m.status === 'completed'
                          ? 'bg-emerald-950/10 border-emerald-500/30'
                          : m.status === 'in-progress'
                          ? 'bg-amber-950/20 border-amber-500/40 ring-1 ring-amber-400/20'
                          : 'bg-white/[0.02] border-white/5 opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] font-bold uppercase text-amber-400">
                              {m.phase}
                            </span>
                            <span className="text-neutral-500">•</span>
                            <span className="font-mono text-[11px] text-neutral-400">
                              {m.date}
                            </span>
                          </div>
                          <h5 className="font-syne font-bold text-base text-white">
                            {m.title}
                          </h5>
                          <p className="text-xs text-neutral-300 leading-relaxed font-light">
                            {m.details}
                          </p>
                        </div>

                        <div className="shrink-0">
                          {m.status === 'completed' && (
                            <span className="px-2.5 py-1 rounded bg-emerald-400/20 text-emerald-300 font-mono text-[10px] font-bold uppercase flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Signed Off
                            </span>
                          )}
                          {m.status === 'in-progress' && (
                            <span className="px-2.5 py-1 rounded bg-amber-400 text-neutral-950 font-mono text-[10px] font-bold uppercase flex items-center gap-1">
                              Active Sprint
                            </span>
                          )}
                          {m.status === 'upcoming' && (
                            <span className="px-2 py-0.5 rounded bg-white/5 text-neutral-400 font-mono text-[10px]">
                              Upcoming
                            </span>
                          )}
                        </div>
                      </div>

                      {m.deliverables && m.deliverables.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-2">
                          {m.deliverables.map((del, dIdx) => (
                            <span key={dIdx} className="px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-neutral-300 border border-white/5">
                              📄 {del}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Asset Vault & Instant Feedback (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Downloadable Assets */}
                <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-4">
                  <h4 className="font-syne font-bold text-lg text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>Deliverable Asset Vault</span>
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Latest high-res production assets released by Yangla engineering.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {activeProject.assets.map((asset, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-neutral-950 border border-white/5 flex items-center justify-between hover:border-amber-400/40 transition-colors"
                      >
                        <div className="space-y-0.5">
                          <div className="text-xs font-mono font-medium text-white truncate max-w-[200px]">
                            {asset.name}
                          </div>
                          <div className="text-[10px] font-mono text-neutral-400">
                            {asset.type} • {asset.size}
                          </div>
                        </div>

                        <button
                          onClick={() => alert(`Downloading signed release package: ${asset.name}`)}
                          className="p-2 rounded-lg bg-white/5 hover:bg-amber-400 hover:text-neutral-950 text-neutral-300 transition-colors"
                          title="Download Asset"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Studio Feedback Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-4">
                  <h4 className="font-syne font-bold text-base text-white">Direct Sprint Feedback</h4>
                  <p className="text-xs text-neutral-400">
                    Send real-time feedback directly to Lead Designer {activeProject.leadDesigner}.
                  </p>

                  <form onSubmit={handleSendFeedback} className="space-y-3">
                    <textarea
                      rows={3}
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      placeholder="Comment on milestone assets or request revisions..."
                      className="w-full p-3 rounded-lg bg-neutral-950 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />

                    <button
                      type="submit"
                      disabled={feedbackSent}
                      className="w-full py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 disabled:bg-emerald-500 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      {feedbackSent ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Feedback Logged to Studio Sprint!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Revision Note</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
