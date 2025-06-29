import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
      title: "DueReady - De-risking High-Growth Startups",
  description: "De-risking high-growth startups for investors, acquirers, and regulators. The largest startup accounting firm in the US.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${dmSans.className} ${spaceGrotesk.variable} ${dmSans.variable}`}>
          {children}
        </body>
      </html>
  );
}
