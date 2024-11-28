import React,{useRef} from 'react'
import Button from '../../../UtilityComponents/SimpleUtilityComponents/Button/Button'
import {getImage} from '../../../Utils/UtilsGeneral'

function ReciepeImage({image,setImage}) {
  const fileInputRef = useRef(0)
  const handleImageChange = async (event) => {
    const base64 = await getImage(event.target.files[0])
    setImage(base64)
  };

    const addImage = async () =>{ fileInputRef.current.click();}

  return (
    <div className='reciepe_body_container'>
      <input style={{display:'none'}} type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} />
      <Button name={'add image'} handleFunction={addImage} buttonStyle={'reciepe_button'} containerStyle={'reciepe_image_button'} />
      <div className='reciepe_image_container'>
        <img src={image.value === '' ? require('../../../Assets/images/null.jpg') : image.value} alt="" className="reciepe_image" />
      </div>
    </div>
  )
}

export default ReciepeImage