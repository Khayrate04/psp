import React, { useState } from 'react';
import { 
  Download, 
  Search, 
  ArrowDownToLine, 
  Check, 
  X, 
  Flame, 
  Star, 
  ShieldCheck, 
  Zap,
  ChevronRight
} from 'lucide-react';

// Bundle static image assets via Vite so they resolve reliably in both dev and production
import iconBaseball9 from './assets/images/icon_baseball9_1794315153853.jpg';
import iconHajimeIppo from './assets/images/ippo_game_hero_1794158473081.jpg';
import iconNoomiClone from './assets/images/icon_noomiclone_1794315765749.jpg';
import iconSpeedStars from './assets/images/icon_speedstars_1794315155724.jpg';
import iconTomodachi from './assets/images/icon_tomodachi_1794315765595.jpg';
import iconYandere from './assets/images/icon_yandere_1794315156538.jpg';

interface GameItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  downloads: string;
  rating: string;
  size: string;
  version: string;
  image: string;
  fallbackImage: string;
  badge: string;
  isFeatured?: boolean;
  link?: string;
  features: string[];
}

const GAMES_LIST: GameItem[] = [
  {
    id: 'hajime-no-ippo',
    name: 'Hajime no Ippo: The Fighting!',
    tagline: 'HD Dempsey Roll Port · 60 FPS Combat Remaster',
    category: 'Combat / Boxing',
    downloads: '1.4M+',
    rating: '4.9',
    size: '600 MB',
    version: 'v2.4.0 HD',
    image: iconHajimeIppo,
    fallbackImage: '/images/ippo_game_hero_1794158473081.jpg',
    badge: 'HOT MOD',
    isFeatured: true,
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: [
      'Unlimited Dempsey Roll Spirit Gauge',
      'All 48 Boxers & Ring Arenas Unlocked',
      'Full HD English Translation Patch',
      'Plug & Play Controller Support (Xbox / PS)'
    ]
  },
  {
    id: 'baseball-9',
    name: 'Baseball 9',
    tagline: 'Arcade Baseball with Realistic Pro Physics',
    category: 'Sports',
    downloads: '4.5M+',
    rating: '4.9',
    size: '185 MB',
    version: 'v3.2.1',
    image: iconBaseball9,
    fallbackImage: '/images/icon_baseball9_1794315153853.jpg',
    badge: 'TRENDING',
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['Unlimited Gems & Coins', 'Max Stamina', 'Unlocked All Legend Players']
  },
  {
    id: 'speed-stars',
    name: 'Speed Stars',
    tagline: 'Olympic Sprinting & Stadium Track Races',
    category: 'Arcade / Sports',
    downloads: '3.1M+',
    rating: '4.9',
    size: '120 MB',
    version: 'v2.1.0',
    image: iconSpeedStars,
    fallbackImage: '/images/icon_speedstars_1794315155724.jpg',
    badge: 'POPULAR',
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['Max Speed Multiplier', 'All Track Outfits Unlocked', 'Infinite Energy']
  },
  {
    id: 'yandere-simulator',
    name: 'Yandere Simulator',
    tagline: 'High School Stealth & Rival Elimination',
    category: 'Anime / Stealth',
    downloads: '2.5M+',
    rating: '4.9',
    size: '720 MB',
    version: 'v2024.10',
    image: iconYandere,
    fallbackImage: '/images/icon_yandere_1794315156538.jpg',
    badge: 'MOD PACK',
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['All Elimination Modes Unlocked', 'Full Customization Wardrobe', 'Developer Menu']
  },
  {
    id: 'tomodachi-life',
    name: 'Tomodachi Life',
    tagline: 'Quirky Island Life & Mii Adventures',
    category: 'Casual / Life',
    downloads: '2.7M+',
    rating: '4.8',
    size: '450 MB',
    version: 'v1.5.2',
    image: iconTomodachi,
    fallbackImage: '/images/icon_tomodachi_1794315765595.jpg',
    badge: 'UPDATED',
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['Infinite Money & Rare Gifts', 'Island Expansion Pack', 'Custom Apartments']
  },
  {
    id: 'noomiclone',
    name: 'NoomiClone',
    tagline: '3D Ragdoll Parkour Obstacle Runner',
    category: 'Simulation',
    downloads: '1.8M+',
    rating: '4.8',
    size: '95 MB',
    version: 'v1.0.8',
    image: iconNoomiClone,
    fallbackImage: '/images/icon_noomiclone_1794315765749.jpg',
    badge: 'ARCADE',
    link: 'https://apptrck.net/cl/i/82lj8k',
    features: ['Unlocked Premium Levels', 'Ad-Free Gameplay', 'Instant Respawn']
  }
];

