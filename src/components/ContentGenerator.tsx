import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  Send, 
  Copy, 
  FileDown, 
  RefreshCw,
  Mail,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function ContentGenerator() {
  const [activeTab, setActiveTab] = useState('blog');

  const insights = [
    { id: '01', text: 'Quantum computing speeds increased by 40% in Q3 using topological qubits.' },
    { id: '02', text: 'Energy consumption reduced by 15.4kWh per teraflop compared to previous silicon chips.' },
    { id: '03', text: 'Market deployment scheduled for January 2025 across enterprise cloud providers.' },
  ];

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Left Column: Context */}
      <section className="col-span-12 lg:col-span-4 space-y-6">
        <div className="bg-surface-low p-6 rounded-2xl relative overflow-hidden group border border-outline-variant/5">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <FileText className="w-24 h-24" />
          </div>
          <h3 className="font-headline text-lg font-bold mb-4 text-primary">Generated Fact-Sheet</h3>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Summary of source data verified by the Fact-Check Agent. Use these points as the sole grounding for the copy.
          </p>
          
          <div className="space-y-4">
            {insights.map((insight) => (
              <div key={insight.id} className="p-4 bg-surface-container rounded-xl border-l-2 border-primary/30">
                <span className="text-[10px] font-bold text-primary uppercase block mb-1">Key Insight {insight.id}</span>
                <p className="text-sm text-slate-200">{insight.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Grounding Lock</p>
                <p className="text-[10px] text-slate-500">Creative agent restricted to verified facts only.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl border border-outline-variant/5">
          <img 
            src="https://picsum.photos/seed/data-viz/600/400" 
            alt="Status" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
          <div className="absolute bottom-4 left-4">
            <span className="px-2 py-1 bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold rounded uppercase">System Status</span>
            <p className="text-white text-sm font-semibold mt-1">Engines Primed for Creative Output</p>
          </div>
        </div>
      </section>

      {/* Right Column: Generator */}
      <section className="col-span-12 lg:col-span-8">
        <div className="bg-surface-container p-1 rounded-xl flex gap-1 mb-6">
          {[
            { id: 'blog', label: 'Blog Post', icon: FileText },
            { id: 'social', label: 'Social Thread', icon: Share2 },
            { id: 'email', label: 'Email Teaser', icon: Mail },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all",
                activeTab === tab.id 
                  ? "bg-surface-highest text-white font-semibold shadow-lg" 
                  : "text-slate-400 hover:text-white hover:bg-surface-container-high"
              )}
            >
              <tab.icon className={cn("w-4 h-4", activeTab === tab.id ? "text-primary" : "")} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-surface-low rounded-2xl flex flex-col h-[700px] shadow-2xl overflow-hidden relative border border-outline-variant/5">
          <div className="p-6 flex justify-between items-center border-b border-outline-variant/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Format: Professional Blog</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">~500 Words</span>
              </div>
              <h4 className="font-headline font-bold text-lg text-white">The Quantum Leap: Topological Qubits in 2025</h4>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-surface-container-high hover:bg-surface-bright rounded-lg transition-colors text-slate-300">
                <Copy className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high hover:bg-surface-bright rounded-lg transition-colors text-white">
                <FileDown className="w-4 h-4" />
                <span className="text-xs font-bold">Download PDF</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6 text-slate-400 leading-relaxed">
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40 py-20">
              <FileText className="w-16 h-16" />
              <div>
                <h5 className="font-headline font-bold text-lg text-white">No Content Generated</h5>
                <p className="text-sm max-w-xs mx-auto">Generate content from a Fact-Sheet first to see your professional blog post here.</p>
              </div>
              <button className="px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-xs font-bold transition-colors flex items-center gap-2">
                <RefreshCw className="w-3 h-3" />
                Refresh from Source
              </button>
            </div>
          </div>

          <div className="p-6 bg-surface-container-high/50 border-t border-outline-variant/10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Tell the Voice agent to adjust tone or length..."
                className="w-full bg-surface-highest/40 border-none rounded-xl py-4 pl-6 pr-14 focus:ring-1 focus:ring-primary/40 backdrop-blur-xl text-sm text-white placeholder:text-slate-600 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 signature-gradient rounded-lg flex items-center justify-center text-on-primary-container shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-low p-5 rounded-2xl border border-outline-variant/5 hover:border-primary/20 transition-all group cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-500 opacity-50">DRAFT</span>
            </div>
            <h6 className="text-xs font-bold mb-2 text-white">Subject: The 40% Quantum Jump</h6>
            <p className="text-[11px] text-slate-400 line-clamp-2">Just saw the Q3 audit reports. Topological qubits are actually working at scale...</p>
            <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 border border-outline-variant/20 rounded-lg hover:bg-surface-container-high transition-colors text-[10px] font-bold uppercase tracking-wider text-slate-300">
              <Copy className="w-3 h-3" />
              Copy Draft
            </button>
          </div>

          <div className="bg-surface-low p-5 rounded-2xl border border-outline-variant/5 hover:border-secondary/20 transition-all group cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <Share2 className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-500 opacity-50">DRAFT</span>
            </div>
            <h6 className="text-xs font-bold mb-2 text-white">Punchy Tweet Thread</h6>
            <p className="text-[11px] text-slate-400 line-clamp-2">1/ Quantum just got real. 40% faster, 15.4kWh greener. Here is why it matters...</p>
            <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 border border-outline-variant/20 rounded-lg hover:bg-surface-container-high transition-colors text-[10px] font-bold uppercase tracking-wider text-slate-300">
              <Copy className="w-3 h-3" />
              Copy Thread
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
