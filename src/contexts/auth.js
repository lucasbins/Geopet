import { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [pets, setPets ] = useState(null)
  const api = useApi()

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
    setUser(null)
    setPets(null)
    await api.signOut()
  }

  const getPets = async (uid) => {
    const pet = await api.getPets(uid)
    if(pet){
      setPets(pet)
    }
  }

  const recovery = async (email) => {
    return await api.recoveryPassword(email)
  }
  
  return (
    <AuthContext.Provider value={{user,setUser,setPets, signIn, logout, pets, getPets, recovery }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;