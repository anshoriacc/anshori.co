import { Metadata, NextPage } from "next";

import Project from "@/components/Project";

export type TProject = {
  title: string;
  image: string;
  description: string;
  year: string;
  url: string;
  repositoryUrl: string;
};

const projects: TProject[] = [
  {
    title: "G19 Tour & Travel",
    image: "/images/g19.svg",
    description:
      "Reservation web application for G19 Tour & Travel using nextjs & expressjs.",
    year: "2023",
    url: "https://g19.vercel.app/",
    repositoryUrl: "https://github.com/anshoriacc/g19-nextjs",
  },
  {
    title: "anshori.co",
    image: "/android-chrome-512x512.png",
    description: "My personal and portfolio website using nextjs.",
    year: "2023",
    url: "/",
    repositoryUrl: "https://github.com/anshoriacc/anshori.co",
  },
  {
    title: "Madura Tourism Centre",
    image: "/images/maduratourismcentre.png",
    description:
      "Information page of Madura tourism, history and culture using reactjs.",
    year: "2022",
    url: "https://maduratourismcentre.id/",
    repositoryUrl: "",
  },
];

export const metadata: Metadata = {
  title: "Projects",
  description: "The projects I've worked.",
  openGraph: {
    type: "website",
    url: "https://anshori.co/projects",
    title: "Projects – Achmad Anshori",
    description: "The projects I've worked.",
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
    title: "Projects – Achmad Anshori",
    card: "summary_large_image",
  },
};

const ProjectsPage: NextPage = () => {
  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <h2 className="text-gray-500">The projects I&apos;ve worked.</h2>

      {/* content */}
      {projects.map((project, index) => (
        <Project key={index} data={project} />
      ))}
    </main>
  );
};

export default ProjectsPage;
