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
    <div className="min-h-screen bg-[#fcfdfc] text-slate-900 font-sans">
      <style jsx global>{`
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 9999px !important; }
        .wallet-adapter-button-start-icon { display: none !important; }
      `}</style>

      {/* Header */}
      <nav className="bg-white border-b border-slate-100 p-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image src="/logo2small.jpg" alt="Logo" width={140} height={40} priority />
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-[#1a4d2e]">Marketplace</a>
              <a href="#" className="hover:text-[#1a4d2e]">Portfolio</a>
              <a href="#" className="hover:text-[#1a4d2e]">Governance</a>
            </div>
            <WalletMultiButton />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-10">
        {/* Protocol Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Value Locked", value: "$42.8M", change: "+12%" },
            { label: "Active Investors", value: "1,204", change: "+5%" },
            { label: "Avg. Sovereign Yield", value: "6.4%", change: "Stable" },
            { label: "Assets Tokenized", value: "14", change: "+2" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <div className="flex items-baseline gap-2 mt-2">
                <p className="text-2xl font-bold text-[#1a4d2e]">{stat.value}</p>
                <span className="text-xs text-emerald-600 font-medium">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Marketplace (Left 2/3) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">Primary Marketplace</h2>
              <button className="text-sm font-semibold text-[#1a4d2e]">Filter Assets</button>
            </div>
            
            {assets.map((asset) => (
              <div key={asset.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#1a4d2e] font-bold text-xl">
                    {asset.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">{asset.name}</h3>
                    <p className="text-sm text-slate-400">Maturity: {asset.maturity} • Rating: {asset.rating}</p>
                  </div>
                </div>
                <div className="flex gap-8 items-center w-full md:w-auto justify-between md:justify-end">
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-400 uppercase">Yield</p>
                    <p className="text-xl font-bold text-emerald-600">{asset.yield}</p>
                  </div>
                  <button className="bg-[#1a4d2e] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#24633d]">
                    Invest
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Side Panel: Portfolio (Right 1/3) */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Your Portfolio</h2>
            <div className="bg-[#1a4d2e] p-8 rounded-[2rem] text-white shadow-xl shadow-green-900/10">
              <p className="text-sm opacity-80 font-medium">Total Balance</p>
              <p className="text-4xl font-bold mt-1">$0.00</p>
              <div className="mt-8 pt-8 border-t border-white/10 flex justify-between">
                <div>
                  <p className="text-[10px] uppercase opacity-60 font-bold tracking-widest">Active Stakes</p>
                  <p className="font-bold">0 Assets</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase opacity-60 font-bold tracking-widest">Monthly Yield</p>
                  <p className="font-bold">$0.00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-dashed border-slate-200 text-center py-10">
              <p className="text-slate-400 text-sm">No assets detected. <br/>Connect wallet to view holdings.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
