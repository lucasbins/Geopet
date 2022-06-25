import React, { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard
} from 'react-native';
import styles from './style';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../config/firebaseconfig';


export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [keyboardShow, setKeyboardShow] = useState(false);

  keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
  keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

  function keyboardDidShow(){
    setKeyboardShow(true);
  }
  function keyboardDidHide(){
    setKeyboardShow(false);
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Menu', {idUser: user.uid})
      })
      .catch((error) => {
        console.log(error)
        setError(true);
      })
  }

  return (
    <KeyboardAvoidingView
      behavior={"height"}
      style={styles.background}>
      <View style={styles.containerLogo}>
        {keyboardShow ? 
          <Image style={styles.logo_icon}
          source={require('../../assets/img/Logo_Icon.png')} />
        : 
        <Image style={styles.logo}
          source={require('../../assets/img/Logo.png')} />}
      </View>

      <View style={styles.container}>
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
            style={styles.buttonLogin}
          >
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={handleSignIn}
          >
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>
        }
        <View style={styles.division}>
          <View style={styles.line} />
          <Text style={styles.textDivision}>Or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('NewUser')}
        >
          <Text style={styles.textButtonCreateAccount}>Create Account</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}

