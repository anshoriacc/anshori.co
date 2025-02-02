import { TCurrentlyPlaying, TRecentlyPlayed } from "./type";

export const getCurrentlyPlaying =
  async (): Promise<TCurrentlyPlayingResponse> => {
    const res = await fetch("/api/currently-playing");
    const data = await res.json();

    return data;
  };

type TCurrentlyPlayingResponse = {
  currentlyPlaying: TCurrentlyPlaying | null;
  recentlyPlayed: TRecentlyPlayed | null;
};
