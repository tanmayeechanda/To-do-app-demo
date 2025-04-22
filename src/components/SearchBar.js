import React from "react";
// SearchBar is used to seach remainders

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="🔍 Search Reminders..."     
      // It will show search remainders  on input 
      className="search-bar"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
