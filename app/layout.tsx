import './globals.css';
import { Providers } from "./providers";

export const metadata = {
  title: 'Earthspan | Sovereign Engine',
  description: 'Institutional Tokenization Gateway',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          /* Pre-loading styles to prevent the purple flash */
          .wallet-adapter-button { 
            background-color: #1a4d2e !important; 
            transition: none !important; 
          }
          .wallet-adapter-button-start-icon { 
            display: none !important; 
          }
        `}</style>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
