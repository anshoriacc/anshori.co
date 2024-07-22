import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: "https://anshori.co/sitemap.xml",
    host: "https://anshori.co",
  };
}
