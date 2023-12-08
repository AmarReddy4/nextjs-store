import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Store — Minimal E-commerce",
  description: "A minimal e-commerce storefront built with Next.js 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-gray-100 min-h-screen`}>
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
