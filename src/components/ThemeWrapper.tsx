import React, { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { Reducers } from 'src/redux/types';

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useSelector((state: Reducers) => state.theme);
  const [myTheme, setMyTheme] = useState<string>('');

  useEffect(() => {
    setMyTheme(theme);
  }, [theme]);

  return (
    <div className={myTheme}>
      <div
        className={cn(
          'bg-white text-gray-800 transition-all',
          'dark:bg-gray-900 dark:text-gray-100'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ThemeWrapper;
