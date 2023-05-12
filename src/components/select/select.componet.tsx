import React, { useEffect } from "react";

import Select, { StylesConfig, SingleValue } from "react-select";

export type OptionType = {
  label: string;
  value: string;
  startValue: number;
  endValue: number;
};

type MySelectProps = {
  selectedOption: SingleValue<OptionType>;
  handleChange: (selectedOption: SingleValue<OptionType>) => void;
  options: OptionType[];
  placeholder: string;
};

const customStyles: StylesConfig<OptionType, false> = {
  option: (provided, state) => ({
    ...provided,

    backgroundColor: state.isSelected ? "#1a1a1a" : "transparent",
    color: state.isSelected ? "white" : "black",
    ":hover": {
      backgroundColor: state.isSelected ? "#1a1a1a" : "#f2f2f2",
      color: state.isSelected ? "white" : "black",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    minHeight: "30px",
    height: "30px",
    backgroundColor: state.isFocused ? "#f2f2f2" : "transparent",
    border: state.isFocused ? "2px solid #ff4d4d" : "2px solid #bfbfbf",
    boxShadow: state.isFocused ? "none" : "none",
    margin: "0 5px",
    borderRadius: "25px",
    ":hover": {
      border: "2px solid #ff4d4d",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  // singleValue: (provided, state) => ({
  //   ...provided,
  //   color: state.isSelected ? "white" : "black",
  // }),
};

const MySelect: React.FC<MySelectProps> = ({
  selectedOption,
  handleChange,
  options,
  placeholder,
}) => {
  useEffect(() => {
    if (selectedOption === null) {
    }
  }, [selectedOption]);
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      styles={customStyles}
      placeholder={placeholder}
      isClearable={true}
    />
  );
};

export default MySelect;
