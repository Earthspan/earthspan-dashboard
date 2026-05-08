import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Earthspan Sovereign Engine",
  description: "Institutional Tokenization on Solana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
