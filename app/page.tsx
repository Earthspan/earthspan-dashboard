"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function EarthspanDashboard() {
  const [investment, setInvestment] = useState(25000);

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-slate-900 font-sans selection:bg-green-100 flex flex-col">
      <style jsx global>{`
        html { scroll-behavior: smooth; scroll-padding-top: 110px; }
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 4px !important; font-size: 11px !important; font-weight: 800; text-transform: uppercase; }
        .animate-marquee { display: flex; animation: marquee 40s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>

      {/* Nav */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
          <div className="flex items-center gap-4">
            <Image src="/logo2small.jpg" alt="Logo" width={38} height={38} className="rounded" priority />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-[#1a4d2e] leading-none uppercase">EARTHSPAN</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.4em] mt-1">Sovereign Engine</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-amber-50 rounded border border-amber-100 shadow-sm">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-black text-amber-700 uppercase tracking-wider">FCA Sept Gateway Prep</span>
            </div>
            <WalletMultiButton />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto p-8 lg:p-12 w-full">
        {/* Ticker */}
        <div className="bg-slate-900 text-white/70 py-2 px-6 rounded-lg mb-12 overflow-hidden text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl">
          <div className="animate-marquee whitespace-nowrap gap-16 flex">
            <span className="text-emerald-400">USD/EUR 0.9242</span>
            <span>TVL: $42,802,194</span>
            <span className="text-emerald-400">USD/GBP 0.7891</span>
            <span>REGULATORY STATUS: READY</span>
            <span>SOL/USD $146.12</span>
            <span className="text-emerald-400">USD/EUR 0.9242</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="border-l-4 border-[#1a4d2e] pl-6 mb-10">
              <h2 className="text-3xl font-black text-slate-800 tracking-tight">Active Land Tranches</h2>
              <p className="text-slate-400 font-medium">Digital Twin Assets • FCA/SEC Compliant Infrastructure</p>
            </div>
            
            <div className="grid gap-4">
              {[
                { name: "Tranche 01: Amazon Highlands", yield: "6.2%", rating: "AA" },
                { name: "Tranche 02: Saharan Green Belt", yield: "7.4%", rating: "A-" }
              ].map((asset, i) => (
                <div key={i} className="bg-white p-8 border border-slate-200 rounded-2xl flex justify-between items-center hover:border-green-100 transition-all shadow-sm">
                  <div>
                    <span className="text-[9px] font-black text-[#1a4d2e] uppercase tracking-widest bg-green-50 px-2 py-1 rounded">Verified Asset</span>
                    <h3 className="font-bold text-slate-800 text-xl mt-3">{asset.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">GPS-Anchored • Token2022 Secured</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Yield</p>
                      <p className="text-2xl font-black text-emerald-600">{asset.yield}</p>
                    </div>
                    <button className="bg-[#1a4d2e] text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all">Execute</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl">
              <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8">Legal Data Room</h3>
              <div className="space-y-5">
                {['SPV Incorporation', 'UK FCA Roadmap', 'Land Title Hash'].map(doc => (
                  <div key={doc} className="flex justify-between items-center text-xs group cursor-pointer border-b border-white/5 pb-4">
                    <span className="opacity-80 group-hover:opacity-100 group-hover:text-emerald-400 transition-all font-medium">{doc}</span>
                    <span className="text-[9px] bg-white/10 px-2 py-1 rounded italic">SECURE</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* RESTORED FOOTER */}
      <footer className="mt-20 py-16 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 grayscale opacity-40">
            <Image src="/logo2small.jpg" alt="Logo" width={30} height={30} />
            <span className="text-sm font-black tracking-tighter text-[#1a4d2e]">EARTHSPAN</span>
          </div>
          <p className="text-slate-300 text-[10px] tracking-[0.5em] uppercase font-black">Institutional Grade Protocol • 2026</p>
        </div>
      </footer>
    </div>
  );
}
