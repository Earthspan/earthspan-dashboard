"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export default function EarthspanDashboard() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [investment, setInvestment] = useState(25000);

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-slate-900 font-sans selection:bg-green-100">
      <style jsx global>{`
        html { scroll-behavior: smooth; scroll-padding-top: 110px; }
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 4px !important; font-size: 11px !important; font-weight: 800; text-transform: uppercase; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; animation: marquee 40s linear infinite; }
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
          <div className="hidden lg:flex gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-amber-50 rounded border border-amber-100">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-black text-amber-700 uppercase">FCA Sept Gateway Prep</span>
            </div>
            <WalletMultiButton />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <section id="marketplace">
              <h2 className="text-3xl font-black text-slate-800 mb-2">Sovereign Land Tranches</h2>
              <p className="text-slate-400 mb-8 font-medium">Underlying Asset: SPV-Held Agricultural & Recovery Titles</p>
              
              <div className="space-y-4">
                {[
                  { name: "Amazon Basin Tranche A1", yield: "6.2%", rating: "AA", area: "450 ha" },
                  { name: "Sub-Saharan Green Belt", yield: "7.4%", rating: "A-", area: "1,200 ha" }
                ].map((asset, i) => (
                  <div key={i} className="bg-white p-8 border border-slate-200 rounded-xl flex justify-between items-center group hover:border-[#1a4d2e] transition-all shadow-sm">
                    <div>
                      <span className="text-[10px] font-bold text-[#1a4d2e] uppercase tracking-widest bg-green-50 px-2 py-0.5 rounded">Verified Digital Twin</span>
                      <h3 className="font-bold text-slate-800 text-xl mt-2">{asset.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">Area: {asset.area} • GPS-Anchored • Token2022 Verified</p>
                    </div>
                    <button className="bg-[#1a4d2e] text-white px-8 py-3 rounded font-black text-xs uppercase tracking-widest hover:bg-black">Execute {asset.yield}</button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Institutional Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-6">Legal Data Room</h3>
              <div className="space-y-4">
                {['SPV Incorporation Docs', 'Land Title Registry (Hash)', 'Regulatory Roadmap'].map((doc) => (
                  <div key={doc} className="flex justify-between items-center text-xs border-b border-white/10 pb-3 cursor-pointer hover:text-emerald-400 transition-colors">
                    <span>{doc}</span>
                    <span className="text-[9px] opacity-40">PDF / VIEW</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-2xl">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Investment Projection</h3>
              <input type="range" min="5000" max="250000" step="5000" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full mb-6 accent-[#1a4d2e]" />
              <div className="flex justify-between">
                <div>
                  <p className="text-[10px] opacity-50 uppercase font-bold">Principal</p>
                  <p className="text-xl font-bold">${investment.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] opacity-50 uppercase font-bold text-[#1a4d2e]">Est. Sovereign Yield</p>
                  <p className="text-2xl font-black text-emerald-600 tracking-tighter">${(investment * 1.34).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
