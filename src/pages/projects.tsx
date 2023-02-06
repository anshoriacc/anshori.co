import type { NextPage } from 'next';
import Image from 'next/image';
import cn from 'classnames';

import { RiExternalLinkLine } from 'react-icons/ri';

import Container from '@components/Container';
import Card from '@components/projects/Card';

const projects = [
  {
    title: 'anshori.co',
    image: '/android-chrome-512x512.png',
    description: 'My personal and portfolio website.',
    year: '2022',
    url: 'http://anshori.vercel.app/',
    repositoryUrl: 'https://github.com/anshoriacc/anshori.co',
  },
  {
    title: 'Madura Tourism Centre',
    image: require('@assets/images/maduratourismcentre.png'),
    description: 'Information page of Madura tourism, history and culture.',
    year: '2022',
    url: 'https://maduratourismcentre.id/',
    repositoryUrl: '',
  },
];

const Projects: NextPage = () => {
  return (
    <Container title="Projects">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <section className={cn('grid gap-4 cursor-default', 'sm:grid-cols-2')}>
        {projects.map((project, index) => (
          <Card data={project} key={index} />
        ))}
      </section>
    </Container>
  );
};

export default Projects;
