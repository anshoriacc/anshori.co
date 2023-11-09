import { gql } from "@apollo/client";

import { getClient } from "@/utils/ApolloClient";
import Post from "./Post";

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

const Posts: React.FC = async () => {
  const { data } = await getClient().query<Response>({ query: postQuery });

  return (
    <section>
      {data.publication.posts.edges.length > 0 ? (
        data.publication.posts.edges.map((post, index) => (
          <Post key={index} {...post.node} />
        ))
      ) : (
        <p>Sorry, there is no post yet, kinda sucks at writing.</p>
      )}
    </section>
  );
};

export default Posts;
