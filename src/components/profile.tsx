import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

export const Profile = () => {
  return (
    <Card className="gap-2">
      <h1 className="text-xl font-semibold">
        <span className="font-bold">Achmad Anshori</span>{" "}
        <span className="text-neutral-500">– Software Engineer, Frontend</span>
      </h1>

      <div className="h-[1] bg-neutral-800" />

      <p
        className={cn(
          "text-neutral-500",
          "[&_span:hover]:text-neutral-50 [&_span:hover]:transition-all",
        )}>
        a <span>software engineer</span> with{" "}
        <span>3 years of hands on experience</span>. Interested in{" "}
        <span>react.js</span>, <span>next.js</span>, and <span>node.js</span>.
      </p>
    </Card>
  );
};
