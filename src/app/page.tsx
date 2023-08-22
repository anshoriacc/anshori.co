import ClockWrapper from "@/components/home/ClockWrapper";
import Introduction from "@/components/home/Introduction";
import Social from "@/components/home/Social";
import Projects from "@/components/home/Projects";
import Experiences from "@/components/home/Experiences";
import Education from "@/components/home/Education";
import Spotify from "@/components/home/Spotify";

const HomePage: React.FC = () => {
  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      <ClockWrapper />
      <Introduction />
      <Social />
      <Projects />
      <Experiences />
      <Education />
      <Spotify />
    </main>
  );
};

export default HomePage;
