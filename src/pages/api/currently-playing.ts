// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { getCurrentlyPlaying } from 'src/lib/spotify';

import { CurrentlyPlayingType } from 'src/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CurrentlyPlayingType>
) {
  const response = await getCurrentlyPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.data;

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(', ');
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({ isPlaying, title, artist, songUrl });
}
