import React, { useState } from "react";

function FilterSection({  getAll,filterOptions,onCategoryChange }) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const handleCheckboxChange = (value) => {
    setSelectedFilter(value === selectedFilter ? null : value);
    if (value) {
      onCategoryChange(value);
    } else getAll();
  };

  return (
      <div className="flex border-t mx-6 pt-4 overflow-x-auto sticky top-20 bg-white pb-3 hide-scrollbar">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleCheckboxChange(option.value)}
            className={`p-2 whitespace-nowrap  ${selectedFilter === option.value ? "text-ocmblue border-t-2 border-ocmblue" : " text-black"}`}>
            {option.label}
          </button>
        ))}
      </div>
  );
}

export default FilterSection;
