import React, { useState } from 'react';
import { 
  Menu, 
  Gamepad2, 
  Users, 
  Download, 
  Search, 
  ArrowDownToLine, 
  Check, 
  X, 
  Flame
} from 'lucide-react';

// Bundle static image assets via Vite so they resolve reliably in both dev and production
import iconBaseball9 from './assets/images/icon_baseball9_1794315153853.jpg';
import iconHajimeIppo from './assets/images/ippo_game_hero_1794158473081.jpg';
import iconNoomiClone from './assets/images/icon_noomiclone_1794315765749.jpg';
import iconSpeedStars from './assets/images/icon_speedstars_1794315155724.jpg';
import iconTomodachi from './assets/images/icon_tomodachi_1794315765595.jpg';
import iconYandere from './assets/images/icon_yandere_1794315156538.jpg';

interface ModItem {
  id: string;
  name: string;
  category: string;
  downloads: string;
  size: string;
  version: string;
  image: string;
  fallbackImage: string;
  modBadge: string;
  isFeatured?: boolean;
  link?: string;
  features: string[];
}

const MOD_ITEMS: ModItem[] = [
  {
    id: 'baseball-9',
    name: 'Baseball 9',
    category: 'Sports',
    downloads: '4.5M+',
    size: '185 MB',
    version: 'v3.2.1',
    image: iconBaseball9,
    fallbackImage: '/images/icon_baseball9_1794315153853.jpg',
    modBadge: 'MOD',
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['Unlimited Gems & Coins', 'Max Stamina', 'Unlocked All Players']
  },
  {
    id: 'hajime-no-ippo',
    name: 'Hajime no Ippo Po...',
    category: 'Combat / Sports',
    downloads: '1.4M+',
    size: '600 MB',
    version: 'v2.4.0 HD',
    image: iconHajimeIppo,
    fallbackImage: '/images/ippo_game_hero_1794158473081.jpg',
    modBadge: 'MOD',
    isFeatured: true,
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['Unlimited Dempsey Roll Spirit', 'Unlocked All 48 Boxers', 'Full HD English Patch', '60 FPS Uncapped']
  },
  {
    id: 'noomiclone',
    name: 'NoomiClone',
    category: 'Simulation',
    downloads: '1.8M+',
    size: '95 MB',
    version: 'v1.0.8',
    image: iconNoomiClone,
    fallbackImage: '/images/icon_noomiclone_1794315765749.jpg',
    modBadge: 'MOD',
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['Unlocked Premium Levels', 'No Ads', 'Instant Respawn']
  },
  {
    id: 'speed-stars',
    name: 'Speed Stars',
    category: 'Arcade / Sports',
    downloads: '3.1M+',
    size: '120 MB',
    version: 'v2.1.0',
    image: iconSpeedStars,
    fallbackImage: '/images/icon_speedstars_1794315155724.jpg',
    modBadge: 'MOD',
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['Max Speed Multiplier', 'All Athletics Outfits Unlocked', 'Infinite Energy']
  },
  {
    id: 'tomodachi-life',
    name: 'Tomodachi Life',
    category: 'Casual / Life',
    downloads: '2.7M+',
    size: '450 MB',
    version: 'v1.5.2',
    image: iconTomodachi,
    fallbackImage: '/images/icon_tomodachi_1794315765595.jpg',
    modBadge: 'MOD',
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['Infinite Money & Gifts', 'Special Island Islands Pack', 'Custom Apartments']
  },
  {
    id: 'yandere-simulator',
    name: 'Yandere Simulator',
    category: 'Anime / Stealth',
    downloads: '2.5M+',
    size: '720 MB',
    version: 'v2024.10',
    image: iconYandere,
    fallbackImage: '/images/icon_yandere_1794315156538.jpg',
    modBadge: 'MOD',
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['Unlocked All Elimination Modes', 'Full Customization Wardrobe', 'Developer Menu Enabled']
  }
];

