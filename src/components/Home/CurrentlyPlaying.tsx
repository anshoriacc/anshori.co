import axios from 'axios';
import cn from 'classnames';
import { useEffect } from 'react';
import useSWR from 'swr';

import { FaSpotify } from 'react-icons/fa';
import fetcher from 'src/lib/fetcher';

const CurrentlyPlaying = () => {
  const { data, isLoading } = useSWR('/api/currently-playing', fetcher);

  return (
    <div
      className={cn(
        'group relative h-[8rem] p-4 flex justify-start gap-2 items-center text-lg transition-all rounded-2xl cursor-default bg-gray-0 border-2 border-white',
        'dark:bg-gray-850 dark:border-gray-900',
        'sm:text-xl'
      )}
    >
      <span className="text-[#1ccc5b] text-3xl">
        <FaSpotify />
      </span>
      {isLoading ? (
        <div className="animate-pulse grow bg-gray-500 rounded-full h-6"></div>
      ) : (
        <p>
          <a
            href={data?.isPlaying ? data.songUrl : '#'}
            target="_blank"
            rel="noopener noreferrer"
            title={
              data?.isPlaying ? `play ${data.title} in spotify web player` : ''
            }
          >
            <span className="font-bold">
              {data?.isPlaying ? data.title : 'Not Playing'}
            </span>
            {` – `}
            <span className="text-gray-500">
              {data?.isPlaying ? data.artist : 'Spotify'}
            </span>
          </a>
        </p>
      )}
      <span
        className={cn(
          'invisible absolute bottom-2 right-2 p-1 rounded-lg flex gap-1 items-center text-xs transition-all bg-white',
          'dark:bg-gray-900',
          'group-hover:visible'
        )}
      >
        what I am currently listening to in spotify.
      </span>
    </div>
  );
};

export default CurrentlyPlaying;
