import type { NextPage } from 'next';

import Container from '@components/Container';
import Hero from '@components/Home/Hero';

const Home: NextPage = () => {
  return (
    <Container>
      <Hero />
    </Container>
  );
};

export default Home;
