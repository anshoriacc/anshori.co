import axios from 'axios';

export async function fetcher(url: string) {
  const res = await axios.get(url);
  return res.data;
}

export const axiosServer = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api`,
});
