import Link from "next/link";
import { SiReact, SiNextdotjs } from "react-icons/si";

const Introduction: React.FC = () => {
  return (
    <section>
      <article className="text-justify">
        Hello World! I&apos;m Achmad Anshori, a software engineer with over 2
        years of experience, especially in frontend side using{" "}
        <Link
          href="https://react.dev/"
          target="_blank"
          className="underline inline-block group"
        >
          <span className="flex gap-1 items-center">
            <SiReact
              color="#42bdf0"
              className="group-hover:animate-spin-slow"
            />{" "}
            reactjs
          </span>
        </Link>
        ,{" "}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          className="underline inline-block group"
        >
          <span className="flex gap-1 items-center">
            <SiNextdotjs className="group-hover:animate-pulse" /> nextjs
          </span>
        </Link>
        , and{" "}
        <span className="whitespace-nowrap">
          <Link
            href="https://reactnative.dev/"
            target="_blank"
            className="underline inline-block group"
          >
            <span className="flex gap-1 items-center">
              <SiReact
                color="#42bdf0"
                className="group-hover:animate-spin-slow"
              />{" "}
              react-native
            </span>
          </Link>
          .{" "}
        </span>
        Currently based in Jakarta, Indonesia.
      </article>
    </section>
  );
};

export default Introduction;
