import { Metadata } from "next";
import { gql } from "@apollo/client";

import { getClient } from "@/utils/ApolloClient";
import Post from "@/components/blog/Post";

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

const postQuery = gql`
  query Publication {
    publication(host: "anshori.co/blog") {
      posts(first: 20) {
        edges {
          node {
            readTimeInMinutes
            title
            slug
            publishedAt
            views
          }
        }
      }
    }
  }
`;

type Response = {
  publication: {
    posts: {
      edges: {
        node: {
          readTimeInMinutes: number;
          title: string;
          slug: string;
          publishedAt: string;
          views: number;
        };
      }[];
    };
  };
};

const BlogPage: React.FC = async () => {
  const { data } = await getClient().query<Response>({ query: postQuery });

  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <h2 className="text-gray-500">My thoughts in text.</h2>

      {/* posts */}
      {data.publication.posts.edges.length > 0 ? (
        data.publication.posts.edges.map((post, index) => (
          <Post key={index} {...post.node} />
        ))
      ) : (
        <p>Sorry, there is no post yet, kinda sucks at writing.</p>
      )}
    </main>
  );
};

export default BlogPage;
