import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { 
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, app } from "../config/auth";
import { uuidv4 } from "@firebase/util";

const db = getFirestore(app);

export const useApi = () => ({
  signin: async (email, password) => { 
    let user = null
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("logou")
        user = userCredential.user;
        AsyncStorage.setItem("USER",JSON.stringify(user))
      })
      .catch((error) => {
        console.log(error);
        return true;
      });
    return user.uid;
  },
  signOut: async () => {
    try{
      await AsyncStorage.removeItem("USER")
      AsyncStorage.removeItem("PETS")
      console.log('usuario removido')
    }catch(e){
      console.log(e)
    }
  },
  recoveryPassword: async (email) => {
    return await sendPasswordResetEmail(auth, email)
  },
  getPets: async (user_uid) => {
    const q = query(collection(db, "pets"), where("user_uid", "==", user_uid));
    const querySnapshot = await getDocs(q);
    let pet = []
    querySnapshot.forEach((doc) => { 
      pet.push(doc.data());
    })
    console.log('Buscou Pets')
    AsyncStorage.setItem("PETS",JSON.stringify(pet))
    return pet
  },
  setPets: async (docData) => {
    docData.uuid = uuidv4()
    await setDoc(doc(db, "pets", docData.uuid), docData);
    console.log('Criou pet')
  },
  updatePet: async (docData) =>{
    await updateDoc(doc(db, "pets", docData.uuid), docData);
    console.log('Alterou pet')
  },
  deletePet: async (uuid) => {
    await deleteDoc(doc(db, "pets", uuid));
    console.log('Apagou pet')
  }
})