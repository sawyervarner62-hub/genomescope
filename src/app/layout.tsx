import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/portfolio/navbar";
import { AnimatedBackground } from "@/components/portfolio/animated-background";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sawyer Varner — Developer & Innovator",
  description:
    "Student developer building at the intersection of technology and business. Projects include AI automation, privacy-first genome analysis, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise-overlay`}
      >
        <AnimatedBackground />
        <Navbar />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
