"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function EarthspanDashboard() {
  const [investment, setInvestment] = useState(10000);
  
  const assets = [
    { id: 1, name: "Renewable Energy Bond A1", yield: 6.2, maturity: "2029", rating: "AA", category: "Infrastructure" },
    { id: 2, name: "Global Infrastructure Fund", yield: 5.8, maturity: "2031", rating: "A+", category: "Sovereign" },
    { id: 3, name: "Emerging Markets Credit", yield: 7.1, maturity: "2027", rating: "BBB+", category: "Credit" },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-slate-900 font-sans selection:bg-green-100">
      <style jsx global>{`
        html { scroll-behavior: smooth; scroll-padding-top: 110px; }
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 8px !important; font-size: 12px !important; font-weight: 700 !important; text-transform: uppercase; letter-spacing: 0.1em; }
        .wallet-adapter-button-start-icon { display: none !important; }
      `}</style>

      {/* Institutional Header */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-4">
            <Image src="/logo2small.jpg" alt="Logo" width={40} height={40} className="rounded-lg" priority={true} />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter text-[#1a4d2e]">EARTHSPAN</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">Sovereign Engine</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {['Marketplace', 'Portfolio', 'Governance'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}-section`} className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#1a4d2e] transition-colors">{item}</a>
            ))}
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full border border-slate-200">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Mainnet-Beta</span>
            </div>
          </div>

          <WalletMultiButton />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8 lg:p-12">
        {/* Market Ticker Bar */}
        <div className="flex gap-12 overflow-hidden whitespace-nowrap mb-12 border-y border-slate-200 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-widest bg-white/50">
          <div className="flex gap-8 animate-marquee">
            <span>SOL/USD $142.42 <span className="text-emerald-500">▲ 2.4%</span></span>
            <span>USDC LIQUIDITY $42.8M <span className="text-slate-400">•</span></span>
            <span>AVG SOVEREIGN YIELD 6.42% <span className="text-emerald-500">▲ 0.1%</span></span>
            <span>TOTAL ASSETS TOKENIZED: 14 <span className="text-slate-400">•</span></span>
            <span>NETWORK STATUS: OPTIMAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Marketplace Content */}
          <div id="marketplace-section" className="lg:col-span-8">
            <div className="mb-8 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-black text-slate-800">Available Issuances</h2>
                <p className="text-sm text-slate-400 font-medium">Verified RWA (Real World Asset) Bond Series</p>
              </div>
              <div className="flex gap-2">
                {['All', 'Sovereign', 'Green'].map(f => (
                  <button key={f} className="px-4 py-1.5 text-[10px] font-bold uppercase border border-slate-200 rounded-md hover:bg-slate-50">{f}</button>
                ))}
              </div>
            </div>
            
            <div className="grid gap-3">
              {assets.map((asset) => (
                <div key={asset.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-[#1a4d2e]/30 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-[#1a4d2e] rounded flex items-center justify-center font-black text-sm">
                      {asset.rating}
                    </div>
                    <div>
                      <span className="text-[9px] font-black text-[#1a4d2e] uppercase tracking-widest">{asset.category}</span>
                      <h3 className="font-bold text-slate-800">{asset.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="text-right">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Annual Yield</p>
                      <p className="text-lg font-black text-[#1a4d2e]">{asset.yield}%</p>
                    </div>
                    <button className="bg-slate-900 text-white px-6 py-2 rounded font-bold text-[11px] uppercase tracking-wider hover:bg-[#1a4d2e] transition-colors">
                      Execute
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Portfolio Card */}
            <section id="portfolio-section" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Account Summary</h3>
              <div className="mb-8">
                <p className="text-4xl font-black text-slate-800">$0.00</p>
                <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">0.00% Portfolio Growth</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-[#1a4d2e] text-white py-3 rounded font-bold text-[11px] uppercase tracking-wider">Deposit</button>
                <button className="border border-slate-200 text-slate-600 py-3 rounded font-bold text-[11px] uppercase tracking-wider">Withdraw</button>
              </div>
            </section>

            {/* Yield Calculator Tool */}
            <section className="bg-[#1a4d2e] p-8 rounded-2xl text-white shadow-xl shadow-green-900/20">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-6">Yield Projector</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase block mb-2">Investment Amount (${investment.toLocaleString()})</label>
                  <input 
                    type="range" min="1000" max="100000" step="1000" 
                    value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[10px] font-bold uppercase opacity-60">Estimated 5-Year Return</p>
                  <p className="text-3xl font-black mt-1 text-emerald-400">${(investment * 1.34).toLocaleString()}</p>
                  <p className="text-[9px] mt-2 opacity-50 italic">*Based on average sovereign bond yields</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center opacity-40 grayscale">
          <div className="flex items-center gap-2">
            <Image src="/logo2small.jpg" alt="Logo" width={24} height={24} />
            <span className="text-[10px] font-black tracking-widest uppercase">Earthspan Protocol</span>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-widest">Regulatory Compliance Framework v2.0</p>
        </div>
      </footer>
    </div>
  );
}
