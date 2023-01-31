import type { NextPage } from 'next';

import Container from '@components/Container';
import Hero from '@components/Home/Hero';
import Links from '@components/Home/Links';

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Hero />
        <Links />
      </div>
    </Container>
  );
};

export default Home;
