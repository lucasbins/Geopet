import React, { useState } from 'react';
import { 
  Text, 
  View, 
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles  from './style';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../../config/firebaseconfig';
// import { Container } from './styles';

export const NewUser = () => {
  const [ email , setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ error, setError] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Account created!')
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
      setError(true);
    })
  }
  
  return (
    <KeyboardAvoidingView 
      behavior={"height"}
      style={styles.container}>

      <Image style={styles.logo}
        source={require('../../../assets/img/Logo.png')}/>

      <TextInput
        style={styles.input}
        placeholder='enter your email'
        type='text'
        value={email}
        onChangeText={(text) => {
          setEmail(text)
          setError(false)
        }}
      />
      
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder='enter a password'
        type='text'
        value={password}
        onChangeText={(text) => {
          setPassword(text)
          setError(false)
        }}
      />
      {error === true && 
      <View style={styles.contentAlert}>
        <Text style={styles.warningAlert}>Invalid e-mail or password</Text>
      </View>
      }

      {email === "" || password === "" ?
        <TouchableOpacity
          disabled={true}
          style={styles.createAccountButton}
        >
          <Text style={styles.textButtonCreateAccount}>Create Account</Text>
        </TouchableOpacity>
      :
      <TouchableOpacity 
        style={styles.createAccountButton}
        onPress={handleSignIn}
        >
        <Text style={styles.textButtonCreateAccount}>Create Account</Text>
      </TouchableOpacity>
      }
    </KeyboardAvoidingView>
  );
}