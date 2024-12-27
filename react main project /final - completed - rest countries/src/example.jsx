
import React from 'react';
import { useDarkMode } from './DarkModeContext';

const AnotherComponent = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}>
      <h1 className="text-3xl">This is example</h1>
    </div>
  );
};

export default AnotherComponent;
