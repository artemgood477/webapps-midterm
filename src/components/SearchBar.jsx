import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const SearchBar = () => {
  const { setSearchQuery } = useContext(ProductContext);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search for products..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
