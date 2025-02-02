import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getCurrentlyPlaying } from "@/data/spotify";
import { Profile } from "@/components/profile";
import { Spotify } from "@/components/spotify";
import { Social } from "@/components/social";
import { Resume } from "@/components/resume";
import { Location } from "@/components/location";
import { MoreTiles } from "@/components/more";

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["currently-playing"],
    queryFn: getCurrentlyPlaying,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex flex-wrap gap-6">
        <Profile />

        <Location />
        <Resume />
        <Social />
        <Spotify />
        <MoreTiles />
      </main>
    </HydrationBoundary>
  );
}
