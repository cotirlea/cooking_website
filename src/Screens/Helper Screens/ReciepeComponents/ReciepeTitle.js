import React from 'react'
import '../../Main Screens/Reciepe/Reciepe.scss'
import TextField from '@mui/material/TextField';
import {titleFieldStyle} from '../../../Utils/MaterialUiStyles'; 

function ReciepeTitle({title,handleTitleChange}) {
  return(
    <div className='reciepe_body_container'>
      <img src={require('../../../Assets/images/title.jpg')} alt="" className="list_background_image" />            
      <div className={`reciepe_body`}>
        <div className={`reciepe_input_container`}>
          <TextField fullWidth={true} sx={titleFieldStyle} placeholder="title" onChange={handleTitleChange} multiline value={title} />
        </div>
      </div>
    </div>
  )
}

export default ReciepeTitle