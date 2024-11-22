import React from "react";
import Select from "react-select";

const options = [
  { value: "alphabets", label: "Alphabets" },
  { value: "numbers", label: "Numbers" },
  { value: "highestLowercase", label: "Highest Lowercase Alphabet" },
];

const Dropdown = ({ setSelectedOptions }) => {
  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions.map((option) => option.value));
  };

  return (
    <Select
      isMulti
      options={options}
      onChange={handleChange}
      placeholder="Select options"
    />
  );
};

export default Dropdown;
