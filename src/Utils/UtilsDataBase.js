const addZero = (elem) =>{
    if(elem < 10)
        return '0' + elem
    return elem
}

const createIdUser = () =>{
    let d = new Date();
    let id = '' + d.getFullYear() + addZero(d.getMonth()) + addZero(d.getDate()) + addZero(d.getHours()) + addZero(d.getMinutes()) + addZero(d.getSeconds()) + 'u';
    return id;
}

const createIdReciepe = () =>{
    let d = new Date();
    let id = '' + d.getFullYear() + addZero((d.getMonth() + 1)) + addZero(d.getDate()) + addZero(d.getHours()) + addZero(d.getMinutes()) + addZero(d.getSeconds()) + 'r';
    return id;
}

export{createIdUser,createIdReciepe}