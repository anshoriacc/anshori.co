import type { NextPage, NextPageContext } from 'next';
import clsx from 'clsx';

import { HomeProps } from 'src/types';

import Container from '@components/Container';
import Hero from '@components/home/Hero';
import Projects from '@components/home/Projects';
import CurrentlyPlaying from '@components/home/CurrentlyPlaying';
import { axiosServer } from 'src/lib/axios';

const Home: NextPage<HomeProps> = ({ currentlyPlayingData }) => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <section className={clsx('grid gap-4', 'sm:grid-cols-[2fr_1fr]')}>
          <Hero />
          <Projects />
        </section>
        <CurrentlyPlaying data={currentlyPlayingData} />
      </div>
    </Container>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const resSpotify = await axiosServer.get('/currently-playing');
  const currentlyPlayingData = resSpotify.data;

  return {
    props: { currentlyPlayingData },
  };
}

export default Home;
