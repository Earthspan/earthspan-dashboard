"use client";
import Image from 'next/image';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function EarthspanDashboard() {
  const assets = [
    { id: 1, name: "Renewable Energy Bond A1", yield: "6.2%", maturity: "2029", rating: "AA" },
    { id: 2, name: "Global Infrastructure Fund", yield: "5.8%", maturity: "2031", rating: "A+" },
    { id: 3, name: "Emerging Markets Credit", yield: "7.1%", maturity: "2027", rating: "BBB+" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfc] text-slate-900 font-sans scroll-smooth">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 9999px !important; }
        .wallet-adapter-button-start-icon { display: none !important; }
        .wallet-adapter-modal-list { display: flex !important; flex-direction: column !important; gap: 12px !important; }
      `}</style>

      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 p-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image src="/logo2small.jpg" alt="Logo" width={140} height={40} priority={true} />
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-400">
            <a href="#marketplace" className="hover:text-[#1a4d2e] transition-colors">Marketplace</a>
            <a href="#portfolio" className="hover:text-[#1a4d2e] transition-colors">Portfolio</a>
            <a href="#governance" className="hover:text-[#1a4d2e] transition-colors">Governance</a>
          </div>
          <WalletMultiButton />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Protocol TVL", value: "$42.8M" },
            { label: "Active Nodes", value: "1,204" },
            { label: "Sovereign Yield", value: "6.4%" },
            { label: "Live Assets", value: "14" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-green-100 transition-colors">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-[#1a4d2e]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Marketplace Section */}
          <div id="marketplace" className="lg:col-span-2 space-y-8 scroll-mt-28">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Primary Marketplace</h2>
                <p className="text-slate-400 text-sm font-medium">Verified Institutional Bond Issuances</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {assets.map((asset) => (
                <div key={asset.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#1a4d2e] font-black text-xl">
                      {asset.rating}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">{asset.name}</h3>
                      <p className="text-sm text-slate-400 font-medium italic">Term: {asset.maturity}</p>
                    </div>
                  </div>
                  <div className="flex gap-10 items-center">
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Yield</p>
                      <p className="text-2xl font-black text-emerald-600">{asset.yield}</p>
                    </div>
                    <button className="bg-[#1a4d2e] text-white px-8 py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-green-900/20 transition-all">
                      Invest
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio & Governance Column */}
          <div className="space-y-12">
            <div id="portfolio" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Your Portfolio</h2>
              <div className="bg-[#1a4d2e] p-10 rounded-[2.5rem] text-white shadow-2xl shadow-green-900/20">
                <p className="text-xs opacity-70 font-bold uppercase tracking-widest">Available Capital</p>
                <p className="text-5xl font-black mt-2 tracking-tight">$0.00</p>
                <div className="mt-10 space-y-3">
                  <button className="w-full bg-white text-[#1a4d2e] py-3 rounded-xl font-bold hover:bg-green-50 transition-colors">Deposit USDC</button>
                  <button className="w-full bg-white/10 border border-white/20 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors">Withdraw</button>
                </div>
              </div>
            </div>

            <div id="governance" className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm scroll-mt-28">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Governance</h2>
              <p className="text-sm text-slate-400 mb-6">Sovereign Voting Power: <span className="font-bold text-[#1a4d2e]">0 ESPAN</span></p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-500 mb-1 uppercase">Active Proposal</p>
                <p className="text-sm font-bold text-slate-700">ESP-004: Infrastructure Expansion</p>
                <div className="mt-3 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#1a4d2e] h-full w-[65%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-12 border-t border-slate-100 text-center">
        <p className="text-slate-300 text-[10px] tracking-[0.5em] uppercase font-bold">Earthspan Protocol • Institutional Grade</p>
      </footer>
    </div>
  );
}
