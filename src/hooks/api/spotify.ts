import { getCurrentlyPlaying } from "@/data/spotify";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentlyPlayingQuery = () =>
  useQuery({
    queryKey: ["currently-playing"],
    queryFn: getCurrentlyPlaying,
    refetchInterval: 30 * 1000, // 30 seconds
  });
