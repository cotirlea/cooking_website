import React from 'react'
import '../../Main Screens/Reciepe/Reciepe.scss'
import CheckBox from '../../../UtilityComponents/SimpleUtilityComponents/CheckBox/CheckBox'

function ReciepeType({type,handleType}) {
  return (
    <div className='reciepe_body_container'>
      <img src={require('../../../Assets/images/type.jpg')} alt="" className="list_background_image" />            
      <div className={`reciepe_body`}>
        <p className='reciepe_title'>Choose Type</p>
        <div className='reciepe_checkbox'>
          {type.map((item, index) => (
            <CheckBox key={index} text={item.name} checked={item.value} handleChange={() => handleType(index)} />
          ))}
        </div>
      </div>
    </div>
  )
}


export default ReciepeType