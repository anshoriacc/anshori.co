import type { NextPage } from 'next';
import cn from 'classnames';

import Container from '@components/Container';
import Hero from '@components/home/Hero';
import Projects from '@components/home/Projects';
import CurrentlyPlaying from '@components/home/CurrentlyPlaying';

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Hero />
        <section className={cn('grid gap-4', 'sm:grid-cols-[2fr_3fr]')}>
          <Projects />
          <CurrentlyPlaying />
        </section>
      </div>
    </Container>
  );
};

export default Home;
