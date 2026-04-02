import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Zap, BrainCircuit, Quote } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-surface overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-extrabold text-primary font-headline">AI Repurposer</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#" className="text-primary">Home</a>
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Architecture</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <button 
            onClick={onStart}
            className="px-6 py-2 signature-gradient text-on-primary-container font-bold rounded-md text-sm uppercase tracking-wider hover:brightness-110 transition-all"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Next-Gen Content Engineering</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] font-headline">
              Kill the Burnout.<br />
              <span className="text-signature">Multiply your Output.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              The traditional content flywheel is broken. Our two-agent architecture bridges the gap between high-speed production and ironclad factual integrity. One verifies, one creates—you scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onStart}
                className="px-8 py-4 signature-gradient text-on-primary-container font-bold uppercase tracking-wider rounded-md hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              >
                Get Started
              </button>
              <button className="px-8 py-4 bg-surface-highest text-secondary font-bold uppercase tracking-wider rounded-md hover:bg-surface-bright transition-all">
                View Pipeline
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-panel p-2 rounded-2xl shadow-2xl">
              <img 
                src="https://picsum.photos/seed/ai-obs/800/600" 
                alt="Observatory" 
                className="rounded-xl w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-surface-container p-6 rounded-2xl border border-outline-variant/10 shadow-2xl max-w-[240px]">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="w-5 h-5 text-secondary" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Efficiency Gain</span>
              </div>
              <div className="text-3xl font-headline font-bold text-white">840%</div>
              <p className="text-[10px] text-slate-500 leading-tight mt-1">Average production increase reported by early adopters using dual-agent logic.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section className="py-32 px-6 bg-surface-low">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">The Two-Agent Pipeline</h2>
              <p className="text-slate-400">Unlike singular LLM prompts that drift and hallucinate, our architecture separates the left-brain logic from the right-brain creativity.</p>
            </div>
            <div className="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-surface-container p-8 rounded-2xl border-l-4 border-secondary transition-all hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-secondary">Agent 01: The Fact-Checker</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                The auditor. It scans source materials for specific claims, statistics, and unique insights. It builds a "Knowledge Graph" that serves as the immutable source of truth.
              </p>
              <ul className="space-y-3">
                {['Statistical Validation', 'Contextual Anchoring'].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-sm text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-surface-container p-8 rounded-2xl border-l-4 border-primary transition-all hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-primary">Agent 02: The Creative Copywriter</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                The storyteller. Fueled by the Fact-Checker's Knowledge Graph, it adapts the voice to any channel without losing the original meaning or authority.
              </p>
              <ul className="space-y-3">
                {['Multi-Channel Formatting', 'Voice & Tone Matching'].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-sm text-slate-300">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 bg-surface-container rounded-2xl p-10 flex flex-col justify-between relative group overflow-hidden">
              <div className="absolute inset-0 signature-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div>
                <h3 className="text-4xl font-headline font-extrabold mb-6 tracking-tighter">Atmospheric Consistency</h3>
                <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                  Our system ensures every piece of content feels part of a singular ecosystem. No more fragmented brand voices or contradictory messaging.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-outline-variant/10">
                {[
                  { val: '100%', label: 'Brand Sync', color: 'text-primary' },
                  { val: '0%', label: 'Drift', color: 'text-secondary' },
                  { val: '< 2min', label: 'Generation', color: 'text-tertiary' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className={cn("text-2xl font-bold tracking-tight", stat.color)}>{stat.val}</div>
                    <div className="text-[10px] uppercase text-slate-500 tracking-widest font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-4 space-y-6">
              <div className="h-1/2 bg-surface-container-high rounded-2xl p-8 flex flex-col justify-center">
                <Zap className="w-10 h-10 text-secondary mb-4" />
                <h4 className="text-xl font-headline font-bold mb-2">High-Velocity Scaling</h4>
                <p className="text-sm text-slate-400">Repurpose one deep-dive podcast into 50+ pieces of targeted content in minutes.</p>
              </div>
              <div className="h-1/2 bg-surface-highest rounded-2xl p-8 flex flex-col justify-center">
                <BrainCircuit className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-headline font-bold mb-2">Reduced Effort</h4>
                <p className="text-sm text-slate-400">Offload the heavy lifting of drafting and verification to AI, leaving only final curation to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-surface-low">
        <div className="container mx-auto text-center max-w-4xl">
          <Quote className="w-12 h-12 text-secondary mx-auto mb-8 opacity-50" />
          <p className="text-2xl md:text-3xl font-medium italic text-white leading-snug mb-8">
            "This system transformed our content department from a bottleneck into a powerhouse. The two-agent verification is the only way we could trust AI with our brand reputation."
          </p>
          <div className="flex flex-col items-center">
            <img 
              src="https://picsum.photos/seed/marcus/100/100" 
              alt="Marcus" 
              className="w-16 h-16 rounded-full mb-4 border-2 border-primary/20"
              referrerPolicy="no-referrer"
            />
            <h5 className="text-lg font-headline font-bold">Marcus Thorne</h5>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Director of Growth, Synthetix Media</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-outline-variant/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-primary font-black tracking-tight text-lg">AI Repurposer</div>
          <div className="flex space-x-8 text-sm text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">API Access</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
          <div className="text-[10px] text-slate-600">© 2024 AI Content Repurposing System. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
