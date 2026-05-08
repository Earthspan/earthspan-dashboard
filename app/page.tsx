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
    <div className="min-h-screen bg-[#f8faf9] text-slate-900 font-sans selection:bg-green-100">
      <style jsx global>{`
        html { scroll-behavior: smooth; scroll-padding-top: 110px; }
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 9999px !important; font-size: 13px !important; height: 40px !important; }
        .wallet-adapter-button-start-icon { display: none !important; }
      `}</style>

      {/* Branded Header */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          
          {/* Left: Logo + Name */}
          <div className="flex items-center gap-3">
            <Image src="/logo2small.jpg" alt="Logo" width={45} height={45} className="rounded-xl" priority={true} />
            <span className="text-2xl font-black tracking-tighter text-[#1a4d2e]">EARTHSPAN</span>
          </div>
          
          {/* Middle: Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="#marketplace-section" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#1a4d2e] transition-colors">Marketplace</a>
            <a href="#portfolio-section" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#1a4d2e] transition-colors">Portfolio</a>
            <a href="#governance-section" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#1a4d2e] transition-colors">Governance</a>
          </div>

          {/* Right: Wallet */}
          <WalletMultiButton />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-12">
        {/* Metric Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { label: "Protocol TVL", value: "$42.8M" },
            { label: "Active Nodes", value: "1,204" },
            { label: "Sovereign Yield", value: "6.4%" },
            { label: "Live Assets", value: "14" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-7 rounded-3xl border border-slate-200/50 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-[#1a4d2e]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Marketplace Content */}
          <div id="marketplace-section" className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-4xl font-black text-slate-800 tracking-tight">Marketplace</h2>
              <p className="text-slate-400 font-medium mt-1">Sovereign Debt & Infrastructure Bonds</p>
            </div>
            
            <div className="grid gap-6">
              {assets.map((asset) => (
                <div key={asset.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row justify-between items-center gap-6 group">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-green-50 text-[#1a4d2e] rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-[#1a4d2e] group-hover:text-white transition-colors">
                      {asset.rating}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-xl">{asset.name}</h3>
                      <p className="text-sm text-slate-400 font-medium">Series 2026 • Maturity: {asset.maturity}</p>
                    </div>
                  </div>
                  <button className="bg-[#1a4d2e] text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-green-900/10">
                    Invest {asset.yield}
                  </button>
                </div>
              ))}
            </div>
            <div className="h-40"></div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <section id="portfolio-section">
              <div className="bg-[#1a4d2e] p-10 rounded-[3rem] text-white shadow-2xl shadow-green-900/30">
                <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-60">Your Balance</h3>
                <p className="text-6xl font-black mt-3">$0.00</p>
                <button className="mt-10 w-full bg-white text-[#1a4d2e] py-4 rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-all">Deposit Capital</button>
              </div>
            </section>

            <section id="governance-section" className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Governance</h3>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Active Proposal</p>
                <p className="text-sm font-bold text-slate-700 leading-tight">Increase LTV for Emerging Market Bonds</p>
                <div className="mt-5 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#1a4d2e] h-full w-[65%] rounded-full"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-16 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 grayscale opacity-50">
            <Image src="/logo2small.jpg" alt="Logo" width={30} height={30} />
            <span className="text-sm font-black tracking-tighter text-[#1a4d2e]">EARTHSPAN</span>
          </div>
          <p className="text-slate-300 text-[10px] tracking-[0.5em] uppercase font-black">Institutional Grade Protocol • 2026</p>
        </div>
      </footer>
    </div>
  );
}
