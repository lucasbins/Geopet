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
    return pet
  },
  setPets: async (docData) => {
    docData.uuid = create_UUID()
    await setDoc(doc(db, "pets", docData.uuid), docData);
  },
  updatePet: async (docData) =>{
    await updateDoc(doc(db, "pets", docData.uuid), docData);
  },
  deletePet: async (uuid) => {
    await deleteDoc(doc(db, "pets", uuid));
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