import { type HTMLAttributes, type Ref } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

export const Card = ({ ref, className, ...props }: Props) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col gap-4 overflow-hidden rounded-xl bg-neutral-900 p-6 transition-all",
        // "border border-neutral-800 transition-all duration-200 hover:border-neutral-700",
        className,
      )}
      {...props}
    />
  );
};
