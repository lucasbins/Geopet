import React, { useContext, useEffect, useState } from 'react';
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
import AuthContext from '../../contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const auth = useContext(AuthContext)

  const handleSignIn = async () => {
    try {
      const signed = await auth.signIn(email, password)
      if (signed)
        navigation.navigate('Menu')
      else
        setError(true)
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    try {
      fetchUser()
    } catch (e){
      console.log(e)
    }
  },[auth.user])

  const fetchUser = async () => {
    await AsyncStorage.getItem("USER").then((USER) => {
      const user = JSON.parse(USER)
      if (user != null) {
        auth.setUser(user.uid)
        AsyncStorage.getItem("PETS").then((pets) => {
          const pet = JSON.parse(pets)
          if (pet)
            auth.setPets(pet)
        })
        navigation.navigate('Menu')   
      }
    }).catch((error) => {
      navigation.navigate('Login')
      console.log(error)
    })
  }

  const handleRecovery = async () => {
    try {
      await auth.recovery(email)
      Alert.alert("Sucesso", "Solicitação enviada.")
    }catch (e){
      console.log(e)
      Alert.alert("Erro", "Email não cadastrado.")
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={"height"}
      style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo}
          source={require('../../assets/img/Logo.png')} />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          type='email'
          value={email}
          onChangeText={(text) => {
            setEmail(text)
            setError(false)
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
            setError(false)
          }}
        />
        {error === true &&
          <View style={styles.contentAlert}>
            <Text style={styles.warningAlert}>E-mail ou senha incorreto!</Text>
          </View>
        }
        <TouchableOpacity 
          style={styles.recovery}
          onPress={handleRecovery}>
          <Text style={styles.label}>Recuperar senha</Text>
        </TouchableOpacity>

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
          <Text style={styles.textDivision}>Ou</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('NewUser')}
        >
          <Text style={styles.textButtonCreateAccount}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

