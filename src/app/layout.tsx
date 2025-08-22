import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Longevity Forever - Dubai's Premier Wellness & Longevity Hub",
  description: "Experience the future of longevity and wellness at Dubai's premier luxury wellness hub. Located on the Palm at Royal Bay by AZIZI. Coming soon.",
  keywords: "longevity, wellness, Dubai, health optimization, luxury wellness, Palm Jumeirah, Royal Bay AZIZI",
  openGraph: {
    title: "Longevity Forever - Dubai's Premier Wellness & Longevity Hub",
    description: "Experience the future of longevity and wellness at Dubai's premier luxury wellness hub. Coming soon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
