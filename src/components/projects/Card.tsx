import Image from 'next/image';
import clsx from 'clsx';

import { RiExternalLinkLine } from 'react-icons/ri';

import { Project } from 'src/types';

const Card = ({ data }: { data: Project }) => {
  return (
    <div
      className={clsx(
        'relative p-4 pb-12 h-[164px] transition-all rounded-2xl bg-gray-0',
        'dark:bg-gray-850'
      )}
    >
      <time className="text-sm text-gray-500">{data.year}</time>
      <div className="grid grid-cols-[36px_1fr] gap-4">
        <div className="relative aspect-square self-center">
          <Image src={data.image} alt={data.title} layout="fill" />
        </div>
        <div>
          <a
            href={data.url ? data.url : undefined}
            title={`go to ${data.title}`}
            target={data.url !== '/' ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            <h2
              className={clsx(
                'text-lg font-bold transition-all line-clamp-1',
                'hover:underline'
              )}
            >
              {data.title}
            </h2>
          </a>
          <p title={data.description} className="text-gray-500 line-clamp-2">
            {data.description}
          </p>
        </div>
      </div>
      {data.repositoryUrl ? (
        <a
          href={data.repositoryUrl}
          title={`go to ${data.title} repository`}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            'absolute right-4 bottom-4 px-2 py-1 text-sm flex gap-1 items-center rounded-lg transition-all bg-white border-2 border-white',
            'dark:bg-gray-900 dark:border-gray-900',
            'hover:border-gray-200 dark:hover:border-gray-700'
          )}
        >
          Source
          <RiExternalLinkLine />
        </a>
      ) : null}
    </div>
  );
};

export default Card;
