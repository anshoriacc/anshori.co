import type { NextPage, NextPageContext } from 'next';
import clsx from 'clsx';

import { ProjectsProps } from 'src/types';

import Container from '@components/Container';
import Card from '@components/projects/Card';

const projects = [
  {
    title: 'anshori.co',
    image: '/android-chrome-512x512.png',
    description: 'My personal and portfolio website.',
    year: '2022',
    url: '/',
    repositoryUrl: 'https://github.com/anshoriacc/anshori.co',
  },
  {
    title: 'Madura Tourism Centre',
    image: '/images/maduratourismcentre.png',
    description: 'Information page of Madura tourism, history and culture.',
    year: '2022',
    url: 'https://maduratourismcentre.id/',
    repositoryUrl: '',
  },
];

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <Container title="Projects">
      <h1 className="text-2xl font-bold mb-8">Projects</h1>
      <section className={clsx('grid gap-4', 'sm:grid-cols-2')}>
        {projects.map((project, index) => (
          <Card data={project} key={index} />
        ))}
      </section>
    </Container>
  );
};

Projects.getInitialProps = async (context: NextPageContext) => {
  return { projects };
};

export default Projects;
