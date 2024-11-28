import React,{useEffect,useRef,useState} from 'react'
import './GuideList.scss'
import ItemList from './../../SimpleUtilityComponents/ItemList/ItemList'

function GuideList({ data, setData, title,backgroundImage}) {
  const [animationClass, setAnimationClass] = useState('fade-in');
  const containerRef = useRef(null);
  const handleChange = (newValue, index) => {
    const updatedValue = [...data.value];
    updatedValue[index] = newValue;
    setData({ ...data, value: updatedValue, change:true });
  };
  const addData = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      setData({ ...data, value: [...data.value, ''],change:true });
      setAnimationClass('fade-in');
    }, 500);
  };
  const handleRemove = (index) => {
    const updatedValue = [...data.value];
    updatedValue.splice(index, 1);
    setData({ ...data, value: updatedValue,change:true });
  };

  useEffect(() => {
    containerRef.current.scrollTo({top: containerRef.current.scrollHeight});
  }, [data]);
  return (
    <div className='list_container'>
      <img src={require('../../../Assets/images/' + backgroundImage + '.jpg')} alt="" className="list_background_image" />
      <div className={`body_container_list`} ref={containerRef}>
        <h1 className='title_list'>{title+'s'}</h1>
        {data.value.map((item, index) => (
          <ItemList key={index} index={index} data={item} handleChange={handleChange} handleRemove={handleRemove} />
        ))}
        <div className={`button_container_list ${animationClass}`}>
          <button className='button_list' onClick={addData}>{'ADD ' + title}</button>
        </div>
    </div>
    </div>
  );
}



export default GuideList