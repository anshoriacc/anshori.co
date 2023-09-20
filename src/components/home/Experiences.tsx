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

const Experiences: React.FC = () => {
  return (
    <section className="mt-4 flex flex-col gap-2">
      {/* section title */}
      <h2 className="h2-page text-2xl font-black" id="experiences">
        experiences.
      </h2>

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
