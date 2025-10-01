import React from "react";

function SearchBar({ onSearch }) {
  return (
    <Form className="mb-3">
      <Form.Control
        type="text"
        placeholder="Search by name or email"
        onChange={(e) => onSearch(e.target.value)}
      />
    </Form>
  );
}

export default SearchBar;