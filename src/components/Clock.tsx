import { useState, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

import {
  WiTime1,
  WiTime10,
  WiTime11,
  WiTime12,
  WiTime2,
  WiTime3,
  WiTime4,
  WiTime5,
  WiTime6,
  WiTime7,
  WiTime8,
  WiTime9,
} from 'react-icons/wi';

const Clock = () => {
  const [hydrated, setHydrated] = useState(false);
  const [date, setDate] = useState(() => {
    if (hydrated) return dayjs().tz('Asia/Jakarta');
  });

  const refreshClock = () => setDate(dayjs().tz('Asia/Jakarta'));

  const { hours, minutes, seconds } = useMemo(() => {
    return {
      hours: `0${date?.hour()}`.slice(-2),
      minutes: `0${date?.minute()}`.slice(-2),
      seconds: `0${date?.second()}`.slice(-2),
    };
  }, [date]);

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

  return date ? (
    <span className="flex gap-1 items-center">
      {/* easter egg: the clock shows different icon each hour */}
      <span className="text-xl">
        {hours === '00' || hours === '12' ? (
          <WiTime12 />
        ) : hours === '01' || hours === '13' ? (
          <WiTime1 />
        ) : hours === '02' || hours === '14' ? (
          <WiTime2 />
        ) : hours === '03' || hours === '15' ? (
          <WiTime3 />
        ) : hours === '04' || hours === '16' ? (
          <WiTime4 />
        ) : hours === '05' || hours === '17' ? (
          <WiTime5 />
        ) : hours === '06' || hours === '18' ? (
          <WiTime6 />
        ) : hours === '07' || hours === '19' ? (
          <WiTime7 />
        ) : hours === '08' || hours === '20' ? (
          <WiTime8 />
        ) : hours === '09' || hours === '21' ? (
          <WiTime9 />
        ) : hours === '10' || hours === '22' ? (
          <WiTime10 />
        ) : hours === '11' || hours === '23' ? (
          <WiTime11 />
        ) : (
          <WiTime3 />
        )}
      </span>
      <span>{`${hours}:${minutes}:${seconds}`}</span>
    </span>
  ) : null;
};

export default Clock;
