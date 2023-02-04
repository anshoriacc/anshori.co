import axios from 'axios';

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

const CURRENTLY_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

export const getAccessToken = async () => {
  const response = await axios(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${basic}`,
    },
    params: {
      grant_type: 'refresh_token',
      refresh_token,
    },
  });

  return response.data;
};

export const getCurrentlyPlaying = async () => {
  const { access_token } = await getAccessToken();

  return axios(CURRENTLY_PLAYING_ENDPOINT, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
