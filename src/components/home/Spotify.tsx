"use client";

import Link from "next/link";
import useSWR from "swr";

import { FaSpotify } from "react-icons/fa";
import { fetcher } from "@/services/spotifyApi";

const Spotify: React.FC = () => {
  const { isLoading, data } = useSWR("api/currently-playing", fetcher);

  return (
    <section className="mt-8 grid grid-cols-[min-content_1fr] gap-2 items-center">
      <Link
        href="/spotify"
        title="go to my spotify profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify className="text-2xl text-[#1DB954]" />
      </Link>
      {isLoading ? (
        <div className="animate-pulse w-60 bg-gray-500 rounded h-4" />
      ) : (
        <p className="line-clamp-2">
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
    </section>
  );
};

export default Spotify;
