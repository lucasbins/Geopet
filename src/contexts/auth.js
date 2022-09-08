import { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const api = useApi()

  const signIn = async (email, password) => {
    const uid = await api.signin(email, password);
    if(uid != null){
      setUser(uid)
      return true;
    }else{
      return false;
    }
  }

  const logout = async ( ) => {
    api.signOut()
  }
  
  return (
    <AuthContext.Provider value={{user, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;