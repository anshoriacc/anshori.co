import React, { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Reducers } from 'src/redux/types';

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useSelector((state: Reducers) => state.theme);
  const [myTheme, setMyTheme] = useState<string>('');

  useEffect(() => {
    setMyTheme(theme);
  }, [theme]);

  return (
    <div className={myTheme}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all">
        {children}
      </div>
    </div>
  );
};

export default ThemeWrapper;
