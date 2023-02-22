import Link from 'next/link';
import type { NextPage, NextPageContext } from 'next';

import { AboutProps } from 'src/types';

import Container from '@components/Container';

const experiences = [
  {
    role: 'Software Engineer',
    status: 'Freelance',
    company: 'Vorta Siber Indonesia',
    startDate: 'June 2022',
    endDate: 'Present',
    description:
      'As a fullstack, I worked in a team and create several features based on user requirements using PHP/Laravel and reactjs.',
  },
  {
    role: 'Software Engineer',
    status: 'Full-time',
    company: 'Hexa Daya Solusi',
    startDate: 'July 2022',
    endDate: 'August 2022',
    description:
      'As a fullstack, I transformed user needs into a website. Using reactjs and angularjs in frontend side, and sailsjs in backend side.',
  },
];

const About: NextPage<AboutProps> = ({ experiences }) => {
  return (
    <Container title="About">
      <h2 className="text-2xl font-bold mb-8">About Me</h2>
      <section className="flex flex-col gap-4 mb-8">
        <p>
          Hi, I am Achmad Anshori, a{' '}
          <span className="font-semibold">Software Engineer </span>
          based in Malang, Indonesia. I am currently working on my undergraduate
          thesis and a <span className="font-semibold">
            Fullstack Engineer
          </span>{' '}
          in <span className="font-semibold">Vorta Siber Indonesia</span> as a
          freelancer.
        </p>
        <p>
          I experienced in web development industry, especially in{' '}
          <span className="font-semibold">Frontend</span> side with Javascript
          and experienced working with{' '}
          <span className="font-semibold">reactjs</span>,{' '}
          <span className="font-semibold">nextjs</span>,{' '}
          <span className="font-semibold">react-native</span>, and{' '}
          <span className="font-semibold">expressjs</span>.
        </p>
        <hr className="border-gray-500" />
        <p>
          This website built for portfolio purpose and as a playground for me. I
          just want to apply what I&apos;ve learned about web development. Check{' '}
          <Link href="/projects">
            <a className="text-blue-500">projects</a>
          </Link>{' '}
          page to see the projects I&apos;ve worked. I think I will add blog
          into this website in the future, just to share what I&apos;ve learned
          about web development, or just share about my life in general.
        </p>
      </section>
      <h2 className="text-2xl font-bold mb-8">Experience</h2>
      <section className="flex flex-col gap-4 mb-8">
        {experiences.map((experience, index) => (
          <div key={index}>
            <h3 className="text-xl">
              {experience.role},{' '}
              <span className="text-gray-500">{experience.status}</span>
            </h3>
            <h4 className="font-semibold text-lg">
              {experience.company} —{' '}
              <span className="font-normal italic text-gray-500">
                {experience.startDate} – {experience.endDate}
              </span>
            </h4>
            <p>{experience.description}</p>
          </div>
        ))}
      </section>
      <h2 className="text-2xl font-semibold mb-8">Education</h2>
      <section className="flex flex-col gap-4 mb-8">
        <div>
          <h3 className="text-xl">Computer Science, Bachelor Degree</h3>
          <h4 className="font-semibold text-lg">
            Universitas Brawijaya —{' '}
            <span className="font-normal italic text-gray-500">
              Undergraduate
            </span>
          </h4>
        </div>
      </section>
    </Container>
  );
};

// export async function getServerSideProps(context: any) {}

About.getInitialProps = async (context: NextPageContext) => {
  return { experiences };
};

export default About;
