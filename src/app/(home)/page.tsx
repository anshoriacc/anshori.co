import { GitHub } from "@/components/github";
import { Profile } from "@/components/profile";
import { Spotify } from "@/components/spotify";

export default function HomePage() {
  return (
    <main className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-[3fr_1fr]">
        <Profile />
        <GitHub />
      </div>
      <Spotify />
    </main>
  );
}
