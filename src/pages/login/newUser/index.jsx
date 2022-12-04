import React, { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './style';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../../config/firebaseconfig';
// import { Container } from './styles';

export const NewUser = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [samePassword, setSamePassword] = useState("");
  const [confereSenha, setConfereSenha] = useState(false)
  const [error, setError] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          Alert.alert("Sucesso", "Conta criada com sucesso!")
          navigation.navigate('Login')
        }
      })
      .catch((error) => {
        console.log(error)
        setError('E-mail ou senha Inválidos!');
      })
  }

  const itsSamePass = (text) => {
    if (password == text) {
      setConfereSenha(true);
      setError(false)
    } else {    
      setConfereSenha(false);
      setError(true)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={"height"}
      style={styles.container}>

      <Image style={styles.logo}
        source={require('../../../assets/img/Logo.png')} />
      <TextInput
        style={styles.input}
        placeholder='E-mail'
        type='text'
        value={email}
        onChangeText={(text) => {
          setEmail(text)

        }}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder='Senha'
        type='text'
        value={password}
        onChangeText={(text) => {
          setPassword(text)
          setSamePassword("")
        }}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder='Confirme a senha'
        type='text'
        value={samePassword}
        onChangeText={(text) => {
          setSamePassword(text)
          itsSamePass(text)
        }}
      />
      {error != "" &&
        <View style={styles.contentAlert}>
          <Text style={styles.warningAlert}>"As senhas não são identicas!"</Text>
        </View>
      }

      {!confereSenha ?
        <TouchableOpacity
          disabled={true}
          style={styles.disableButton}
        >
          <Text style={styles.textButtonCreateAccount}>Criar conta</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={handleSignIn}
        >
          <Text style={styles.textButtonCreateAccount}>Criar conta</Text>
        </TouchableOpacity>
      }
    </KeyboardAvoidingView>
  );
}