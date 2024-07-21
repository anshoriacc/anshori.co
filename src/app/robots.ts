import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: "https://anshori.vercel.app/sitemap.xml",
    host: "https://anshori.vercel.app",
  };
}
