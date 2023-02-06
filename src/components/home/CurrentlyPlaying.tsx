import cn from 'classnames';
import useSWR from 'swr';

import { FaSpotify } from 'react-icons/fa';

import fetcher from 'src/lib/fetcher';

const CurrentlyPlaying = () => {
  const { data, isLoading } = useSWR('/api/currently-playing', fetcher);

  return (
    <div
      className={cn(
        'group relative h-[8rem] p-4 flex justify-start gap-2 items-center text-xl transition-all rounded-2xl cursor-default bg-gray-0 border-2 border-white',
        'dark:bg-gray-850 dark:border-gray-900'
      )}
    >
      <a
        href="https://open.spotify.com/user/312wkcarckpr64ibtf3jvgnvpnyi"
        title='go to my spotify profile'
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1ccc5b] text-3xl"
      >
        <FaSpotify />
      </a>
      {isLoading ? (
        <div className="animate-pulse grow bg-gray-500 rounded h-6" />
      ) : (
        <p className="text-ellipsis">
          {data?.isPlaying ? (
            <a
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`open ${data.title} by ${data.artist} in spotify web player`}
            >
              <span className="font-bold">{data.title}</span>
              {` – `}
              <span className="text-gray-500">{data.artist}</span>
            </a>
          ) : (
            <>
              <span className="font-bold">Not Playing</span>
              {` – `}
              <span className="text-gray-500">Spotify</span>
            </>
          )}
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
