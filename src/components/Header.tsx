"use client";

import Link from "next/link";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header
      initial={{ width: 156, height: 48 }}
      whileHover={{ width: 320 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
      className="fixed left-1/2 top-4 flex -translate-x-1/2 items-center justify-between gap-3 rounded-2xl bg-black px-3 text-neutral-50 shadow">
      <Link href="/" className="group flex items-center gap-0.5">
        <svg className="h-6 w-24 fill-neutral-50">
          <text
            x={2}
            y={19}
            className="fill-neutral-50 stroke-2 text-2xl font-bold transition-all group-hover:fill-black group-hover:stroke-neutral-50"
            paintOrder="stroke fill">
            johndoe
          </text>
        </svg>
      </Link>

      <motion.div
        initial={{ height: 24, width: 24 }}
        className="rounded bg-neutral-50"
      />
    </motion.header>
  );
};

export default Header;

// <header className="fixed left-1/2 top-4 flex h-12 w-[156px] -translate-x-1/2 items-center justify-between gap-3 rounded-2xl bg-black px-3 text-neutral-50 shadow transition-all duration-300 hover:w-80">
//   <Link href="/" className="group flex items-center gap-0.5">
//     {/* <span className="relative flex size-4 items-center justify-center">
//     <span className="absolute inline-flex size-4 rounded-full duration- bg-red-400 group-hover:animate-ping" />
//     <span className="relative inline-flex size-4 rounded-full bg-red-500" />
//   </span> */}

//     <svg className="h-6 w-24 fill-neutral-50">
//       {/* <circle cx={12} cy={12} r={6} className="fill-red-500"></circle> */}
//       <text
//         x={2}
//         y={19}
//         className="fill-neutral-50 stroke-2 text-2xl font-bold transition-all group-hover:fill-black group-hover:stroke-neutral-50"
//         paintOrder="stroke fill">
//         johndoe
//         {/* <tspan className="fill-red-500 stroke-none">.</tspan> */}
//       </text>
//     </svg>
//   </Link>

//   <div className="size-6 rounded bg-neutral-50" />
// </header>
