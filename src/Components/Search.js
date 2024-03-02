import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({onSearch}) => {
    const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    alert(searchText);
  };
  return (
    <div className="flex items-center border rounded-md overflow-hidden w-2/5">
      <input
        className="py-2 px-4 outline-none w-3/5"
        type="text"
        placeholder='Search...'
        value={searchText}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={() => handleSearch(onSearch)} className="bg-yellow-500 hover:bg-yellow-400 text-white px-2 py-2 ml-auto">
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </div>
  );
}

export default Search