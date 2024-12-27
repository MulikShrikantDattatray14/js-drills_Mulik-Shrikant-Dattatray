import React from "react";


const DropdownOption = ({ option, index }) => {
  return typeof option === "object" ? (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ) : (
    <option key={index} value={option}>
      {option}
    </option>
  );
};


const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="flex items-center mb-4 sm:mb-0">
      <label className="text-sm mr-2">{label}</label>
      <select
        className="bg-gray-100 text-black p-2 rounded-lg"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{label}</option>
        {options.map((option, index) => (
          <DropdownOption key={index} option={option} index={index} />
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

