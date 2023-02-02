import { NextPage } from 'next';
import cn from 'classnames';

import { BiCurrentLocation, BiDownload } from 'react-icons/bi';

import Buttons from './Buttons';

const Hero: NextPage = () => {
  return (
    <section
      className={cn(
        'p-4 items-center transition-all bg-gray-0 rounded-2xl cursor-default',
        'dark:bg-gray-850'
      )}
    >
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
      <Buttons />
    </section>
  );
};

export default Hero;
