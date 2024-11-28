import React,{useState,useEffect} from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {filterStyle,menuItem,selectedMenuItem} from '../../../Utils/MaterialUiStyles';
import { IconButton, Popover, MenuItem, Fade } from '@mui/material';



function FilterList({type,filterFunction}) {
    const [selectedIndex, setSelectedIndex] = useState('')
    const [anchorEl, setAnchorEl] = useState(null);
    const handleIconClick = (event) => {setAnchorEl(event.currentTarget);};
    const handleMenuItemClick = (value,index) => {filterFunction(value);setSelectedIndex(index);setAnchorEl(null)};
    const handleClose = () => {setAnchorEl(null);};
    const data = ['dish','drink','ingredient','unspecified']

    const getSelected = () =>{
      for(let i=0;i<data.length;i++){
        if(type === data[i])
          setSelectedIndex(i)
      }
    }

    useEffect(() =>{
      getSelected()
    })

  return (
    <div>
      <IconButton onClick={handleIconClick}>
        <FilterAltIcon sx={filterStyle} />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{vertical: 'bottom',horizontal: 'right',}}
        transformOrigin={{vertical: 'top',horizontal: 'right',}}
        TransitionComponent={Fade} 
        TransitionProps={{ timeout: 750 }}
      >
        {data.map((item,index) => (
            <MenuItem sx={index === selectedIndex ? selectedMenuItem : menuItem} key={index} onClick={() => handleMenuItemClick(item,index)}>{item}</MenuItem>
        ))}
      </Popover>
    </div>
  )
}

export default FilterList