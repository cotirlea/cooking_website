const validateArrayContent = (arr) =>{return arr.every(element => element.length > 0);}

const validateArray = (arr,field,errors) =>{
    if(arr.length === 0)
        errors.push(field + ' is empty')
    if(validateArrayContent(arr) === false)
        errors.push(field + ' is incomplete')
    return errors
}

const validateText = (text,field,errors) =>{
    if(text.length === 0)
        errors.push(field + ' is empty')
    if(text.length > 0 && text.length < 4)
        errors.push(field + 'is too short')
    return errors
}


const validateReciepe = (name,steps,ingredients,type,image) =>{
    let errors = []
    errors = validateText(name, 'name', errors)
    errors = validateArray(steps, 'steps', errors)
    errors = validateArray(ingredients, 'ingredients', errors)
    errors = validateText(type,'type', errors)
    errors = validateText(image, 'image', errors)
    return errors
}


export {validateReciepe}