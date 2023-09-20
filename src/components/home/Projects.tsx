import Link from "next/link";

import { projects } from "@/app/projects/page";
import Project from "../Project";

const Projects: React.FC = () => {
  return (
    <section className="mt-4 flex flex-col gap-2">
      {/* section title */}
      <div className="flex gap-4 items-center">
        <h2 className="h2-page text-2xl font-black" id="projects">
          projects.
        </h2>
        <Link
          href="projects"
          className="text-gray-500 hover:text-white underline"
        >
          more
        </Link>
      </div>

      {/* projects */}
      {projects.slice(0, 3).map((project, index) => (
        <Project key={index} data={project} />
      ))}
    </section>
  );
};

export default Projects;
