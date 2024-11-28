import React from 'react'
import './Header.scss'
import Button from '../../UtilityComponents/SimpleUtilityComponents/Button/Button'
import { useNavigate } from 'react-router-dom';
import {createIdReciepe} from '../../Utils/UtilsDataBase'
import Search from '../Search/Search'
import FilterList from '../../UtilityComponents/SimpleUtilityComponents/FilterList/FilterList';

function Header({user,searchFunction,type,filterFunction}) {
  const navigate = useNavigate();

  const logOut = () =>{navigate('/')}
  const create = () =>{
    const idReciepe = createIdReciepe()
    const d = {idReciepe:idReciepe,user:user,isNew:true}
    const data = encodeURIComponent(JSON.stringify(d));
    navigate('/reciepe/'+data);
  }
  
  return (
    <div className='header_container'>
      <div className='right_side'>
        <Button name={'create'} handleFunction={create} buttonStyle={'header_button'} containerStyle={'header_button_container'} />
        <Search searchFunction={searchFunction} />
      </div>
      <p className='header_text'>{user.username}</p>
      <div className='right_side'>
        <FilterList type={type} filterFunction={filterFunction} />
        <Button name={'log out'} handleFunction={logOut} buttonStyle={'header_button'} containerStyle={'header_button_container'} />
      </div>
    </div>
  )
}

export default Header