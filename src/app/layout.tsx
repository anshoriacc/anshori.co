// @ts-ignore
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { GeistMono } from "geist/font";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

type TProps = { children: React.ReactNode };

export const metadata: Metadata = {
  metadataBase: new URL("https://anshori.co"),
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

const RootLayout: React.FC<TProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={clsx(
          GeistMono.className,
          "min-h-screen bg-gray-900 text-white max-w-[640px] mx-auto pt-[5vh] flex flex-col"
        )}
      >
        <Header />
        {children}
        <Footer />
        <Analytics mode={"production"} />
      </body>
    </html>
  );
};

export default RootLayout;
