import React, { useEffect, useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useApi } from '../../hooks/useApi';
import AuthContext from '../../contexts/auth';

import { styles } from './style';

import CardPet from '../../components/cardPet';
import PlusButton from '../../components/plusButton';

export const Pets = () => {
  const [pets, setPets] = useState([])
  const auth = useContext(AuthContext)

  useEffect(() => {
    const fetchPet = async (uid) => {
      const api = useApi()
      const data = await api.getPets(uid)
      setPets(data)
    }
    fetchPet(auth.user.user_uid)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.list}>
        {pets !== undefined && pets.map((pet,i) => {
          return <CardPet pet={pet} key={i}/>
        })}
        <PlusButton/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
