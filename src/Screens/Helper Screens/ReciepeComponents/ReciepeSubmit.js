import React from 'react'
import Button from '../../../UtilityComponents/SimpleUtilityComponents/Button/Button'


function ReciepeSubmit({submit,goBack}) {
  return (
    <div className='reciepe_body_container'>
      <img src={require('../../../Assets/images/submit.jpg')} alt="" className="list_background_image" />            
      <div className={`reciepe_body`}>
        <p className='reciepe_title'>Satisfied?</p>
        <Button name={'submit'} handleFunction={submit} buttonStyle={'reciepe_button'} containerStyle={'reciepe_image_button'} />
        <Button name={'go back'} handleFunction={goBack} buttonStyle={'reciepe_button'} containerStyle={'reciepe_image_button'} />
      </div>
    </div>
  )
}

export default ReciepeSubmit