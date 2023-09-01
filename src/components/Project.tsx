import Link from "next/link";
import Image from "next/image";

import { RiExternalLinkLine } from "react-icons/ri";

import { IProject } from "@/app/projects/page";

type IProps = {
  data: IProject;
};

const Project: React.FC<IProps> = ({ data }) => {
  return (
    <div className="">
      <div className="list relative py-2 grid grid-cols-[36px_1fr] gap-4 items-center">
        <Image
          src={data.image}
          alt={data.title}
          width={36}
          height={36}
          priority
          draggable={false}
        />
        <div>
          <div className="flex gap-2">
            <Link
              href={data.url ? data.url : ""}
              title={`go to ${data.title}`}
              target={data.url !== "/" ? "_blank" : ""}
              rel="noopener noreferrer"
              className="w-fit hover:underline"
            >
              <h3 className="font-bold w-fit">{data.title}</h3>
            </Link>
            <span className="text-gray-500">{data.year}</span>
          </div>
          <p className="text-gray-500">{data.description}</p>
          {data.repositoryUrl && (
            <Link
              href={data.repositoryUrl}
              title={`go to ${data.title} repository`}
              target="_blank"
              className="flex items-center hover:underline w-fit"
            >
              source
              <RiExternalLinkLine />
            </Link>
          )}
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-800" />
    </div>
  );
};

export default Project;
