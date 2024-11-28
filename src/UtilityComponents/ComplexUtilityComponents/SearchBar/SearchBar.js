import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { filterStyle } from '../../../Utils/MaterialUiStyles';
import { IconButton } from '@mui/material';
import './SearchBar.scss'

function SearchBar({inputChange,searchFunction}) {
  const [input,setInput] = useState('')
  const handleInputChange = (event) =>{
    setInput(event.target.value)
    inputChange(event.target.value)
  }
  const search = () => {searchFunction(input)} 
  return (
    <div className='searchbar_containr'>
      <input className='input_text_search' placeholder="Search..."  value={input} onChange={handleInputChange} />
      <IconButton sx={{width:'20%',marginLeft:'1vw'}} onClick={search}>
        <SearchIcon sx={filterStyle}/>
      </IconButton>
    </div>
  )
}

export default SearchBar