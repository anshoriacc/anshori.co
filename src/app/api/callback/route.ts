import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from "@/constants/env";
import { NextRequest } from "next/server";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const BASIC_AUTH = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
).toString("base64");

export async function GET(request: NextRequest) {
  console.log("request==", request.nextUrl.searchParams);
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  // const requestToken = await fetch(`${TOKEN_ENDPOINT}`, {
  //   body: new URLSearchParams({
  //     code: code || '',
  //     grant_type: "authorization_code",
  //     redirect_uri: "http://localhost:3000/api/callback",
  //   }).toString(),
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     Authorization: `Basic ${BASIC_AUTH}`,
  //   },
  //   cache: "no-cache",
  //   next: { revalidate: 0 },
  // }).then(res => res.json());
  const requestToken = await fetch(
    `${TOKEN_ENDPOINT}?grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${BASIC_AUTH}`,
      },
      cache: "no-cache",
      next: { revalidate: 0 },
    },
  ).then(res => res.json());

  console.log("requestToken==", requestToken);

  // const requestToken = await fetch(
  //   `https://accounts.spotify.com/authorize?response_type=code&client_id=18948964546f458282962c91794a24a9&scope=user-read-currently-playing user-read-recently-played&redirect_uri=http://localhost:3000/api/currently-playing`,
  //   {
  //     cache: "no-cache",
  //     next: { revalidate: 0 },
  //   },
  // )
  //   .then(async res => {
  //     console.log(await res.text());
  //   })
  //   .catch(err => {
  //     console.log("err==", err);
  //   });

  // const { access_token } = requestToken;

  // const currentlyPlaying = await fetch(CURRENTLY_PLAYING_ENDPOINT, {
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     Authorization: `Bearer ${access_token}`,
  //   },
  //   cache: "no-cache",
  //   next: { revalidate: 0 },
  // }).then(async res => {
  //   const text = await res.text();
  //   return text ? JSON.parse(text) : { isPlaying: false };
  // });

  return Response.json({
    // BASE_URL,
    // SPOTIFY_CLIENT_ID,
    // SPOTIFY_CLIENT_SECRET,
    // SPOTIFY_REFRESH_TOKEN,
  });
}
