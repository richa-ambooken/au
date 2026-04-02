import React, { useState } from 'react';
import { Sidebar, TopBar } from './components/Layout';
import { LandingPage } from './components/LandingPage';
import { ContentGenerator } from './components/ContentGenerator';
import { FactCheckAgent } from './components/FactCheckAgent';
import { Architecture } from './components/Architecture';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
      case 'landing':
        return <LandingPage onStart={() => setActiveTab('generator')} />;
      case 'fact-check':
        return (
          <div className="ml-64 min-h-screen">
            <TopBar 
              title="Fact-Check Agent" 
              subtitle="The 'Analytical Brain' Component" 
              showStatus 
            />
            <FactCheckAgent />
          </div>
        );
      case 'generator':
        return (
          <div className="ml-64 min-h-screen">
            <TopBar 
              title="Content Generator" 
              subtitle="Two-Agent Architecture" 
              showStatus 
            />
            <main className="p-8">
              <ContentGenerator />
            </main>
          </div>
        );
      case 'about':
        return (
          <div className="ml-64 min-h-screen">
            <TopBar 
              title="Architecture & Methodology" 
              subtitle="Precision Engineering" 
            />
            <Architecture />
          </div>
        );
      default:
        return <LandingPage onStart={() => setActiveTab('generator')} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      {activeTab !== 'landing' && (
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