export default function App() {
  const [selectedMod, setSelectedMod] = useState<ModItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredMods = MOD_ITEMS.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0d0f18] text-neutral-100 flex flex-col font-sans select-none pb-12">
      
      {/* Tapggs Mobile Browser Top Bar */}
      <header className="sticky top-0 z-40 bg-[#121522] border-b border-[#1f2438] px-4 py-3 flex items-center justify-between shadow-md">
        
        {/* Left Hamburger Icon */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Center Gamepad Icon (The Tapggs Logo Brand) */}
        <div className="flex items-center gap-1.5 cursor-pointer">
          <Gamepad2 className="w-7 h-7 text-[#8b5cf6] filter drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
        </div>

        {/* Right Community / Users Icon */}
        <button className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer">
          <Users className="w-5 h-5" />
        </button>

      </header>

      {/* Main Content Area */}
      <main className="max-w-xl mx-auto w-full px-4 pt-5 flex-1">
        
        {/* Section Header: Featured MODs */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {/* Pink Accent Line from reference */}
            <div className="w-1.5 h-5 bg-[#d946ef] rounded-full" />
            <h1 className="text-lg font-bold text-white tracking-wide">
              Featured MODs
            </h1>
          </div>
          <span className="text-[11px] font-mono text-neutral-400">
            Updated Today
          </span>
        </div>

        {/* Search Input Bar */}
        <div className="mb-5 relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search MODs, games, apps..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#161a29] border border-[#262c45] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d946ef] transition-colors"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Tapggs 2-Column Card Grid (Faithful to Reference) */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
          {filteredMods.map((mod) => (
            <div 
              key={mod.id}
              onClick={() => setSelectedMod(mod)}
              className="bg-[#151928] hover:bg-[#1a2034] border border-[#232a42] rounded-2xl p-3 flex flex-col items-center text-center cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:border-[#3b4468] active:scale-[0.98] shadow-lg relative group"
            >
              {/* App Icon Container */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#1f2438] shadow-inner mb-3 flex items-center justify-center">
                <img 
                  src={mod.image} 
                  alt={mod.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== mod.fallbackImage) {
                      target.src = mod.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Gradient MOD Badge (Exact Pink/Purple gradient badge from screenshot) */}
                <div className="absolute bottom-1.5 inset-x-2 flex justify-center">
                  <span className="w-full py-0.5 px-2 bg-gradient-to-r from-[#d946ef] via-[#a855f7] to-[#ec4899] text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-md text-center">
                    {mod.modBadge}
                  </span>
                </div>
              </div>

              {/* Title (Single line with truncation, matching screenshot) */}
              <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate w-full mb-1">
                {mod.name}
              </h2>

              {/* Platform Icons (Android & Apple) + Download Counter */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 font-mono w-full mt-1">
                
                {/* Android Icon (SVG) */}
                <svg className="w-3.5 h-3.5 fill-current text-neutral-400 shrink-0" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0002s.4482-1.0002.9993-1.0002c.5511 0 .9993.4486.9993 1.0002s-.4482 1.0002-.9993 1.0002m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0002s.4482-1.0002.9993-1.0002c.5511 0 .9993.4486.9993 1.0002s-.4482 1.0002-.9993 1.0002m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.589 8.3582 13.844 8 12 8s-3.589.3582-5.1378.9507L4.8399 5.4477a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 10.7964 0 14.1513 0 18h24c0-3.8487-2.6889-7.2036-6.1185-8.6786"/>
                </svg>

                {/* Apple Icon (SVG) */}
                <svg className="w-3.5 h-3.5 fill-current text-neutral-400 shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.87.94-2.97-1 .04-2.13.68-2.78 1.46-.57.67-.99 1.77-.85 2.84 1.12.09 2.06-.55 2.69-1.33z"/>
                </svg>

                {/* Vertical Divider */}
                <span className="text-[#d946ef] font-bold">|</span>

                {/* Download Cloud Icon & Count */}
                <span className="flex items-center gap-0.5 text-neutral-300">
                  <ArrowDownToLine className="w-3 h-3 text-neutral-400" />
                  {mod.downloads}
                </span>

              </div>

            </div>
          ))}
        </div>

      </main>

      {/* Interactive Detail Modal / Install Prompt when clicking any card */}
      {selectedMod && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          
          <div className="bg-[#151928] border-t sm:border border-[#232a42] rounded-t-3xl sm:rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMod(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-full bg-[#1c2236] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header with Icon */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-[#1f2438] shrink-0 border border-[#2a3250]">
                <img 
                  src={selectedMod.image} 
                  alt={selectedMod.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== selectedMod.fallbackImage) {
                      target.src = selectedMod.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#d946ef] to-[#a855f7] text-white mb-1">
                  Verified MOD
                </span>
                <h3 className="text-base font-bold text-white leading-tight">
                  {selectedMod.name}
                </h3>
                <div className="text-xs text-neutral-400 font-mono mt-0.5">
                  Size: {selectedMod.size} · {selectedMod.version}
                </div>
              </div>
            </div>

            {/* Mod Features Pill List */}
            <div className="bg-[#111422] rounded-xl p-3.5 mb-5 border border-[#1e243a]">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#d946ef]" /> MOD Features Included
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {selectedMod.features.map((feat, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Big Action Download Now Button directing to URL */}
            <a
              href={selectedMod.link || "https://apptrck.net/cl/i/82lj8k"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#d946ef] via-[#a855f7] to-[#8b5cf6] hover:opacity-95 shadow-[0_4px_20px_rgba(217,70,239,0.35)] flex items-center justify-center gap-2 cursor-pointer text-center transition-all"
            >
              <Download className="w-4 h-4" />
              Download MOD ({selectedMod.size})
            </a>

            <div className="mt-3 text-center text-[10px] text-neutral-500 font-mono">
              Safe & Scan Verified · Instant Mirror
            </div>

          </div>

        </div>
      )}

      {/* Simple Footer */}
      <footer className="mt-8 text-center text-xs text-neutral-500 font-mono">
        tapggs.com &copy; 2026. All rights reserved.
      </footer>

    </div>
  );
}
