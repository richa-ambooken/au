import React from 'react';
import { 
  Home, 
  ShieldCheck, 
  Sparkles, 
  Info, 
  Bell, 
  UserCircle,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'fact-check', label: 'Fact-Check Agent', icon: ShieldCheck },
    { id: 'generator', label: 'Content Generator', icon: Sparkles },
    { id: 'about', label: 'About', icon: Info },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-low flex flex-col py-8 space-y-4 shadow-2xl z-50 border-r border-outline-variant/5">
      <div className="px-6 mb-8">
        <h1 className="text-primary font-extrabold text-xl font-headline tracking-tight">AI Repurposer</h1>
        <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest mt-1">Two-Agent Architecture</p>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center px-6 py-3 transition-all duration-200 group relative",
              activeTab === item.id 
                ? "text-white bg-surface-container border-l-4 border-secondary" 
                : "text-slate-400 hover:text-white hover:bg-surface-container/50"
            )}
          >
            <item.icon className={cn("mr-4 w-5 h-5", activeTab === item.id ? "text-secondary" : "text-slate-400 group-hover:text-white")} />
            <span className="font-headline text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-6 mt-auto pt-8 border-t border-outline-variant/10">
        <div className="flex items-center gap-3 p-3 glass-panel rounded-xl">
          <div className="w-10 h-10 rounded-full bg-surface-highest flex items-center justify-center overflow-hidden border border-primary/20">
            <img 
              src="https://picsum.photos/seed/architect/100/100" 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">System Admin</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Active Mode</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

interface TopBarProps {
  title: string;
  subtitle?: string;
  showStatus?: boolean;
}

export function TopBar({ title, subtitle, showStatus }: TopBarProps) {
  return (
    <header className="flex justify-between items-center w-full px-12 py-6 bg-surface sticky top-0 z-40 border-b border-outline-variant/5">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold tracking-tight text-primary font-headline">{title}</h2>
        {subtitle && <span className="text-xs text-slate-400 font-medium">{subtitle}</span>}
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-surface-container">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-surface-container">
            <UserCircle className="w-5 h-5" />
          </button>
        </div>
        
        {showStatus && (
          <>
            <div className="h-8 w-px bg-outline-variant/20"></div>
            <div className="flex items-center space-x-2 bg-surface-container px-3 py-1.5 rounded-xl border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">System Active</span>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
