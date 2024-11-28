import { addData, getData, updateData, deleteData, addImage, getImage, deleteImage} from "./firebase";
import {createIdUser} from './../Utils/UtilsDataBase'
const addUser = async (username, password) =>{
    const id = createIdUser()
    await addData('user', id, {id: id, username : username,password : password})
    return {id: id, username : username,password : password}
}
const getUser = async (username) =>{
    const user = await getData('user', 'username', username);
    if(user.length === 0)
        return null;
    return user[0]
}
const updateUser = async(username, dataToChange) =>{return await updateData('user', username, dataToChange)}
const deleteUser = async(username) =>{return await deleteData('user', username)}
const addRecipe = async(id,title, type, ingredients, steps, image,  user) => {
    await addImage(image,id)
    const url = await getImage(id)
    const data = {id : id, title: title, type: type, ingredients: ingredients, steps: steps, image: url, user: user}
    return await addData('recipe', id ,data)
}
const getRecipe = async(id) => {
    const recipe =  await getData('recipe', 'id', id);
    if(recipe.length === 0)
        return null;
    return recipe[0]
}
const getRecipes = async(id) => {return await getData('recipe','user',id)}
const updateRecipe = async(id, dataToChange) =>{
    if(dataToChange.image !== undefined){
        await addImage(dataToChange.image,id)
        const url = await getImage(id)
        dataToChange.image = url
    }
    return await updateData('recipe', id, dataToChange)
}
const deleteRecipe = async(id) =>{
    await deleteImage(id)
    return await deleteData('recipe', id)
}

export{addUser,getUser,updateUser,deleteUser,addRecipe,getRecipe,getRecipes,updateRecipe,deleteRecipe}