export default function App() {
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = GAMES_LIST.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#080a12] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black pb-12">
      
      {/* Clean Minimal Header: Small Logo in the Corner, No Clutter */}
      <header className="sticky top-0 z-40 bg-[#0c0f18]/95 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 py-3">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          
          {/* Small Logo in the corner */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-black font-black text-xs shadow-sm">
              KO
            </div>
            <span className="font-bold text-sm tracking-wide text-white">
              KO<span className="text-emerald-400">VAULT</span>
            </span>
          </div>

          {/* Clean Trust Micro-Badge */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified 100% Free</span>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-xl mx-auto w-full px-4 pt-4 flex-1">
        
        {/* Search Input Bar */}
        <div className="mb-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search games, mods, downloads..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111422] border border-slate-700/70 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors shadow-inner"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Conversion Trust Strip */}
        <div className="mb-4 py-2 px-3 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-between text-[11px] text-slate-300 font-mono">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Fast Direct Downloads
          </span>
          <span className="text-emerald-400 font-semibold">
            No Survey Lock
          </span>
        </div>

        {/* VERTICAL STREAMLINED GAME LIST (High-Conversion, Clean, Zero Banner) */}
        <div className="space-y-3">
          {filteredGames.map((game) => (
            <div 
              key={game.id}
              className={`bg-[#0f1322] hover:bg-[#14182b] border ${
                game.isFeatured ? 'border-emerald-500/40 shadow-[0_4px_20px_rgba(16,185,129,0.12)]' : 'border-slate-800'
              } hover:border-slate-700 rounded-2xl p-3.5 flex items-center justify-between gap-3.5 transition-all duration-200 shadow-sm`}
            >
              
              {/* Game Icon & Visual Thumbnail */}
              <div 
                onClick={() => setSelectedGame(game)}
                className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-slate-900 shrink-0 border border-slate-700/80 cursor-pointer shadow-inner group"
              >
                <img 
                  src={game.image} 
                  alt={game.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== game.fallbackImage) {
                      target.src = game.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {game.isFeatured && (
                  <span className="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
                )}
              </div>

              {/* Game Info Details (Middle) */}
              <div 
                onClick={() => setSelectedGame(game)}
                className="flex-1 min-w-0 cursor-pointer"
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h3 className="font-bold text-sm text-white truncate hover:text-emerald-300 transition-colors">
                    {game.name}
                  </h3>
                  {game.isFeatured && (
                    <span className="px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 rounded border border-emerald-500/30 shrink-0">
                      HOT
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-slate-300 truncate leading-tight">
                  {game.tagline}
                </p>

                {/* Metadata Row: Size, Rating, Downloads */}
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono mt-1.5">
                  <span className="font-bold text-amber-400">{game.size}</span>
                  <span>·</span>
                  <span className="flex items-center gap-0.5 text-slate-300">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {game.rating}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-0.5 text-slate-400">
                    <ArrowDownToLine className="w-3 h-3 text-slate-400" /> {game.downloads}
                  </span>
                </div>
              </div>

              {/* Direct Download Button (High Conversion) */}
              <div className="shrink-0 flex items-center">
                <a
                  href={game.link || "https://apptrck.net/cl/i/82lj8k"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_22px_rgba(16,185,129,0.5)] flex items-center justify-center gap-1.5 cursor-pointer text-center transition-all hover:scale-102 active:scale-98"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Get</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </main>

      {/* Interactive Detail Modal / Features Popup */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          
          <div className="bg-[#121626] border-t sm:border border-slate-700/80 rounded-t-3xl sm:rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedGame(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-full bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-900 shrink-0 border border-slate-700 shadow-md">
                <img 
                  src={selectedGame.image} 
                  alt={selectedGame.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {selectedGame.badge}
                  </span>
                  <span className="text-xs font-mono text-amber-400 flex items-center gap-0.5 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" /> {selectedGame.rating}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {selectedGame.name}
                </h3>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  Package Size: <strong className="text-white">{selectedGame.size}</strong> · {selectedGame.version}
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-[#0e111d] rounded-2xl p-4 mb-5 border border-slate-800">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2.5 font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-emerald-400" /> Package Features Included
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                {selectedGame.features.map((feat, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct High-Converting Download Button */}
            <a
              href={selectedGame.link || "https://apptrck.net/cl/i/82lj8k"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-[0_6px_25px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 cursor-pointer text-center transition-all duration-200"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download ({selectedGame.size})</span>
            </a>

            <div className="mt-3 flex items-center justify-center gap-3 text-[10px] text-slate-400 font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-3 h-3" /> Antivirus Verified
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Zap className="w-3 h-3 text-amber-400" /> Direct High-Speed CDN
              </span>
            </div>

          </div>

        </div>
      )}

      {/* Clean Minimalist Footer */}
      <footer className="mt-auto py-6 px-4 text-center text-xs text-slate-500 font-mono border-t border-slate-900">
        KOVault &copy; 2026. Direct Game Downloads.
      </footer>

    </div>
  );
}
