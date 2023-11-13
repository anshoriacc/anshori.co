import { Metadata, NextPage } from "next";
import { gql } from "@apollo/client";
import Image from "next/image";
import dayjs from "dayjs";

import { getClient } from "@/utils/ApolloClient";
import { notFound } from "next/navigation";

type Response = {
  publication: {
    post: {
      title: string;
      subtitle: string;
      slug: string;
      readTimeInMinutes: number;
      coverImage: {
        url: string;
      };
      content: { html: string };
      publishedAt: string;
      views: number;
    } | null;
  };
};

type Props = {
  params: { slug: string };
};

const postQuery = gql`
  query Publication($slug: String!) {
    publication(host: "anshori.co/blog") {
      post(slug: $slug) {
        title
        subtitle
        slug
        readTimeInMinutes
        publishedAt
        views
        coverImage {
          url
        }
        content {
          html
        }
      }
    }
  }
`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const { data } = await getClient().query<Response>({
    query: postQuery,
    variables: { slug },
  });

  console.log("slug meta", slug);
  console.log("data meta", data);

  return {
    title: data.publication.post?.title ?? "Blog",
    description: data.publication.post?.subtitle ?? "My thoughts in text.",
    openGraph: {
      type: "website",
      url: `https://anshori.co/blog/${slug}`,
      title: data.publication.post?.title ?? "Blog",
      description: data
        ? data.publication.post?.subtitle
        : "My thoughts in text.",
      images: data.publication.post?.coverImage.url,
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
      title: data.publication.post?.title ?? "Blog",
      description: data
        ? data.publication.post?.subtitle
        : "My thoughts in text.",
      images: data.publication.post?.coverImage.url,
      card: "summary_large_image",
    },
  };
}

const BlogPostPage: NextPage<Props> = async ({ params }) => {
  const { slug } = params;

  const { data } = await getClient().query<Response>({
    query: postQuery,
    variables: { slug },
  });

  console.log("slug post", slug);
  console.log("data post", data);

  if (data && data.publication.post === null) {
    return notFound();
  }

  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <section>
        <h1 className="text-4xl font-black">{data.publication.post?.title}</h1>
        <p className="text-gray-500">
          <span
            title={dayjs(data.publication.post?.publishedAt).format(
              "DD MMMM YYYY HH:mm"
            )}
          >
            {dayjs(data.publication.post?.publishedAt).format("MMM DD YYYY")}
          </span>
          <span className="mx-2">|</span>
          {data.publication.post?.readTimeInMinutes} min read
          <span className="mx-2">|</span>
          {data.publication.post?.views} views
        </p>
      </section>

      {data.publication.post?.coverImage.url && (
        <Image
          src={data.publication.post?.coverImage.url}
          alt="cover image"
          width={576}
          height={200}
          className="mx-auto object-cover rounded-md"
        />
      )}

      {/* article */}
      {data.publication.post && (
        <article
          className="prose prose-invert"
          dangerouslySetInnerHTML={{
            __html: data.publication.post?.content.html,
          }}
        />
      )}
    </main>
  );
};

export default BlogPostPage;
