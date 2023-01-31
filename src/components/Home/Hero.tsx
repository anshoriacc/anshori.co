import { NextPage } from 'next';
import cn from 'classnames';

import { BiDownload } from 'react-icons/bi';

import Clock from './Clock';

const Hero: NextPage = () => {
  return (
    <section
      className={cn(
        'p-4 flex justify-between gap-4 items-center transition-all bg-gray-0 rounded-2xl',
        'dark:bg-gray-850'
      )}
    >
      <div>
        <div className="flex gap-2 items-baseline">
          <h1 className="font-serif text-2xl font-bold">Achmad Anshori</h1>
          <h2 className="text-gray-500 text-lg italic">arik</h2>
        </div>
        <p className="text-gray-500 text-lg italic">Software Engineer</p>
        <p className="-ml-1 text-gray-500">
          📍Malang, Indonesia (UTC+7) <Clock />
        </p>
      </div>
      <a
        href="/resume.pdf"
        download="resume-achmad-anshori"
        className={cn(
          'jutify-self-auto p-2 rounded-lg flex gap-1 items-center transition-all border-2 bg-white border-white',
          'dark:bg-gray-900 dark:border-gray-900',
          'hover:border-gray-200 dark:hover:border-gray-700'
        )}
      >
        <BiDownload />
        Resume
      </a>
    </section>
  );
};

export default Hero;
