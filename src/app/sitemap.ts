import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://anshori.co",
      lastModified: new Date(),
    },
    {
      url: "https://anshori.co/projects",
      lastModified: new Date(),
    },
  ];
}
