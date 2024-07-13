// @ts-ignore
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

import Header from "@/components/Header";

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
    title: {
      default: "Achmad Anshori",
      template: "%s – Achmad Anshori",
    },
    description: "a Software Engineer, Frontend.",
    siteName: "Achmad Anshori",
    images: "/android-chrome-512x512.png",
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
    title: {
      default: "Achmad Anshori",
      template: "%s – Achmad Anshori",
    },
    card: "summary_large_image",
  },
};

const RootLayout: React.FC<TProps> = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx(
          inter.className,
          "min-h-screen bg-gray-900 text-white max-w-[640px] mx-auto pt-[25vh] flex flex-col"
        )}
      >
        <Header />
        {children}
        <Analytics mode={"production"} />
      </body>
    </html>
  );
};

export default RootLayout;
