import React,{useState,useEffect} from 'react'
import './Reciepe.scss'
import GuideList from '../../../UtilityComponents/ComplexUtilityComponents/GuideList/GuideList'
import Button from '../../../UtilityComponents/SimpleUtilityComponents/Button/Button'
import ReciepeTitle from '../../Helper Screens/ReciepeComponents/ReciepeTitle'
import ReciepeType from '../../Helper Screens/ReciepeComponents/ReciepeType'
import ReciepeImage from '../../Helper Screens/ReciepeComponents/ReciepeImage'
import ReciepeSubmit from '../../Helper Screens/ReciepeComponents/ReciepeSubmit'
import Loading from '../../Helper Screens/Loading/Loading'
import Erorr from '../../Helper Screens/Error/Error'
import {addRecipe, updateRecipe,getRecipe} from '../../../DataBase/Database'
import {validateReciepe} from '../../../Utils/ValidatorReciepe'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Reciepe() {
  const navigate = useNavigate();
  
  const [image, setImage] = useState({ value: '', change: false });
  const [type,setType] = useState({value:[{name:'dish',value:false},{name:'drink',value:false},{name:'ingredient',value:false},{name:'unspecified',value:false}],change:false})
  const [title,setTitle] = useState({ value: '', change: false }); 
  const [index, setIndex] = useState(0)
  const [ingredients, setIngredients] = useState({ value: [], change: false });
  const [steps, setSteps] = useState({ value: [], change: false });
  const [animationClass, setAnimationClass] = useState('fade-in');
  const [loading, setLoading] = useState(false);
  let {data} = useParams()
  const d = JSON.parse(decodeURIComponent(data));
  const user = d.user
  const idReciepe = d.idReciepe
  const isNew = d.isNew
  const [errors, setErrors] = useState([]);

  const getExistingType = (t) =>{
    const newList = [{name:'dish',value:false},{name:'drink',value:false},{name:'ingredient',value:false},{name:'unspecified',value:false}];
    for(let i = 0;i<newList.length;i++){
      if(newList[i].name === t)
        newList[i].value = true
    }
    setType({value:newList,change:false}); 
  } 

  const getData = async () =>{
      setLoading(true)
      const d = await getRecipe(idReciepe);;
      if(d != null){
        setTitle({value:d.title,change:false});
        setIngredients({value:d.ingredients,change:false});
        setSteps({value:d.steps,change:false})
        setImage({value:d.image,change:false})
        getExistingType(d.type)
      }
      setLoading(false)
    }

    useEffect(() =>{
      getData()
    },[])

  const handleTitleChange = e =>{setTitle({value:e.target.value,change:true})}
  const handleImage = e =>{setImage({value:e,change:true})}

  const handleType = (index) => {
    const newList = [{name:'dish',value:false},{name:'drink',value:false},{name:'ingredient',value:false},{name:'unspecified',value:false}];
    newList[index].value = true;
    setType({value:newList,change:true}); 
  };

  const getType = () =>{
    for(let i=0;i<type.value.length;i++){
      if(type.value[i].value === true)
        return type.value[i].name
    }
    return ''
  }

  const getDataToChange = () =>{
    const dataToChange = {}
    if(title.change === true){dataToChange.title = title.value}
    if(type.change === true){dataToChange.type = getType()}
    if(image.change === true){dataToChange.image = image.value}
    if(ingredients.change === true){dataToChange.ingredients = ingredients.value}
    if(steps.change === true){dataToChange.steps = steps.value}
    return dataToChange
  }
  const previous = () =>{
    setAnimationClass('fade-out');
    setTimeout(() => {
      if(index === 0)
      setIndex(5)
      else
        {setIndex(index-1)}      
      setAnimationClass('fade-in');
    }, 750);
  }
  const next = () =>{
    setAnimationClass('fade-out');
    setTimeout(() => {
      if(index === 5)
      setIndex(0)
    else
      {setIndex(index + 1)}
      setAnimationClass('fade-in');
    }, 750);
  }

  const submit = async () =>{
    let t = getType()
    const errs = validateReciepe(title.value,steps.value,ingredients.value,t,image.value)
    setErrors(errs)
    if(errs.length === 0){
      setLoading(true)
      if(isNew === true)
        await addRecipe(idReciepe,title.value,t,ingredients.value,steps.value,image.value,user.id)
      else{
        const dataToChange = getDataToChange()
        await updateRecipe(idReciepe,dataToChange)
      }
      const userString = encodeURIComponent(JSON.stringify(user));
      navigate('/main/'+userString);  
      setLoading(false)
    }
  }

  const goBack = () =>{
     setLoading(true)
      const userString = encodeURIComponent(JSON.stringify(user));
      navigate('/main/'+userString);  
      setLoading(false)
  }

  const getBody = () =>{
    if(index === 0){return (<ReciepeTitle title={title.value} handleTitleChange={handleTitleChange} />)}
    else if(index === 1){return(<ReciepeType type={type.value} handleType={handleType} />)}
    else if(index === 2){return (<GuideList data={ingredients} setData={setIngredients} title={'Ingredient'} backgroundImage={'ingredients'}/>)}
    else if(index === 3){return (<GuideList data={steps} setData={setSteps} title={'Step'} backgroundImage={'steps'}/>)}
    else if(index === 4) {return (<ReciepeImage image={image} setImage={handleImage} />)}
    else{return (<ReciepeSubmit submit={submit} goBack={goBack} />)}
  }

  const getFullBody = () =>{
    if(loading)
      return(<Loading  />)
    else{
      return(errors.length === 0 ? (<>
        <Button name={'previous'} handleFunction={previous} buttonStyle={'reciepe_button'} containerStyle={'reciepe_button_container'} />
          {getBody()}
        <Button name={'next'} handleFunction={next} buttonStyle={'reciepe_button'} containerStyle={'reciepe_button_container'} />
      </> ) : <Erorr erros={errors} setErrors={setErrors} />
      )
    }

  }

  return (
    <div className={ `reciepe_container ${animationClass}`}>
      {getFullBody()}
    </div>
  );
}

export default Reciepe