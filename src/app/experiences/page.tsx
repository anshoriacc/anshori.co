export type TExperience = {
  role: string;
  status: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

const experiences: TExperience[] = [
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

const ExperiencesPage: React.FC = () => {
  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-500">My past and current places I&apos;ve worked at.</h2>
      </div>

      {/* content */}
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
    </main>
  );
};

export default ExperiencesPage;
