import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Achmad Anshori",
    template: "%s – Achmad Anshori",
  },
  description: "a Software Engineer, Frontend.",
  openGraph: {
    type: "website",
    url: "https://anshori.co",
    title: "Achmad Anshori",
    description: "a Software Engineer, Frontend.",
    siteName: "Achmad Anshori",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Achmad Anshori",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gray-900
         text-white max-w-[640px] 
         mx-auto pt-[5vh] flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
