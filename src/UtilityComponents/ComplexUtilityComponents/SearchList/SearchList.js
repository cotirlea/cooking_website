import './SearchList.scss'
import SearchResult from '../../SimpleUtilityComponents/SearchResult/SearchResult'

function SearchList({searchResults,selectedFunctio}) {
  return (
    <div className="search-results">
      {searchResults.length > 0 ? searchResults.map((item, index) => (
        <SearchResult key={index} title={item.title} url={item.image} selectedFunction={selectedFunctio}/>
      )) : <SearchResult title={'no result...'}/> }
    </div>
  )
}

export default SearchList

