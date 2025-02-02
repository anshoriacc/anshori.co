import { type HTMLAttributes, type Ref } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
  type?: "default" | "link";
};

export const Card = ({
  ref,
  className,
  children,
  type = "default",
  ...props
}: Props) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-neutral-900 p-6 transition-all",
        className,
      )}
      {...props}>
      {children}

      {type === "link" && (
        <div className="absolute top-3 right-3 rounded-full p-1 opacity-0 outline outline-neutral-500 transition-all group-hover:opacity-100 hover:outline-2 hover:outline-neutral-50 hover:**:fill-neutral-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-5 *:fill-neutral-500 *:transition-all *:duration-300">
            <path d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" />
          </svg>
        </div>
      )}
    </div>
  );
};
