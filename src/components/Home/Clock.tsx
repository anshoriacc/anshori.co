import { useState, useEffect } from 'react';

const Clock = () => {
  const [hydrated, setHydrated] = useState(false);
  const [date, setDate] = useState(() => {
    if (hydrated) return new Date();
  });

  const refreshClock = () => setDate(new Date());

  useEffect(() => {
    setHydrated(() => true);
    if (hydrated) refreshClock();
  }, [hydrated]);

  useEffect(() => {
    if (hydrated) {
      const timerId = setInterval(refreshClock, 1000);

      return () => {
        clearInterval(timerId);
      };
    }
  });

  return (
    <span>
      {date
        ? `${`0${date.getHours()}`.slice(-2)}:${`0${date.getMinutes()}`.slice(
            -2
          )}:${`0${date.getSeconds()}`.slice(-2)}`
        : null}
    </span>
  );
};

export default Clock;
