import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search for a book..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{
        padding: "10px",
        width: "300px",
        margin: "20px auto",
        display: "block",
      }}
    />
  );
};

export default SearchBar;
