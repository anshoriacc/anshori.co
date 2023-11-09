"use client";

import { useEffect } from "react";

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="p-6 flex-1 flex flex-col justify-center items-center">
      <h2>Something went wrong.</h2>
    </main>
  );
};

export default Error;
