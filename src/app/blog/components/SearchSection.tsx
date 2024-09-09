import React, { useState, ChangeEvent, FormEvent } from "react";

interface SearchSectionProps {
  search: (query: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ search }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search(searchQuery);
  };

  return (
    <div className="max-w-7xl mx-auto pt-4  px-4 md:px-6  bg-white z-10 ">
      <form onSubmit={handleSearchSubmit} className="flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search..."
          className="!rounded-l-md border border-gray-200 p-2 md:p-4 w-full outline-none rounded-r-none"
        />
        <button
          type="submit"
          className="rounded-r-md bg-gray-200 border border-gray-200 p-2 md:p4 max-w-xs text-black cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
