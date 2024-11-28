const getImage = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided"));
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};


const filterCriteria = (item, field, type) =>{
  if(type === '' || type === 'unspecified')
    return true
  else
    return item[field] === type
}

const searchCriteria = (item, field, search) => {return item[field].startsWith(search)};

const getModifiedData = (data, field, condition, conditionRule) =>{
  let new_data = []
  for(let i=0;i<data.length;i++){
    if(conditionRule(data[i], field, condition) === true)
      new_data.push(data[i])
  }
  return new_data
}

const getFilterData = (data, field, type) =>{return getModifiedData(data, field, type, filterCriteria)}
const getSearchData = (data, field, search) =>{return getModifiedData(data, field, search, searchCriteria)}

export {getImage,getFilterData,getSearchData}