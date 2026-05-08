"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function EarthspanDashboard() {
  const [investment, setInvestment] = useState(25000);
  const [tab, setTab] = useState('primary');
  
  const assets = [
    { id: 1, name: "Renewable Energy Bond A1", yield: 6.2, maturity: "2029", rating: "AA", vol: "$1.2M" },
    { id: 2, name: "Global Infrastructure Fund", yield: 5.8, maturity: "2031", rating: "A+", vol: "$850K" },
    { id: 3, name: "Emerging Markets Credit", yield: 7.1, maturity: "2027", rating: "BBB+", vol: "$2.4M" },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-slate-900 font-sans selection:bg-green-100">
      <style jsx global>{`
        html { scroll-behavior: smooth; scroll-padding-top: 110px; }
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 4px !important; font-size: 11px !important; height: 36px !important; text-transform: uppercase; font-weight: 800; letter-spacing: 0.05em; }
        .wallet-adapter-button-start-icon { display: none !important; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; animation: marquee 30s linear infinite; }
      `}</style>

      {/* Institutional Nav */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
          <div className="flex items-center gap-4">
            <Image src="/logo2small.jpg" alt="Logo" width={38} height={38} className="rounded" priority />
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-[#1a4d2e]">EARTHSPAN.IO</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.4em]">Sovereign Engine</span>
            </div>
          </div>
          <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#marketplace" className="hover:text-[#1a4d2e]">Marketplace</a>
            <a href="#portfolio" className="hover:text-[#1a4d2e]">Portfolio</a>
            <a href="#settlements" className="hover:text-[#1a4d2e]">Live Feed</a>
          </div>
          <WalletMultiButton />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8 lg:p-12">
        {/* Market Ticker */}
        <div className="bg-slate-900 text-white/50 py-2 px-8 rounded-lg mb-12 overflow-hidden text-[10px] font-bold tracking-widest uppercase flex">
          <div className="animate-marquee whitespace-nowrap gap-12">
            <span className="text-white">SOL/USD $146.12 <span className="text-emerald-400">▲ 1.2%</span></span>
            <span>TVL: $42,802,194.00</span>
            <span className="text-white">YIELD INDEX: 6.42% <span className="text-emerald-400">▲ 0.04%</span></span>
            <span>SETTLEMENT NODES: 1,204 ONLINE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div id="marketplace" className="lg:col-span-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <div className="flex gap-4 mb-2">
                  <button onClick={() => setTab('primary')} className={`text-[10px] font-black uppercase tracking-widest pb-1 border-b-2 transition-all ${tab === 'primary' ? 'border-[#1a4d2e] text-[#1a4d2e]' : 'border-transparent text-slate-300'}`}>Primary Market</button>
                  <button onClick={() => setTab('secondary')} className={`text-[10px] font-black uppercase tracking-widest pb-1 border-b-2 transition-all ${tab === 'secondary' ? 'border-[#1a4d2e] text-[#1a4d2e]' : 'border-transparent text-slate-300'}`}>Secondary (Live)</button>
                </div>
                <h2 className="text-2xl font-black text-slate-800">Sovereign Debt Marketplace</h2>
              </div>
            </div>

            <div className="space-y-3">
              {assets.map((asset) => (
                <div key={asset.id} className="bg-white p-6 border border-slate-200 rounded flex justify-between items-center hover:shadow-md transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="text-[10px] font-black text-slate-300 rotate-90">{asset.rating}</div>
                    <div>
                      <h3 className="font-bold text-slate-800 tracking-tight">{asset.name}</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Volume: {asset.vol} • Maturity: {asset.maturity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Yield</p>
                      <p className="text-xl font-black text-[#1a4d2e]">{asset.yield}%</p>
                    </div>
                    <button className="bg-[#1a4d2e] text-white px-6 py-2 rounded font-bold text-[11px] uppercase tracking-widest hover:bg-black transition-all">Execute</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div id="portfolio" className="bg-white border border-slate-200 p-8 rounded shadow-sm">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Custodial Account</h3>
              <p className="text-4xl font-black text-slate-800">$0.00</p>
              <div className="mt-8 flex gap-2">
                <button className="flex-1 bg-slate-100 py-3 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200">Deposit</button>
                <button className="flex-1 border border-slate-100 py-3 rounded text-[10px] font-bold uppercase tracking-widest">Withdraw</button>
              </div>
            </div>

            <div className="bg-[#1a4d2e] p-8 rounded text-white">
              <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-6">Yield Projector</h3>
              <input type="range" min="1000" max="100000" step="5000" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white mb-4" />
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[9px] font-bold uppercase opacity-50">Principal</p>
                  <p className="text-lg font-bold">${investment.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-bold uppercase opacity-50">Est. 5Y Return</p>
                  <p className="text-2xl font-black text-emerald-400">${(investment * 1.34).toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div id="settlements" className="p-6 bg-slate-50 border border-slate-200 rounded">
               <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Live Settlement Feed</h3>
               <div className="space-y-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="flex justify-between text-[10px] font-medium border-b border-slate-100 pb-2">
                     <span className="text-slate-400">Yield Dist: #482...{i}92</span>
                     <span className="text-[#1a4d2e] font-bold">+$124.02</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
