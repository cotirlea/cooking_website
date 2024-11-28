import React,{useEffect,useState} from 'react'
import './Main.scss'
import { getRecipes } from '../../../DataBase/Database';
import ReciepeCard from '../../../ContainerComponents/ReciepeCard/ReciepeCard';
import { useParams } from 'react-router-dom';
import Header from '../../../ContainerComponents/Header/Header'
import Loading from '../../Helper Screens/Loading/Loading';
import { getFilterData, getSearchData } from '../../../Utils/UtilsGeneral';
function Main() {
  const [data,setData] = useState({initial:[],value:[]})
  const [loading, setLoading] = useState(false);
  const [type,setType] = useState('')
  const { userString } = useParams();
  const user = JSON.parse(decodeURIComponent(userString));
    const filterFunction = e =>{
      setType(e)
      let new_arr = getFilterData(data.initial, 'type', e)
      setData({ ...data, value: new_arr })
      return new_arr
    }
    const searchFunction = e =>{
      let new_arr = getSearchData(data.initial, 'title', e)
      setData({ ...data, value: new_arr })
      return new_arr    
    }

    const getData = async () =>{
      setLoading(true)
      const d = await getRecipes(user.id);
      setData({initial:d,value:d})
      setLoading(false)
    }

    useEffect(() =>{
      getData()
    },[])

    const getBody = () =>{
      if(loading)
        return(<Loading />)
      else{
        return(
          <>
            <Header user={user} searchFunction={searchFunction} type={type} filterFunction={filterFunction} />
            <div className='main_body_container'>
              {data.value.length === 0 ?
                <p className='main_empty'>Empty</p> :
                (data.value.map((item,index) =>(
                <ReciepeCard key={index} id={item.id} title={item.title} type={item.type} image={item.image} user={user} />
              )))}
            </div>
          </>   
        )
      }
    }

  return (
    <div className='main_container'>
      {getBody()}
    </div>
  )
}

export default Main