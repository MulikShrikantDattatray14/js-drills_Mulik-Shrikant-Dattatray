
import React from 'react';
import { DarkModeProvider, useDarkMode } from './context';
import { FaSun, FaMoon } from 'react-icons/fa'; 



const Toggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div >
      <div className=" flex items-center justify-center">
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-blue-500 text-white shadow-lg"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
