"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      <h2>Something went wrong, or possibly not found.</h2>
    </main>
  );
}
