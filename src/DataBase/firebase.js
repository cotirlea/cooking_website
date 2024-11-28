import { initializeApp } from "firebase/app";
import { getStorage,ref, uploadString, getDownloadURL,deleteObject } from "firebase/storage";
import { getFirestore, collection, setDoc,getDocs,query,where,doc, updateDoc, deleteDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBOvu2T2LWKzsGvtL4UzqsPhl9WbCtmyr0",
  authDomain: "cooking-site-734e6.firebaseapp.com",
  projectId: "cooking-site-734e6",
  storageBucket: "cooking-site-734e6.appspot.com",
  messagingSenderId: "61051517398",
  appId: "1:61051517398:web:a1f94adaebf32fff880c77",
  measurementId: "G-5ZFS2QKSNZ"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);


const addImage = async (file, id) =>{
  const metadata = {contentType: 'image/jpeg'};
  const imageRef = ref(storage, id);
  try {
      await uploadString(imageRef, file,'data_url', metadata);
      console.log('Image uploaded successfully');
  } catch (error) {
      console.error('Error uploading image:', error);
  }
}

const getImage = async (id) =>{
  const imageRef = ref(storage, id);
  const imageURL = await getDownloadURL(imageRef)
  return imageURL
}

const deleteImage = async(id) =>{
  try {
      await deleteObject(ref(storage, id))
      console.log('Image deleted successfully');
  } catch (error) {
      console.error('Error deleting image:', error);
  }
}

const addData = async (table, id, data) =>{
  try {
      await setDoc(doc(db, table, id), data);
      console.log('Data added!');
  } catch (error) {
      console.error('Error uploading data:', error);
  }
}

const getData = async (table, field, data) =>{
  const q = query(collection(db, table), where(field, "==", data));
  const querySnapshot = await getDocs(q);
  let d = []
  await querySnapshot.forEach((doc) => {d.push(doc.data())});
  return d
}

const updateData = async (table, id, data) =>{
  try{
    await updateDoc(doc(db, table, id), data);
    console.log('Data updated!');
  } catch (error) {
    console.error('Error updating data:', error);
  }
}

const deleteData = async (table, id) =>{
  try{
    await deleteDoc(doc(db, table, id));
    console.log('Data deleted!')
  } catch (error) {
    console.error('Error deleting data:', error);
  }
}

export{addImage,getImage,addData,getData,updateData,deleteData,deleteImage}

