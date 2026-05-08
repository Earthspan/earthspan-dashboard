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
  const [prices, setPrices] = useState({ sol: 0, eur: 0.93, gbp: 0.79, jpy: 155.20 });
  const [investment, setInvestment] = useState(25000);

  // Fetch Real Solana Balance
  useEffect(() => {
    if (!publicKey) {
      setBalance(null);
      return;
    }
    const updateBalance = async () => {
      const info = await connection.getAccountInfo(publicKey);
      if (info) setBalance(info.lamports / LAMPORTS_PER_SOL);
    };
    updateBalance();
    const id = connection.onAccountChange(publicKey, (info) => setBalance(info.lamports / LAMPORTS_PER_SOL));
    return () => { connection.removeAccountChangeListener(id); };
  }, [publicKey, connection]);

  // Simulated Price Feed for Major Pairs
  useEffect(() => {
    const fetchPrices = () => {
      setPrices({
        sol: 145 + Math.random() * 5,
        eur: 0.92 + Math.random() * 0.02,
        gbp: 0.78 + Math.random() * 0.02,
        jpy: 155 + Math.random() * 0.5
      });
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-slate-900 font-sans selection:bg-green-100">
      <style jsx global>{`
        html { scroll-behavior: smooth; scroll-padding-top: 110px; }
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 4px !important; font-size: 11px !important; font-weight: 800; text-transform: uppercase; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; animation: marquee 40s linear infinite; }
      `}</style>

      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
          <div className="flex items-center gap-4">
            <Image src="/logo2small.jpg" alt="Logo" width={38} height={38} className="rounded" priority />
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-[#1a4d2e]">EARTHSPAN.IO</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.4em]">Sovereign Engine</span>
            </div>
          </div>
          <WalletMultiButton />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        {/* Global Currency & Assets Ticker */}
        <div className="bg-slate-900 text-white/70 py-2.5 px-6 rounded-md mb-12 overflow-hidden text-[10px] font-bold tracking-[0.15em] uppercase flex border-b border-emerald-500/30 shadow-lg">
          <div className="animate-marquee whitespace-nowrap gap-16">
            <span className="text-emerald-400">SOL/USD ${prices.sol.toFixed(2)}</span>
            <span>USD/EUR {prices.eur.toFixed(4)}</span>
            <span>USD/GBP {prices.gbp.toFixed(4)}</span>
            <span>USD/JPY {prices.jpy.toFixed(2)}</span>
            <span className="text-emerald-400">ENGINE STATUS: OPTIMAL</span>
            <span>NETWORK: SOLANA MAINNET</span>
            <span className="text-emerald-400">SOL/USD ${prices.sol.toFixed(2)}</span>
            <span>USD/EUR {prices.eur.toFixed(4)}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Marketplace */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-black text-slate-800 mb-8">Sovereign Marketplace</h2>
            <div className="space-y-3">
              {[
                { name: "Global Infrastructure Bond", yield: "6.2%", rating: "AA" },
                { name: "Renewable Energy Series B", yield: "5.8%", rating: "A+" },
                { name: "Treasury Yield Strategy", yield: "7.1%", rating: "BBB+" }
              ].map((asset, i) => (
                <div key={i} className="bg-white p-6 border border-slate-200 rounded flex justify-between items-center group hover:border-[#1a4d2e] transition-all">
                  <div className="flex items-center gap-6">
                    <div className="text-[10px] font-black text-slate-300 rotate-90 tracking-tighter">{asset.rating}</div>
                    <h3 className="font-bold text-slate-800">{asset.name}</h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Annual Yield</p>
                      <p className="text-xl font-black text-[#1a4d2e]">{asset.yield}</p>
                    </div>
                    <button className="bg-[#1a4d2e] text-white px-6 py-2 rounded font-bold text-[11px] uppercase tracking-widest hover:bg-black">Execute</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border-t-4 border-[#1a4d2e] p-8 rounded shadow-sm">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">On-Chain Portfolio</h3>
              <p className="text-4xl font-black text-slate-800">
                {balance !== null ? `${balance.toFixed(2)} SOL` : "$0.00"}
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">
                {balance !== null ? `≈ $${(balance * prices.sol).toLocaleString()}` : "No Wallet Connected"}
              </p>
            </div>

            <div className="bg-[#1a4d2e] p-8 rounded text-white shadow-xl">
              <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-6">Yield Projector</h3>
              <input type="range" min="1000" max="100000" step="5000" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer mb-6" />
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[9px] font-bold uppercase opacity-50">Invested</p>
                  <p className="text-lg font-bold">${investment.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-bold uppercase opacity-50">Est. 5Y Return</p>
                  <p className="text-2xl font-black text-emerald-400">${(investment * 1.34).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
