'use client';
import React, { useState } from "react";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSectionProps {
  getAll: () => void;
  filterOptions: FilterOption[];
  onCategoryChange: (category: string) => void;
  filterStatus: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({ getAll, filterOptions, onCategoryChange ,filterStatus}) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>("all");

  const handleCheckboxChange = (value: string) => {
    const newFilter = value === selectedFilter ? null : value;
    setSelectedFilter(newFilter);
    if (newFilter) {
      onCategoryChange(newFilter);
    } else {
      getAll();
    }
  };

  return (
    
    <div className="flex z-10 overflow-x-auto sticky top-20  hide-scrollbar w-full bg-white max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      {filterOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => {
            handleCheckboxChange(option.value)
          }}
          className={`p-2 whitespace-nowrap ${selectedFilter === option.value ? "text-ocmblue border-t-2 border-ocmblue" : "text-black"}`}
          disabled={filterStatus === "loading"}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterSection;
