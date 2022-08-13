import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../config/firebaseconfig';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

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
})