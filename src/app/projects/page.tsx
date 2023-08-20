import Project from "@/components/Project";

export interface IProject {
  title: string;
  image: string;
  description: string;
  year: string;
  url: string;
  repositoryUrl: string;
}

export const projects: IProject[] = [
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

export default function Projects() {
  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black" id="projects">
          projects.
        </h1>
        <h2 className="text-gray-500">The projects I&apos;ve worked.</h2>
      </div>

      {/* content */}
      {projects.map((project, index) => (
        <Project key={index} data={project} />
      ))}
    </main>
  );
}
