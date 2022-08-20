import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../config/firebaseconfig';
import { 
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const useApi = () => ({
  signin: async (email, password) => { 
    let user = null
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
      })
      .catch((error) => {
        return true;
      });
    return user.uid;
  },
  getUser: async (user_uid) => {
    const q = query(collection(db, "responsible"), where("user_uid", "==", user_uid));
    const querySnapshot = await getDocs(q);
    let user = {}
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      user = JSON.parse(JSON.stringify(doc.data()));
    })
    return user
  },
  signOut: () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  },
  getPets: async (user_uid) => {
    const q = query(collection(db, "pets"), where("user_uid", "==", user_uid));
    const querySnapshot = await getDocs(q);
    let pet = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      pet.push(doc.data());
    })
    console.log('Buscou Pets')
    return pet
  },
  setPets: async (docData) => {
    docData.uuid = create_UUID()
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
  },
  getVacs: async (pet_uuid) => {
    const q = query(collection(db, "vacs"), where("pet_uuid", "==", pet_uuid));
    const querySnapshot = await getDocs(q);
    let vacs = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      vacs.push(doc.data());
    })
    console.log('Buscou Vacinas')
    return vacs
  },
  setVac: async (docData) => {
    docData.uuid = create_UUID()
    await setDoc(doc(db, "vacs", docData.uuid), docData);
    console.log('Criou Vacinas')
  },
  updateVac: async (docData) =>{
    await updateDoc(doc(db, "vacs", docData.uuid), docData);
    console.log('Alterou Vacina')
  },
  deleteVac: async (uuid) => {
    await deleteDoc(doc(db, "vacs", uuid));
    console.log('Deletou Vacina')
  }
})

function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}