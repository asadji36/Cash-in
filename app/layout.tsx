import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "As Multi - Multi-Affiliate Shopping Platform",
  description: "Find the best deals across Amazon, Daraz, AliExpress, eBay, and Walmart. Compare products and save money with our multi-affiliate platform.",
  keywords: ["affiliate", "shopping", "deals", "Amazon", "Daraz", "AliExpress", "eBay", "Walmart"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
