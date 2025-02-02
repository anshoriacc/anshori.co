import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from "@/constants/env";

const CURRENTLY_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=5`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const BASIC_AUTH = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
).toString("base64");

export const revalidate = 0;

export async function GET() {
  const requestToken = await fetch(
    `${TOKEN_ENDPOINT}?grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${BASIC_AUTH}`,
      },
    },
  ).then(res => res.json());

  const { access_token } = requestToken;

  const currentlyPlaying = await fetch(CURRENTLY_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then(async res => {
      const text = await res.text();
      return text ? JSON.parse(text) : null;
    })
    .catch(() => null);

  const recentlyPlayed = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then(async res => {
      const text = await res.text();
      return text ? JSON.parse(text) : null;
    })
    .catch(() => null);

  return Response.json({
    currentlyPlaying,
    recentlyPlayed,
  });
}
