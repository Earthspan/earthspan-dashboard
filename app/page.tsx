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
        html { 
          scroll-behavior: smooth; 
          scroll-padding-top: 110px; /* Forces the page to stop BEFORE the title */
        }
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 9999px !important; font-size: 14px !important; }
        .wallet-adapter-button-start-icon { display: none !important; }
      `}</style>

      {/* Header */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200/60 p-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <Image src="/logo2small.jpg" alt="Logo" width={130} height={38} priority={true} />
          
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
              <a href="#marketplace-section" className="hover:text-[#1a4d2e] transition-colors">Marketplace</a>
              <a href="#portfolio-section" className="hover:text-[#1a4d2e] transition-colors">Portfolio</a>
              <a href="#governance-section" className="hover:text-[#1a4d2e] transition-colors">Governance</a>
            </div>
            <WalletMultiButton />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-12">
        {/* KPI Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { label: "Protocol TVL", value: "$42.8M" },
            { label: "Active Nodes", value: "1,204" },
            { label: "Avg Yield", value: "6.4%" },
            { label: "Live Assets", value: "14" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200/50 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-[#1a4d2e]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Marketplace - Target ID added here */}
          <div id="marketplace-section" className="lg:col-span-8 space-y-8">
            <div className="border-l-4 border-[#1a4d2e] pl-6">
              <h2 className="text-3xl font-black text-slate-800 tracking-tight">Marketplace</h2>
              <p className="text-slate-500 font-medium italic">Tokenized Sovereign Debt Instruments</p>
            </div>
            
            <div className="grid gap-4">
              {assets.map((asset) => (
                <div key={asset.id} className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-green-50 text-[#1a4d2e] rounded-2xl flex items-center justify-center font-black text-lg">
                      {asset.rating}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-xl">{asset.name}</h3>
                      <p className="text-sm text-slate-400 font-medium">Maturity: {asset.maturity}</p>
                    </div>
                  </div>
                  <button className="bg-[#1a4d2e] text-white px-10 py-3 rounded-2xl font-bold hover:shadow-lg transition-all">
                    Invest {asset.yield}
                  </button>
                </div>
              ))}
            </div>
            {/* Added extra space so the scroll has somewhere to go */}
            <div className="h-40"></div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            {/* Portfolio - Target ID added here */}
            <section id="portfolio-section">
              <div className="bg-[#1a4d2e] p-10 rounded-[3rem] text-white shadow-2xl shadow-green-900/30">
                <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-60">Sovereign Balance</h3>
                <p className="text-6xl font-black mt-3">$0.00</p>
                <div className="mt-10 flex gap-3">
                  <button className="flex-1 bg-white text-[#1a4d2e] py-4 rounded-2xl font-bold text-sm">Deposit</button>
                </div>
              </div>
            </section>

            {/* Governance - Target ID added here */}
            <section id="governance-section" className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Governance</h3>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Active Vote</p>
                <p className="text-sm font-bold text-slate-700 leading-tight">Expansion of Renewable Energy Bond Pool</p>
                <div className="mt-4 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#1a4d2e] h-full w-[65%]"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="mt-24 pb-16 text-center opacity-30">
        <p className="text-[10px] tracking-[0.5em] uppercase font-black">Earthspan • Protocol Established 2026</p>
      </footer>
    </div>
  );
}
