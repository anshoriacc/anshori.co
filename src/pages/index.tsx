import type { NextPage } from 'next';
import cn from 'classnames';

import { BiLinkExternal } from 'react-icons/bi';

import Container from '@components/Container';
import Hero from '@components/Home/Hero';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Hero />
        <Link href="/projects">
          <a
            title="Projects"
            className={cn(
              'group relative h-[96px] p-4 flex justify-start gap-4 items-center text-xl font-bold transition-all rounded-2xl bg-gray-0 border-2 border-white',
              'dark:bg-gray-850 dark:border-gray-900',
              'hover:text-lg hover:border-gray-200 dark:hover:border-gray-700'
            )}
          >
            Link to projects
            <span
              className={cn(
                'invisible absolute bottom-2 right-2 p-1 rounded-lg flex gap-1 items-center text-xs transition-all bg-white',
                'dark:bg-gray-900',
                'group-hover:visible'
              )}
            >
              <BiLinkExternal />
            </span>
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
