"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import "leaflet/dist/leaflet.css";

import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

const Map = dynamic(() => import("./map").then(comp => comp.Map), {
  ssr: false,
  loading: () => (
    <div
      className={cn(
        "group absolute z-401 flex size-full flex-col items-center justify-center bg-[#d4dadc] font-medium text-neutral-500 uppercase transition-all duration-300",
      )}>
      <span className="absolute top-0 right-1 text-3xl group-hover:rotate-12">
        🗺️
      </span>
      <span className="text-3xl font-black text-neutral-950">Jakarta</span>
      <span>Indonesia</span>
    </div>
  ),
});

export const Location = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="aspect-square w-[calc(50%-12px)] items-center justify-center p-0 duration-300 sm:w-48"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Map isZoomed={isHovered} />

      <div
        className={cn(
          "group absolute z-401 flex size-full flex-col items-center justify-center font-medium text-neutral-500 uppercase transition-all duration-300",
          "opacity-0 group-hover:opacity-100",
          "*:scale-75 *:transition-all *:duration-300 *:group-hover:scale-100",
        )}>
        <span className="absolute top-0 right-1 text-3xl group-hover:rotate-12">
          🗺️
        </span>
        <span className="text-3xl font-black text-neutral-950">Jakarta</span>
        <span>Indonesia</span>
      </div>
    </Card>
  );
};
