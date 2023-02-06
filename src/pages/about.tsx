import type { NextPage } from 'next';

import Container from '@components/Container';

const About: NextPage = () => {
  return (
    <Container title="About">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <section>
        <p>
          Hi, I&apos;m Achmad Anshori, a{' '}
          <span className="font-semibold">Software Engineer </span>
          based in Malang, Indonesia.
        </p>
      </section>
    </Container>
  );
};

export default About;
