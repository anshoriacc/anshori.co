import { NextPage } from 'next';
import clsx from 'clsx';

import { BiCurrentLocation } from 'react-icons/bi';

import Buttons from './Buttons';

const Hero: NextPage = () => {
  return (
    <section
      className={clsx(
        'p-4 items-center transition-all bg-gray-0 rounded-2xl',
        'dark:bg-gray-850'
      )}
    >
      <div className="flex gap-2 items-baseline">
        <h1 className="font-serif text-2xl font-bold">Achmad Anshori</h1>
        <h2 className="text-gray-500 text-lg italic">arik</h2>
      </div>
      <p className="text-gray-500 text-lg italic">
        Software Engineer, Frontend
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
