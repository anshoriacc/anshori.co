import { getCurrentlyPlaying } from "@/utils/spotifyApi";

export type TCurrentlyPlayingType = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  songUrl?: string;
};

export async function GET() {
  const response = await getCurrentlyPlaying();

  if (!response.ok) {
    return Response.json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return Response.json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(", ");
  const songUrl = song.item.external_urls.spotify;

  return Response.json({ isPlaying, title, artist, songUrl });
}
