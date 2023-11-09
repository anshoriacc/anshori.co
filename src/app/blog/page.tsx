import { Metadata, NextPage } from "next";
import { Suspense } from "react";

import Posts from "@/components/blog/Posts";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Blog",
  description: "My thoughts in text.",
  openGraph: {
    type: "website",
    url: "https://anshori.co/blog",
    title: "Blog – Achmad Anshori",
    description: "My thoughts in text.",
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
    title: "Blog – Achmad Anshori",
    card: "summary_large_image",
  },
};

const BlogPage: NextPage = async () => {
  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <h2 className="text-gray-500">My thoughts in text.</h2>

      <Suspense fallback={<Loading />}>
        <Posts />
      </Suspense>
    </main>
  );
};

export default BlogPage;
