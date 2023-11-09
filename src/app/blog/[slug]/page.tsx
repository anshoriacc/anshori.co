import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";
import { gql } from "@apollo/client";
import Image from "next/image";
import dayjs from "dayjs";

import { getClientOld } from "@/utils/ApolloClient";

type Response = {
  post: {
    title: string;
    slug: string;
    coverImage: string;
    content: string;
    readTime: number;
    dateAdded: string;
    views: number;
  };
};

type Props = {
  params: { slug: string };
};

const postsQuery = gql`
  query Post($slug: String!) {
    post(slug: $slug, hostname: "anshori.co/blog") {
      title
      slug
      coverImage
      content
      readTime
      dateAdded
      views
    }
  }
`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const { data } = await getClientOld()
    .query<Response>({
      query: postsQuery,
      variables: { slug },
    })
    .catch(() => notFound());

  return {
    title: data.post.title ?? "Blog – Achmad Anshori",
    description: "This is basically my voice in text.",
    openGraph: {
      type: "website",
      url: `https://anshori.co/blog/${slug}`,
      title: data.post.title,
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
      title: data.post.title,
      card: "summary_large_image",
    },
  };
}

const BlogPostPage: NextPage<Props> = async ({ params }) => {
  const { slug } = params;

  const { data } = await getClientOld().query<Response>({
    query: postsQuery,
    variables: { slug },
  });

  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <section>
        <h1 className="text-4xl font-black">{data.post.title}</h1>
        <p className="text-gray-500">
          <span title={dayjs(data.post.dateAdded).format("DD MMMM YYYY HH:mm")}>
            {dayjs(data.post.dateAdded).format("MMM DD YYYY")}
          </span>
          <span className="mx-2">|</span>
          {data.post.readTime} min read
          <span className="mx-2">|</span>
          {data.post.views} views
        </p>
      </section>

      <Image
        src={data.post.coverImage}
        alt="cover image"
        width={576}
        height={200}
        objectFit="cover"
        className="mx-auto object-cover"
      />

      {/* article */}
      <article
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: data.post.content }}
      />
    </main>
  );
};

export default BlogPostPage;
