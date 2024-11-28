import React,{useState} from 'react'
import './LogIn.scss'
import Button from './../../../UtilityComponents/SimpleUtilityComponents/Button/Button'
import CheckBox from '../../../UtilityComponents/SimpleUtilityComponents/CheckBox/CheckBox'
import Loading from '../../Helper Screens/Loading/Loading'
import Erorr from '../../Helper Screens/Error/Error'
import { validateLogIn,validateSignIn } from '../../../Utils/ValidatorLogIn'
import { getUser,addUser } from './../../../DataBase/Database'
import { useNavigate } from 'react-router-dom';
function LogIn() {
  const navigate = useNavigate();
  
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [confirm,setConfirm] = useState('')
  const [isNew,setIsNew] = useState(false)
  const [animationClass, setAnimationClass] = useState('fade-in');
  const [loading, setLoading] = useState(false);
  const [errors,setErrors] = useState([])

  const handleUsername = e =>{setUsername(e.target.value)}
  const handlePassword = e =>{setPassword(e.target.value)}
  const handleConfirm = e =>{setConfirm(e.target.value)}
  
  const validate = async () =>{
        if(isNew)
          return await validateSignIn(username,password,confirm)
        return await validateLogIn(username,password)
  }

  const retriveUser = async () =>{
        if(isNew)
          return await addUser(username,password)
        return await getUser(username,password)
    }
  
  const handleLoading = async () =>{
    setLoading(true)
     let err = await validate();

        if(err.length > 0)
          setLoading(false)          
        setErrors(err);
        if(err.length === 0){
            const user = await retriveUser()
            const userString = encodeURIComponent(JSON.stringify(user));
            navigate('/main/'+userString);
            setLoading(false)
        }
  }
  const handleNew = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      setIsNew(!isNew);
      setAnimationClass('fade-in');
    }, 500);
  };
  const submit = () =>{
    handleLoading()
  }

  const getBody = () => {
    if(loading)
      return(
        <Loading  />
      )
    else{
      return(
        <div className='login_body_container'>
          <div className='login_text_container'>
            <p className={`login_headline ${animationClass}`}>{isNew ? 'Sign In' : 'Log In'}</p>
            <p className={'login_text'}>for the purpose of this demo, the username and password for an existing account is: user1 and pass1</p>
          </div>
          <div className='login_input_container'>
            <CheckBox text={'new here?'} checked={isNew} handleChange={handleNew} />
            <input className='login_input' placeholder='username' value={username} onChange={handleUsername} />
            <input className='login_input' placeholder='password' value={password} onChange={handlePassword} />
            {isNew ? <input className={`login_input ${animationClass}`} placeholder='confirm password' value={confirm} onChange={handleConfirm} /> : null}
          </div>
          <Button name={'submit'} handleFunction={submit} buttonStyle={'login_button'} containerStyle={'login_button_container'} />
      </div>
      )
    }
  }

  return (
    <div className='login_container'>
      {errors.length === 0 ? getBody() : <Erorr erros={errors} setErrors={setErrors} />}      
      <img src={require('../../../Assets/images/loging.jpg')} alt="" className="login_image" />
    </div>
  )
}

export default LogIn