import React, { useState } from 'react';
import './Search.scss'
// import search from '../../../images/search.svg'


const categories = [
  'Categories',
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

const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="search">
      <div className='search_list'>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          
          {filteredCategories.map((category) => (
            <option key={category} value={category}>
              {/* Categories */} {category}
            </option>
          ))}
        </select>
        <button onClick={() => handleSearch(searchText)}>Search</button>
      </div>

      
    </div>
  );
};

export default Search;
