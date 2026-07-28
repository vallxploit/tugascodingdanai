import React, { memo } from 'react';
import { Calculator } from 'lucide-react';

const Header = memo(() => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Calculator className="w-4 h-4 text-blue-400" />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight">Kalkulator<span className="text-blue-400">Logis</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#konsep" className="text-slate-400 hover:text-white transition-colors focus-ring">Konsep</a>
          <a href="#simbol" className="text-slate-400 hover:text-white transition-colors focus-ring">Simbol</a>
          <a href="#flowchart" className="text-slate-400 hover:text-white transition-colors focus-ring">Flowchart</a>
          <a href="#demo" className="text-slate-400 hover:text-white transition-colors focus-ring">Demo Interaktif</a>
        </nav>
      </div>
    </header>
  );
});

export default Header;