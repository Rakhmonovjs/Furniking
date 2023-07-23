import React, { useState } from 'react';

const categories = [
  'All',
  'New Arrivals',
  'Hot Sale',
  'Furniture',
  'Amrature',
  'Tabble',
  'Chair',
  'Sofa',
  'Mirrors',
  'Stools',
  'Benches',
];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="category-list">
      {/* <input
        type="text"
        placeholder="Search Category..."
        value={searchText}
        onChange={handleSearch}
      /> */}

      {/* SearchBar component */}
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => handleSearch(searchText)}>Search</button>
      </div>
      {/* End of SearchBar component */}

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {filteredCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryList;
