import Button from './../../../UtilityComponents/SimpleUtilityComponents/Button/Button'
import './Error.scss'
import React from 'react'

const Erorr = ({erros,setErrors}) => {
  const close = () => {setErrors([])}
  return (
    <div className={'error_container'}>
      <div className={'error_text_container'}>
        <p className={'error_headline'}>Errors:</p>
      </div>
      <div className={'error_list'}>
        {erros.map((item,index) =>(
            <div key={index}>
                <p className={'error_text'}>{item}</p>
            </div>
        ))}
          <Button name={'confirm'} handleFunction={close} buttonStyle={'error_button'} containerStyle={'error_button_container'} />
      </div>
    </div>
  )
}

export default Erorr