import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sajag Subedi: Innovative Web Developer",
  description:
    "Full-stack web developer crafting intuitive apps with modern tech, smooth UI/UX, animations, and efficient backend systems.",
  keywords: [
    "Sajag Subedi",
    "Sajag",
    "Subedi",
    "Web Developer",
    "Developer",
    "Coder",
    "Programmer",
    "Innovative",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  metadataBase: new URL(process.env.NEXT_BASE_URL!),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white max-w-dvw overflow-x-clip`}
      >
        <ParticleBackground />
        <Cursor />
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
