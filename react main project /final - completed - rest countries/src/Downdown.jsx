import React from "react";
import { useDarkMode } from "./context";


const Dropdown = ({ id, value, onChange, options, disabled, placeholder }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={
        isDarkMode
          ? "flex items-center bg-gray-400 mb-4 sm:mb-0 border-2 border-solid border-white rounded-lg"
          : "flex items-center bg-gray-100 mb-4 sm:mb-0 border-2 border-solid border-black rounded-lg"
      }
    >
      <select
        id={id}
        className="bg-transparent outline-none text-black-800 w-full rounded-lg p-2"
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
