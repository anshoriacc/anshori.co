import { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => setDate(new Date());

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</span>
  );
};
export default Clock;
