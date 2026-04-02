import React from 'react';
import { 
  BrainCircuit, 
  Link as LinkIcon, 
  Terminal, 
  ShieldCheck, 
  AlertTriangle, 
  HelpCircle,
  CheckCircle2
} from 'lucide-react';

export function FactCheckAgent() {
  return (
    <div className="px-12 pb-12 space-y-10">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-surface-low rounded-2xl p-8 shadow-sm border border-outline-variant/5">
            <div className="flex items-center space-x-3 mb-6">
              <BrainCircuit className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold font-headline text-white">Source Intelligence</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Raw Text Input</label>
                <textarea 
                  rows={6}
                  className="w-full bg-surface-container border-none rounded-2xl p-4 text-white placeholder:text-slate-700 focus:ring-2 focus:ring-primary/20 transition-all resize-none text-sm"
                  placeholder="Paste the content, interview transcripts, or raw data here for the AI to analyze..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Reference URL</label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4" />
                    <input 
                      type="url"
                      className="w-full bg-surface-container border-none rounded-2xl py-3 pl-10 pr-4 text-white placeholder:text-slate-700 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                      placeholder="https://example.com/source-article"
                    />
                  </div>
                </div>
                <div className="flex items-end">
                  <button className="w-full h-[48px] rounded-2xl signature-gradient text-on-primary-container font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2">
                    <span>Generate Fact-Sheet</span>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col space-y-6">
          <div className="bg-surface-container rounded-2xl p-6 border-l-4 border-secondary shadow-lg">
            <h4 className="text-sm font-bold text-white mb-2">Agent Instructions</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The Analytical Brain will verify technical specs, cross-reference features, and identify target demographics. It suppresses hallucinations by flagging all unverified claims.
            </p>
          </div>
          <div className="bg-surface-highest/20 rounded-2xl p-6 flex-1 flex flex-col justify-center items-center text-center space-y-3 border border-outline-variant/5">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
              <Terminal className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xs font-medium text-slate-500">Processing logs will appear here during live analysis.</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-surface-low rounded-2xl overflow-hidden border border-outline-variant/5">
          <div className="flex items-center justify-between px-8 py-4 border-b border-outline-variant/10">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <h3 className="font-bold text-white font-headline">Structured Fact-Sheet</h3>
            </div>
            <div className="flex bg-surface-container p-1 rounded-lg">
              <button className="px-3 py-1 text-[10px] font-bold bg-surface-highest rounded text-primary">PREVIEW</button>
              <button className="px-3 py-1 text-[10px] font-bold text-slate-500 hover:text-white">JSON</button>
            </div>
          </div>
          
          <div className="p-8 space-y-8">
            <div className="space-y-4">
              <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest border-b border-primary/20 pb-2">Technical Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'Architecture', val: 'Dual-Agent LMM Framework' },
                  { label: 'Processing Latency', val: '< 450ms per token stream' },
                  { label: 'Model Backbone', val: 'Claude 3.5 Sonnet (Agent A)' },
                  { label: 'Verification Engine', val: 'Web-Search RAG Integration' },
                ].map((spec) => (
                  <div key={spec.label} className="bg-surface-container/50 p-4 rounded-xl border border-outline-variant/5">
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">{spec.label}</p>
                    <p className="text-sm font-medium text-white">{spec.val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest border-b border-primary/20 pb-2">Target Audience</h4>
              <div className="flex flex-wrap gap-2">
                {['B2B SaaS Content Teams', 'Technical Product Managers', 'SEO Strategists', 'Marketing Agencies'].map((tag) => (
                  <span key={tag} className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full border border-secondary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest border-b border-primary/20 pb-2">Feature Summary</h4>
              <ul className="space-y-3">
                {[
                  'Automated extraction of product roadmaps from unformatted transcripts.',
                  'Cross-platform formatting presets for LinkedIn, X, and Technical Blogs.',
                  'Zero-shot hallucination detection for high-stakes whitepapers.'
                ].map((feature) => (
                  <li key={feature} className="flex items-start space-x-3 text-sm text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="bg-surface-low rounded-2xl overflow-hidden flex flex-col h-full border-t-2 border-red-500/50 shadow-xl border-x border-b border-outline-variant/5">
            <div className="bg-red-500/10 px-6 py-4 flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h3 className="font-bold text-white font-headline text-sm">Ambiguous Statements</h3>
            </div>
            <div className="p-6 flex-1 space-y-4 overflow-y-auto max-h-[600px]">
              <p className="text-[10px] text-slate-500 italic mb-4">The following claims were found in the source but require human verification:</p>
              
              {[
                { id: '01', claim: '"The system reduces production costs by over 90% in most cases."', note: 'No verifiable case studies found in provided text.' },
                { id: '02', claim: '"Fully integrates with all existing enterprise legacy systems."', note: "Vague scope. 'All legacy systems' is technically improbable." },
                { id: '03', claim: '"Patented multi-agent logic ensures 100% accuracy."', note: 'Statistical impossibility. Patent ID missing.' },
              ].map((item) => (
                <div key={item.id} className="bg-surface-container p-4 rounded-xl border-l-2 border-red-500/30 space-y-2">
                  <p className="text-[10px] font-bold text-red-500 uppercase tracking-tighter">Claim #{item.id}</p>
                  <p className="text-sm text-white leading-snug">{item.claim}</p>
                  <div className="pt-2 flex items-center space-x-1">
                    <HelpCircle className="w-3 h-3 text-slate-600" />
                    <span className="text-[10px] text-slate-600 italic">{item.note}</span>
                  </div>
                </div>
              ))}
              
              <button className="w-full py-3 border border-outline-variant/30 rounded-xl text-[10px] font-bold text-slate-500 hover:bg-surface-highest transition-colors mt-4 uppercase tracking-widest">
                Add Verification Note
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
