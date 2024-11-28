import React,{useState} from 'react'
import './ItemList.scss'
import TextField from '@mui/material/TextField';
import { textFieldStyle } from '../../../Utils/MaterialUiStyles'; 

function ItemList({ index, data, handleChange,handleRemove }) {
   const [animationClass, setAnimationClass] = useState('fade-in');
  const handleTextChange = e => {handleChange(e.target.value, index);};
  const handleTextRemove = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      handleRemove(index);
      setAnimationClass('fade-in');
    }, 500);
  };
  return (
      <div className={`list_item ${animationClass}`}>
        <p className='text_item'>{(index+1) + ')'}</p>
        <TextField fullWidth={true} sx={textFieldStyle} placeholder="add data" onChange={handleTextChange} multiline value={data} />
        <button className='button_item' onClick={handleTextRemove}>Delete</button>
      </div>    
  );
}

export default ItemList;