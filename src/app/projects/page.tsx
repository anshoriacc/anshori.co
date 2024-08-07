import { Metadata, NextPage } from "next";

import Project from "@/components/Project";
import { projects } from "@/data/projects";

export type TProject = {
  title: string;
  image: string;
  description: string;
  year: string;
  url: string;
  repositoryUrl: string;
};

export const metadata: Metadata = {
  title: "Projects",
  description: "The projects I've worked.",
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
