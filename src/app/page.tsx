import { NextPage } from "next";

import ClockWrapper from "@/components/home/ClockWrapper";
import Introduction from "@/components/home/Introduction";
import Social from "@/components/home/Social";
import Spotify from "@/components/home/Spotify";

const HomePage: NextPage = () => {
  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      <ClockWrapper />
      <Introduction />
      <Social />
      <Spotify />
    </main>
  );
};

export default HomePage;
