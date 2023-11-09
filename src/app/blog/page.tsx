import { Metadata, NextPage } from "next";
import { Suspense } from "react";

import Posts from "@/components/blog/Posts";

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

const Loading: React.FC = () => {
  return (
    <section>
      {[...Array(3)].map((_, index) => (
        <div key={index} className="py-4 border-b border-b-gray-700">
          <div className="w-60 h-6 mb-1 rounded bg-gray-700 animate-pulse" />
          <div className="text-gray-500 flex items-center">
            <div className="w-24 h-5 bg-gray-700 animate-pulse rounded" />
            <span className="mx-2">|</span>
            <div className="w-24 h-5 bg-gray-700 animate-pulse rounded" />
            <span className="mx-2">|</span>
            <div className="w-24 h-5 bg-gray-700 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </section>
  );
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
