import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed left-1/2 top-4 flex h-12 w-[156px] -translate-x-1/2 items-center justify-between gap-3 rounded-2xl bg-black px-3 text-neutral-50 shadow transition-all hover:w-80 duration-300">
      <Link href="/" className="group flex items-center gap-0.5">
        {/* <span className="relative flex size-4 items-center justify-center">
          <span className="absolute inline-flex size-4 rounded-full duration- bg-red-400 group-hover:animate-ping" />
          <span className="relative inline-flex size-4 rounded-full bg-red-500" />
        </span> */}

        <svg className="h-6 w-24 fill-neutral-50">
          {/* <circle cx={12} cy={12} r={6} className="fill-red-500"></circle> */}
          <text
            x={2}
            y={19}
            className="fill-neutral-50 stroke-2 text-2xl font-bold transition-all group-hover:fill-black group-hover:stroke-neutral-50"
            paintOrder="stroke fill">
            anshori
            {/* <tspan className="fill-red-500 stroke-none">.</tspan> */}
          </text>
        </svg>
      </Link>

      <div className="size-6 rounded bg-neutral-50" />
    </header>
  );
};

export default Header;
