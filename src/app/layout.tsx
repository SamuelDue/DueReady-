import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DueReady - Deal Readiness for Startups",
  description: "Financial, legal, and compliance readiness for startups",
  icons: {
    icon: [
      { url: '/favicon.svg?v=5', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=5', sizes: '32x32' }
    ],
    apple: [
      { url: '/favicon.svg?v=5', sizes: '180x180' }
    ]
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        {/* Data URI Favicon - Immediate, no caching */}
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMiAzMic+CiAgPHJlY3Qgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJyBmaWxsPScjMDAwJy8+CiAgPHRleHQgeD0nMTYnIHk9JzIyJyBmb250LWZhbWlseT0nQXJpYWwnIGZvbnQtc2l6ZT0nMTQnIGZvbnQtd2VpZ2h0PSdib2xkJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmaWxsPScjZmZmJz5EUjwvdGV4dD4KICA8L3N2Zz4K" type="image/svg+xml" />
        
        {/* Comprehensive Favicon Meta Tags with cache busting */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=5" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=5" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        
        {/* Mobile Optimization Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load Space Grotesk directly for SVG compatibility */}
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Mobile-specific CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              * {
                -webkit-tap-highlight-color: transparent;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                user-select: none;
              }
              
              input, textarea, button {
                -webkit-user-select: auto;
                user-select: auto;
              }
              
              body {
                -webkit-overflow-scrolling: touch;
                overflow-x: hidden;
              }
              
              /* Disable complex animations on mobile for smooth scrolling */
              .scroll-animate {
                animation: none !important;
                transform: none !important;
                opacity: 1 !important;
              }
              
              /* Simplify scrolling words animation on mobile */
              .scrolling-words-text {
                animation-duration: 1.5s !important;
                animation-timing-function: ease-out !important;
              }
              
              /* Hardware acceleration for smooth scrolling */
              .scrolling-words-container {
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
              }
              
              /* Reduce animation complexity on mobile */
              @media (prefers-reduced-motion: reduce) {
                * {
                  animation-duration: 0.01ms !important;
                  animation-iteration-count: 1 !important;
                  transition-duration: 0.01ms !important;
                }
              }
            }
          `
        }} />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}>
          {children}
        </body>
      </html>
  );
}
