"use client";

import Clock from "../Clock";

const ClockWrapper: React.FC = () => {
  return (
    <section className="flex gap-1 items-center">
      <Clock />
    </section>
  );
};

export default ClockWrapper;
