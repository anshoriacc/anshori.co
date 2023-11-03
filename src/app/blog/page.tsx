import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "This is basically my voice in text.",
  openGraph: {
    type: "website",
    url: "https://anshori.co/blog",
    title: "Blog – Achmad Anshori",
    description: "This is basically my voice in text.",
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

const BlogPage: React.FC = () => {
  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-500">This is coming really soon.</h2>
      </div>
    </main>
  );
};

export default BlogPage;
