import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { BASE_URL } from "@/constants/env";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL ?? "/"),
  title: {
    default: "Achmad Anshori",
    template: "%s – Achmad Anshori",
  },
  description: "a Software Engineer, Frontend.",
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: {
      default: "Achmad Anshori",
      template: "%s – Achmad Anshori",
    },
    description: "a Software Engineer, Frontend.",
    siteName: "Achmad Anshori",
    images: "/192x192.png",
  },
  twitter: {
    title: {
      default: "Achmad Anshori",
      template: "%s – Achmad Anshori",
    },
    images: "/192x192.png",
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
