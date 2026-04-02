import React from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  Activity, 
  GanttChart,
  Copy,
  MessageSquare
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Architecture() {
  const readme = `
# Quick Setup Guide

// Initialize the two-agent environment

\`\`\`bash
$ npm install @repurposer/core-sdk
$ repurposer init --agents=dual --verify=true
\`\`\`

## Configuration

Modify the \`agent.config.json\` to define your verification strictness and output templates.
  `;

  return (
    <div className="px-12 pb-20 max-w-7xl mx-auto">
      <section className="mb-16 mt-8">
        <div className="relative rounded-2xl overflow-hidden aspect-[21/7] group border border-outline-variant/10">
          <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent z-10"></div>
          <div className="absolute inset-0 signature-gradient opacity-10"></div>
          <img 
            src="https://picsum.photos/seed/tech-arch/1200/400" 
            alt="Architecture" 
            className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-12">
            <span className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-4">Precision Engineering</span>
            <h1 className="text-5xl font-extrabold font-headline text-white mb-4 leading-tight">Beyond Simple Prompting.</h1>
            <p className="text-slate-400 max-w-xl text-lg">Our dual-agent system ensures your content isn't just repurposed—it's verified, contextually aware, and statistically sound.</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-8 mb-16">
        <div className="col-span-12 mb-8">
          <h3 className="text-2xl font-bold font-headline text-white">The Two-Agent Pipeline</h3>
          <div className="h-1 w-20 bg-secondary mt-2"></div>
        </div>

        <div className="col-span-12 md:col-span-5 relative">
          <div className="bg-surface-low p-8 rounded-2xl h-full flex flex-col border border-outline-variant/5 hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-4 text-primary font-headline">Agent 01: The Fact Checker</h4>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">The first agent ingests raw source material, performing semantic analysis to extract core truth-claims. It cross-references internal datasets to ensure no hallucinations occur.</p>
            <ul className="space-y-3 mt-auto">
              {['Entity Recognition & Extraction', 'Logical Consistency Validation'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <ArrowRight className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="hidden md:flex col-span-2 items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-primary to-secondary opacity-20"></div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="bg-surface-low p-8 rounded-2xl h-full flex flex-col border border-outline-variant/5 hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="text-xl font-bold mb-4 text-secondary font-headline">Agent 02: The Creative Synthesizer</h4>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">Once the 'Truth Map' is finalized, Agent 2 translates the verified data into the target format, maintaining brand voice while adhering to verified constraints.</p>
            <ul className="space-y-3 mt-auto">
              {['Context-Aware Formatting', 'Voice & Tone Calibration'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Zap, label: 'Performance', title: 'Maximum Speed', desc: 'Parallel processing of agents allows for 10x faster output compared to manual editing cycles.', color: 'text-primary' },
          { icon: ShieldCheck, label: 'Reliability', title: 'Absolute Accuracy', desc: 'Our verification gate eliminates 99% of AI hallucinations commonly found in generic models.', color: 'text-secondary' },
          { icon: GanttChart, label: 'Integrity', title: 'Total Consistency', desc: 'Cross-agent checks ensure that multi-platform outputs never contradict each other.', color: 'text-tertiary' },
        ].map((item) => (
          <div key={item.title} className="bg-surface-container p-6 rounded-2xl border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-4">
              <item.icon className={cn("w-5 h-5", item.color)} />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">{item.label}</span>
            </div>
            <h5 className="text-lg font-bold mb-2 text-white font-headline">{item.title}</h5>
            <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-surface-low rounded-2xl overflow-hidden border border-outline-variant/10 shadow-inner">
        <div className="bg-surface-container-high px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-[10px] font-mono text-slate-500">README.md — AI-Repurposer-Core</span>
          </div>
          <Copy className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white transition-colors" />
        </div>
        <div className="p-8 font-mono text-sm leading-relaxed">
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-secondary text-lg mb-4 font-bold">{children}</h1>,
                h2: ({ children }) => <h2 className="text-white font-bold mb-3 mt-6">{children}</h2>,
                p: ({ children }) => <p className="text-slate-400 mb-4">{children}</p>,
                code: ({ children }) => <code className="bg-black/20 p-1 rounded text-primary">{children}</code>,
                pre: ({ children }) => <pre className="bg-black/20 p-4 rounded mb-6 text-primary overflow-x-auto">{children}</pre>,
              }}
            >
              {readme}
            </ReactMarkdown>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[10px] mt-8">
            <div className="border-l-2 border-primary/20 pl-4">
              <span className="text-primary font-bold uppercase tracking-widest">STRICT_MODE:</span>
              <p className="mt-1 text-slate-500">Fails execution if fact confidence is below 98%.</p>
            </div>
            <div className="border-l-2 border-secondary/20 pl-4">
              <span className="text-secondary font-bold uppercase tracking-widest">CROSS_CHECK:</span>
              <p className="mt-1 text-slate-500">Syncs data across LinkedIn, Twitter, and Blog outputs.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-20 py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-slate-600">© 2024 AI Content Repurposing System. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-[10px] text-slate-500 hover:text-primary transition-colors">Documentation</a>
          <a href="#" className="text-[10px] text-slate-500 hover:text-primary transition-colors">API Status</a>
          <a href="#" className="text-[10px] text-slate-500 hover:text-primary transition-colors">Support</a>
        </div>
      </footer>

      <button className="fixed bottom-8 right-8 w-14 h-14 signature-gradient text-on-primary-container rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
