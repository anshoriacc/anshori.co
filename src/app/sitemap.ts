import { MetadataRoute } from "next";
import { gql } from "@apollo/client";

import { getClient } from "@/utils/ApolloClient";

const postQuery = gql`
  query Publication {
    publication(host: "anshori.co/blog") {
      posts(first: 20) {
        edges {
          node {
            publishedAt
            slug
            url
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
          url: string;
          slug: string;
          publishedAt: string;
        };
      }[];
    };
  };
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await getClient().query<Response>({ query: postQuery });

  return [
    {
      url: "https://anshori.co",
      lastModified: new Date(),
    },
    {
      url: "https://anshori.co/projects",
      lastModified: new Date(),
    },
    {
      url: "https://anshori.co/journey",
      lastModified: new Date(),
    },
    {
      url: "https://anshori.co/blog",
      lastModified: new Date(),
    },
    ...data.publication.posts.edges.map(({ node }) => ({
      url: node.url,
      lastModified: new Date(node.publishedAt),
    })),
  ];
}
