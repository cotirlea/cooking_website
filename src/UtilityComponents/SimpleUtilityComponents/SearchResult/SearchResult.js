import React from 'react'
import './SearchResult.scss'

function SearchResult({title,url,selectedFunction}) {
  const select = () =>{
    if(selectedFunction !== undefined)
      selectedFunction(title)
  }
  return (
    <div className='search_result_container' onClick={select}>
        <p className={url === undefined ? 'search_result_empty' : 'search_result_name'}>{title}</p>
        {url === undefined ? null : <img className='search_result_image' src={url} alt=""/>} 
    </div>
  )
}

export default SearchResult
