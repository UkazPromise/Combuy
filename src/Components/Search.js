import React, { useState } from 'react'

const Search = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    alert(searchText);
  };
  return (
    <div className="rounded-lg border-2 w-1/2 border-orange-600">
      <input
        type="text"
        placeholder='Search for products, brands and categories'
        value={searchText}
        onChange={ (e) => handleInputChange(e)}
      />
      <button onClick={ () => handleSearch()} className="text-right font-semibold bg-red "><img src="/img/searchIcon.png" alt="search" class="w-3 h-3 pr-16"/></button>
    </div>
  );
}

export default Search