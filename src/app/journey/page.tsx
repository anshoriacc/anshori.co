import { Metadata } from "next";

type TExperience = {
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

export const metadata: Metadata = {
  title: "Journey",
  description: "The journey I've been through so far.",
  openGraph: {
    type: "website",
    url: "https://anshori.co/journey",
    title: "Journey – Achmad Anshori",
    description: "The journey I've been through so far.",
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
    title: "Journey – Achmad Anshori",
    card: "summary_large_image",
  },
};

const JourneyPage: React.FC = () => {
  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-500">
          The journey I&apos;ve been through so far.
        </h2>
      </div>

      {/* experiences */}
      <h2 className="h2-page text-2xl font-black m-0">Experiences</h2>
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

      {/* education */}
      <h2 className="h2-page text-2xl font-black m-0">Education</h2>
      <div className="list relative">
        <div>
          <h3 className="font-bold">Computer Science, Bachelor Degree</h3>
          <h4>
            Universitas Brawijaya —{" "}
            <span className="font-normal italic text-gray-500">2023</span>
          </h4>
        </div>
      </div>
    </main>
  );
};

export default JourneyPage;
