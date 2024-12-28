
import React from "react";
import Toggle from "./toggle";
import { useDarkMode } from "./context";

const Header = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="app">
      <div
        className={
          isDarkMode
            ? "bg-gray-800 text-white flex justify-between items-center p-4  mx-2 mb-5 "
            : "bg-white text-black flex justify-between items-center p-4  mx-2 mb-5 "
        }
      >
        <h1
          className={
            isDarkMode
              ? "bg-gray-800 text-white text-2xl font-semibold "
              : "bg-white text-black text-2xl font-semibold "
          }
        >
          Where in the World ?
        </h1>
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
