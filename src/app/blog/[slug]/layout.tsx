// @ts-ignore
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";

import Loading from "../loading";

type TProps = { children: React.ReactNode };

const BlogPostLayout: React.FC<TProps> = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default BlogPostLayout;
