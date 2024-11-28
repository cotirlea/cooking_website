import React from 'react'
import {deleteRecipe} from '../../DataBase/Database'
import './ReciepeCard.scss'
import { useNavigate } from 'react-router-dom';


function ReciepeCard({id,title,image,user}) {
  const navigate = useNavigate();
  const modifyReciepe = async () =>{
    const d = {idReciepe:id,user:user,isNew:false}
    const data = encodeURIComponent(JSON.stringify(d));
    navigate('/reciepe/'+data);
  }
  const deleteReciepe = async () =>{
    await deleteRecipe(id)
    window.location.reload();
  }
  return (
    <div className='card_container'>
      <div className='card_title_container'>
        <p className='card_title'>{title}</p>
      </div>
      <div className='card_image_container'>
        <img src={image} alt="" className="card_image" />
      </div>
      <div className='card_button_container'>
        <button className='card_button' onClick={deleteReciepe}>delete</button>
        <button className='card_button' onClick={modifyReciepe}>edit</button> 
      </div>       
    </div>
  )
}

export default ReciepeCard