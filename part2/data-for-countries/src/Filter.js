import React from "react";

const Filter = ({ filter, setFilter }) => {
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return <input value={filter} onChange={handleFilter} />;
};

export default Filter;
