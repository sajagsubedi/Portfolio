import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Cursor from "@/components/Cursor";

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
    "Driven higher secondary student with a passion for technology and development. Continuously expanding my skills across various domains, I thrive on tackling challenges and bringing innovative solutions to life. Eager to contribute to impactful projects and collaborate with forward-thinking professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        <ParticleBackground />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
