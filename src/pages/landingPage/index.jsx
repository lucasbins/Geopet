import React, { useEffect, useContext } from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/auth';

import { Container } from './styles';


export const LandingPage = ({ navigation }) => {
  const auth = useContext(AuthContext)

  useEffect(() => {
    try {
      fetchUser()
    } catch (e){
      console.log(e)
    }
  }, [auth.user])

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
        setTimeout(()=> {navigation.navigate('Menu')}, 1000)   
      }else{
        setTimeout(()=> {navigation.navigate('Login')}, 1000)
      }
    }).catch((error) => {
      setTimeout(()=> {navigation.navigate('Login')}, 1000)
      console.log(error)
    })
  }

  return (
    <View style={Container.container}>
      <View style={Container.containerLogo}>
        <Image style={Container.logo}
          source={require('../../assets/img/logoIcon.png')} />
      </View>
      <View style={Container.loading}>
        <ActivityIndicator size={'large'} color={'#67C7C3'} />
      </View>
    </View>
  );
}
