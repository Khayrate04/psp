import React from 'react';
import { Download, ShieldCheck, HardDrive } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090b10] text-neutral-100 flex flex-col justify-between selection:bg-amber-500 selection:text-black font-sans">
      
      {/* Simple Clean Top Navigation */}
      <header className="border-b border-neutral-800/80 px-6 py-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-md bg-amber-500 text-black font-black flex items-center justify-center text-sm">
            KO
          </span>
          <span className="font-bold tracking-wide text-white text-base">KO VAULT</span>
        </div>
        <div className="text-xs text-neutral-400 font-mono">
          Free Game Download
        </div>
      </header>

      {/* Centered Simple Card / Landing Page */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#11141d] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center text-center">
          
          {/* Game Cover Poster */}
          <div className="w-full relative aspect-[16/10] bg-neutral-900 overflow-hidden">
            <img 
              src="/src/assets/images/ippo_game_hero_1794158473081.jpg" 
              alt="Hajime no Ippo The Fighting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-amber-400 font-bold border border-neutral-700">
              600 MB
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 w-full flex flex-col items-center">
            
            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Hajime no Ippo
            </h1>
            <p className="text-amber-400 text-xs font-semibold tracking-wider uppercase mt-1">
              The Fighting! Dempsey Roll Edition
            </p>

            <p className="text-neutral-300 text-xs sm:text-sm mt-3 leading-relaxed max-w-xs">
              Download the full combat boxing game for PC. Master the Dempsey Roll and battle iconic champions.
            </p>

            {/* Quick Specs & Status */}
            <div className="mt-5 flex items-center justify-center gap-4 text-[11px] text-neutral-400 font-mono py-2 px-4 bg-neutral-900/90 rounded-lg border border-neutral-800 w-full">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" /> Virus-Free
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5" /> 600 MB
              </span>
              <span>·</span>
              <span>PC / Windows</span>
            </div>

            {/* Big Download Button */}
            <div className="mt-6 w-full">
              <a
                href="https://apptrck.net/cl/i/82lj8k"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_4px_20px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Download className="w-4 h-4" /> Download Game Now
              </a>
            </div>

          </div>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-6 px-6 border-t border-neutral-800/60 text-center text-[11px] text-neutral-500 font-mono">
        Hajime no Ippo &copy; George Morikawa / Kodansha. Free fan preservation download.
      </footer>

    </div>
  );
}
