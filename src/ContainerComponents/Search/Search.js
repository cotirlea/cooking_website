import React, { useState,useRef,useEffect } from 'react';
import SearchList from '../../UtilityComponents/ComplexUtilityComponents/SearchList/SearchList';
import SearchBar from '../../UtilityComponents/ComplexUtilityComponents/SearchBar/SearchBar';
import './Search.scss'

const Search = ({searchFunction}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchContainerRef = useRef(null);
  const selectedFunction = (name) => {return searchFunction(name)}

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {document.removeEventListener('mousedown', handleClickOutside); };
  }, []);

  const handleClickOutside = (event) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target))
      setShowDropdown(false);
  };

  const inputChage = (val) =>{
    let searchRez = searchFunction(val)
    setSearchResults(searchRez)
  }

  return (
    <div className='container_search'>
      <div onFocus={() => setShowDropdown(true)} ref={searchContainerRef}>
        <SearchBar inputChange={inputChage} searchFunction={selectedFunction} />
        {showDropdown === true ?  <SearchList searchResults={searchResults} selectedFunctio={selectedFunction} /> :null}
      </div>
    </div>
  );
};

export default Search;