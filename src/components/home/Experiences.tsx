import Link from "next/link";

export interface Experience {
  role: string;
  status: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    status: "Full time",
    company: "Vorta Siber Indonesia",
    startDate: "June 2022",
    endDate: "Present",
    description:
      "Transform user needs into websites using react, react native, laravel, and nestjs.",
  },
  {
    role: "Software Engineer",
    status: "Contract",
    company: "Hexa Daya Solusi",
    startDate: "July 2022",
    endDate: "August 2022",
    description:
      "Transform user needs into websites using react, angular, and sailsjs.",
  },
];

const Experiences = () => {
  return (
    <section className="mt-4 flex flex-col gap-2">
      {/* section title */}
      <Link href="#experiences" className="w-fit">
        <h2 className="h2-page text-2xl font-black" id="projects">
          experiences.
        </h2>
      </Link>

      {/* experiences */}
      {experiences.map((experience, index) => (
        <div key={index} className="list relative">
          <h3>
            {experience.role},{" "}
            <span className="text-gray-500">{experience.status}</span>
          </h3>
          <h4 className="font-bold">
            {experience.company} —{" "}
            <span className="font-normal italic text-gray-500">
              {experience.startDate} – {experience.endDate}
            </span>
          </h4>
          <p className="text-gray-500 text-justify">{experience.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experiences;