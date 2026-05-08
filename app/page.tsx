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
        /* The Secret Sauce: Prevents the header from covering section titles */
        html { 
          scroll-behavior: smooth; 
          scroll-padding-top: 110px; 
        }
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 9999px !important; font-size: 14px !important; height: 40px !important; }
        .wallet-adapter-button-start-icon { display: none !important; }
        .wallet-adapter-modal-list { display: flex !important; flex-direction: column !important; gap: 12px !important; }
      `}</style>

      {/* Header - Glassmorphism style */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200/60 p-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <Image src="/logo2small.jpg" alt="Logo" width={130} height={38} priority={true} />
          
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-[13px] font-bold uppercase tracking-wider text-slate-400">
              <a href="#marketplace" className="hover:text-[#1a4d2e] transition-colors">Marketplace</a>
              <a href="#portfolio" className="hover:text-[#1a4d2e] transition-colors">Portfolio</a>
              <a href="#governance" className="hover:text-[#1a4d2e] transition-colors">Governance</a>
            </div>
            <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
            <WalletMultiButton />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-12">
        {/* Key Performance Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "TVL", value: "$42.8M" },
            { label: "Nodes", value: "1,204" },
            { label: "Yield", value: "6.4%" },
            { label: "Assets", value: "14" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200/50 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-[#1a4d2e]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Marketplace Left Column */}
          <div id="marketplace" className="lg:col-span-8 space-y-8">
            <div className="border-l-4 border-[#1a4d2e] pl-6 py-2">
              <h2 className="text-3xl font-black text-slate-800 tracking-tight">Primary Marketplace</h2>
              <p className="text-slate-500 font-medium italic">Active Institutional Bond Series</p>
            </div>
            
            <div className="grid gap-4">
              {assets.map((asset) => (
                <div key={asset.id} className="bg-white p-6 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#1a4d2e] text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-lg shadow-green-900/20">
                      {asset.rating}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-xl">{asset.name}</h3>
                      <p className="text-sm text-slate-400 font-medium">Maturity: {asset.maturity}</p>
                    </div>
                  </div>
                  <div className="flex gap-12 items-center">
                    <div className="text-center">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Fixed Yield</p>
                      <p className="text-2xl font-black text-emerald-600 tracking-tighter">{asset.yield}</p>
                    </div>
                    <button className="bg-[#1a4d2e] text-white px-10 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-green-900/30 transition-all active:scale-95">
                      Invest
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <section id="portfolio">
              <div className="bg-[#1a4d2e] p-10 rounded-[3rem] text-white shadow-2xl shadow-green-900/30">
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-60">Portfolio Value</h3>
                <p className="text-6xl font-black mt-3">$0.00</p>
                <div className="mt-10 grid grid-cols-2 gap-3">
                  <button className="bg-white text-[#1a4d2e] py-4 rounded-2xl font-bold text-sm shadow-inner active:scale-95 transition-all">Deposit</button>
                  <button className="bg-white/10 border border-white/20 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 active:scale-95 transition-all">Withdraw</button>
                </div>
              </div>
            </section>

            <section id="governance">
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-800">Governance</h3>
                  <span className="bg-green-100 text-[#1a4d2e] text-[10px] font-black px-3 py-1 rounded-full uppercase">1 Proposal</span>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">ESP-004</p>
                  <p className="text-sm font-bold text-slate-700 leading-tight">Infrastructure Bond Expansion (LatAm Series)</p>
                  <div className="mt-4 w-full bg-slate-200 h-2 rounded-full">
                    <div className="bg-[#1a4d2e] h-full w-[65%] rounded-full shadow-[0_0_8px_rgba(26,77,46,0.3)]"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="mt-24 pb-16 text-center">
        <div className="inline-block px-8 py-2 bg-slate-100 rounded-full">
          <p className="text-slate-400 text-[10px] tracking-[0.3em] uppercase font-black">Earthspan • Sovereign Gateway</p>
        </div>
      </footer>
    </div>
  );
}
