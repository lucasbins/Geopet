import { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const api = useApi()

  const signIn = async (email, password) => {
    const uid = await api.signin(email, password);
    if(uid != null){
      fetchUser(uid)
      return true;
    }else{
      return false;
    }
  }
  const fetchUser = async (uid) => {
    const data = await api.getUser(uid)
    setUser(data)
  }
  
  return (
    <AuthContext.Provider value={{user, signIn, fetchUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;