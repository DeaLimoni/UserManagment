import React from "react";

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name or email"
      onChange={(e) => onSearch(e.target.value)}
      style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
    />
  );
}

export default SearchBar;