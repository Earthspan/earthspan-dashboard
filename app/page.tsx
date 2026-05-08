"use client";
import Image from 'next/image';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function EarthspanDashboard() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans text-center">
      
      <style jsx global>{`
        /* Header Button */
        .wallet-adapter-button {
          background-color: #1a4d2e !important;
          color: white !important;
          border-radius: 9999px !important;
          font-weight: 600 !important;
          padding: 0 24px !important;
          transition: all 0.3s ease !important;
        }
        .wallet-adapter-button:hover { background-color: #24633d !important; }
        .wallet-adapter-button-start-icon { display: none !important; }

        /* Institutional Modal Cleanup */
        .wallet-adapter-modal-wrapper {
          background: #ffffff !important;
          border-radius: 32px !important;
          padding: 20px !important;
        }
        .wallet-adapter-modal-title {
          color: #1a4d2e !important;
          font-family: inherit !important;
          font-size: 24px !important;
          margin-bottom: 20px !important;
        }
        .wallet-adapter-modal-list {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important; /* This creates the separation between buttons */
        }
        .wallet-adapter-modal-list .wallet-adapter-button {
          background-color: #f8fafc !important;
          color: #1a4d2e !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 16px !important;
          height: 60px !important;
          justify-content: space-between !important;
          font-size: 16px !important;
        }
        .wallet-adapter-modal-list .wallet-adapter-button:hover {
          background-color: #f1f5f9 !important;
          border-color: #1a4d2e !important;
        }
        .wallet-adapter-modal-list .wallet-adapter-button-end-icon {
          opacity: 0.5 !important;
        }
      `}</style>

      <nav className="border-b border-slate-100 p-6 flex justify-between items-center max-w-7xl mx-auto">
        <Image src="/logo2small.jpg" alt="Logo" width={160} height={50} priority={true} />
        <WalletMultiButton />
      </nav>
      
      <main className="max-w-4xl mx-auto mt-24 px-6">
        <h1 className="text-6xl font-extrabold text-[#1a4d2e] tracking-tight">Sovereign Engine</h1>
        <p className="text-slate-500 mt-4 text-2xl font-light italic">Institutional Tokenization Gateway</p>

        <div className="mt-16 bg-[#f8fafc] rounded-[3rem] p-20 border border-slate-200/60 shadow-2xl">
           <div className="mx-auto w-12 h-1 bg-[#1a4d2e] mb-10 opacity-20"></div>
           <h2 className="text-4xl font-bold text-slate-800">Connection Active</h2>
           <p className="text-slate-500 mt-6 text-xl max-w-md mx-auto leading-relaxed">
             Dashboard initialized. Use the secure gateway to manage sovereign assets.
           </p>
        </div>
      </main>

      <footer className="mt-32 pb-12 text-slate-300 text-xs tracking-[0.4em] uppercase font-medium">
        Earthspan Protocol • Built on Solana
      </footer>
    </div>
  );
}
