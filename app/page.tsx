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
        /* Main Button */
        .wallet-adapter-button { background-color: #1a4d2e !important; border-radius: 9999px !important; transition: all 0.2s ease !important; }
        .wallet-adapter-button:hover { background-color: #24633d !important; transform: translateY(-1px); }
        .wallet-adapter-button-start-icon { display: none !important; }

        /* Fix the "Touching" Modal Buttons */
        .wallet-adapter-modal-wrapper { background: #ffffff !important; border-radius: 24px !important; padding: 20px !important; }
        .wallet-adapter-modal-title { color: #1a4d2e !important; font-weight: 700 !important; margin-bottom: 20px !important; }
        .wallet-adapter-modal-list { display: flex !important; flex-direction: column !important; gap: 12px !important; }
        .wallet-adapter-modal-list .wallet-adapter-button { 
          background-color: #f8fafc !important; 
          color: #1a4d2e !important; 
          border-radius: 12px !important; 
          border: 1px solid #e2e8f0 !important;
          justify-content: space-between !important;
          width: 100% !important;
        }
      `}</style>

      <nav className="bg-white border-b border-slate-100 p-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image src="/logo2small.jpg" alt="Logo" width={140} height={40} priority={true} />
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#" className="text-[#1a4d2e]">Marketplace</a>
            <a href="#" className="hover:text-[#1a4d2e]">Portfolio</a>
            <a href="#" className="hover:text-[#1a4d2e]">Governance</a>
          </div>
          <WalletMultiButton />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "TVL", value: "$42.8M" },
            { label: "Investors", value: "1,204" },
            { label: "Avg Yield", value: "6.4%" },
            { label: "Assets", value: "14" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-[#1a4d2e]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Available Assets</h2>
            {assets.map((asset) => (
              <div key={asset.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#1a4d2e] font-black text-xl">
                    {asset.rating}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">{asset.name}</h3>
                    <p className="text-sm text-slate-400 font-medium italic">Maturity: {asset.maturity}</p>
                  </div>
                </div>
                <div className="flex gap-10 items-center">
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Est. Yield</p>
                    <p className="text-2xl font-black text-emerald-600">{asset.yield}</p>
                  </div>
                  <button className="bg-[#1a4d2e] text-white px-8 py-3 rounded-2xl font-bold hover:bg-[#24633d] transition-colors">
                    Invest
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-[#1a4d2e] p-10 rounded-[2.5rem] text-white shadow-2xl shadow-green-900/20 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm opacity-70 font-bold uppercase tracking-widest">Sovereign Balance</p>
                <p className="text-5xl font-black mt-2 tracking-tight">$0.00</p>
                <button className="mt-8 w-full bg-white/10 hover:bg-white/20 border border-white/20 py-3 rounded-xl font-bold transition-all">
                  Claim Yield
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
