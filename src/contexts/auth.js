import { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { usePets } from '../hooks/usePets';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [pets, setPets ] = useState(null)
  const api = useApi()
  const petFactory = usePets()

  const signIn = async (email, password) => {
    const uid = await api.signin(email, password);
    if(uid != null){
      setUser(uid)
      getPets(uid)
      return true;
    }else{
      return false;
    }
  }

  const logout = async ( ) => {
    api.signOut()
  }

  const getPets = async (uid) => {
    const pet = await petFactory.getFullPets(uid)
    if(pet){
      setPets(pet)
    }
  }

  
  return (
    <AuthContext.Provider value={{user, signIn, logout, pets, getPets }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;