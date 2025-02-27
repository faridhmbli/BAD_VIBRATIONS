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
  title: "ShoesVerse",
  description: "Temukan sepatu olahraga terbaik untuk setiap langkahmu, hanya di ShoesVerse",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800`}
      >
        <div className="min-h-screen bg-gray-200">
          {/* Navbar */}
          <header className="py-6 px-8 bg-gray-900 text-white shadow-md">
            <nav className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">
                <Link href="/">ShoesVerse</Link> {/* Link to Home */}
              </h1>
              <nav>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="/"
                    className="text-white-800 hover:text-blue-600 no-underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-white-800 hover:text-blue-600 no-underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white-800 hover:text-blue-600 no-underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </nav>
          </header>
          
          {/* Main Content */}
          <main className="py-12 px-8">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-4 mt-6">
            <div className="container mx-auto text-center text-sm">
              <p>© 2025 Bad Vibrations | All Rights Reserved</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}