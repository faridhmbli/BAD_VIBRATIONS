import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link"; // Import Link from Next.js
import "./globals.css";

// Menambahkan font lokal
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Sepatu Olahraga Keren",
  description: "Tampilan modern untuk katalog sepatu olahraga.",
};