"use client";

import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

export const Spotify = () => {
  return (
    <Card
      className={cn(
        "relative z-0 flex flex-col gap-4 overflow-hidden rounded-xl bg-gradient-to-br from-transparent from-20% to-[#25d865]/25 p-6 transition-all",
      )}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="size-10">
        <path
          fill="#25d865"
          d="M16 0C7.197 0 0 7.197 0 16s7.197 16 16 16s16-7.197 16-16S24.88 0 16 0m7.36 23.12c-.319.479-.881.64-1.36.317c-3.76-2.317-8.479-2.797-14.083-1.52c-.557.165-1.037-.235-1.199-.72c-.156-.557.24-1.036.719-1.197c6.084-1.36 11.365-.803 15.521 1.76c.563.24.64.88.401 1.36zm1.921-4.401c-.401.563-1.12.803-1.683.401c-4.317-2.641-10.88-3.437-15.916-1.839c-.641.156-1.365-.161-1.521-.803c-.161-.64.156-1.359.797-1.52c5.844-1.761 13.041-.876 18 2.161c.484.24.724 1.041.323 1.599zm.162-4.479c-5.125-3.043-13.683-3.36-18.563-1.839c-.801.239-1.599-.24-1.839-.964c-.239-.797.24-1.599.959-1.839c5.683-1.681 15.041-1.359 20.964 2.161c.719.401.957 1.36.557 2.079c-.401.563-1.36.801-2.079.401z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-8">
        <rect
          width="4"
          height="12"
          x="1"
          y="6"
          fill="currentColor"
          rx="2"
          ry="2">
          <animate
            attributeName="y"
            begin="0s"
            dur="0.6s"
            values="6;4;6;8;6"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            begin="0s"
            dur="0.6s"
            values="12;16;12;8;12"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          width="4"
          height="12"
          x="10"
          y="6"
          fill="currentColor"
          rx="2"
          ry="2">
          <animate
            attributeName="y"
            begin="0.2s"
            dur="0.6s"
            values="6;8;6;4;6"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            begin="0.2s"
            dur="0.6s"
            values="12;8;12;16;12"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          width="4"
          height="12"
          x="19"
          y="6"
          fill="currentColor"
          rx="2"
          ry="2">
          <animate
            attributeName="y"
            begin="0.4s"
            dur="0.6s"
            values="6;4;6;8;6"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            begin="0.4s"
            dur="0.6s"
            values="12;16;12;8;12"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </Card>
  );
};
