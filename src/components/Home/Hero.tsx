import { NextPage } from 'next';
import cn from 'classnames';

import { BiCurrentLocation, BiDownload } from 'react-icons/bi';

import Links from './Links';

const Hero: NextPage = () => {
  return (
    <section
      className={cn(
        'p-4 flex justify-between gap-4 items-center transition-all bg-gray-0 rounded-2xl cursor-default',
        'dark:bg-gray-850'
      )}
    >
      <div className="left">
        <div className="flex gap-2 items-baseline">
          <h1 className={cn('font-serif text-lg font-bold', 'sm:text-2xl')}>
            Achmad Anshori
          </h1>
          <h2 className={cn('text-gray-500 text-base italic', 'sm:text-lg')}>
            arik
          </h2>
        </div>
        <p className={cn('text-gray-500 text-base italic', 'sm:text-lg')}>
          Software Engineer
        </p>
        <p className="text-gray-500 flex gap-1 items-center">
          <span className="text-sky-800">
            <BiCurrentLocation />
          </span>
          Malang, Indonesia
        </p>
        <Links />
      </div>
      <div className="right">
        <a
          href="/resume.pdf"
          download="resume-achmad-anshori"
          title="download resume"
          className={cn(
            'jutify-self-auto p-2 h-10 rounded-lg flex gap-1 items-center transition-all border-2 bg-white border-white',
            'dark:bg-gray-900 dark:border-gray-900',
            'hover:border-gray-200 dark:hover:border-gray-700'
          )}
        >
          <span className={cn('text-xl', 'sm:text-base')}>
            <BiDownload />
          </span>
          <span className={cn('hidden', 'sm:inline')}>Resume</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
