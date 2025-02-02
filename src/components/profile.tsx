import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "./ui/background-beams";

export const Profile = () => {
  return (
    <Card className="h-48 w-full gap-1 sm:w-[calc(100%-216px)]">
      <div className="flex flex-col z-1">
        <h1 className="text-xl font-bold">Achmad Anshori</h1>
        <h2>
          <span className="text-lg font-semibold text-neutral-500">
            Software Engineer, Frontend
          </span>
        </h2>
      </div>

      <div className="h-[1px] bg-neutral-800 z-1" />

      <p
        className={cn(
          "text-neutral-500 z-1",
          "[&_span:hover]:text-neutral-50 [&_span:hover]:transition-all [&_span:hover]:duration-300",
        )}>
        a <span>software engineer</span> with{" "}
        <span>3 years of hands on experience</span>. Interested in{" "}
        <span>react</span>, <span>next.js</span>, and <span>node.js</span>.
      </p>

      <BackgroundBeams className="z-0"/>
    </Card>
  );
};
