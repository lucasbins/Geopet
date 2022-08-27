import React, { useEffect, useState, useContext } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useApi } from '../../hooks/useApi';

import { styles } from './style';

import PlusButton from '../../components/plusButton';
import { CardMed } from '../../components/cardMed';

export const Meds = ({navigation, route}) => {
  const [ pet, setPet] = useState(route.params.pet)
  const [ meds, setMeds] = useState([])

  useEffect(() => {
    const fetchMed = async (uid) => {
      const api = useApi()
      const data = await api.getMeds(uid)
      setMeds(data)
    }
    fetchMed(pet.uuid)
  }, [])

  const onPressNewMeds = () => {
    navigation.navigate('NewMed', { pet: pet, acao: 'new' })
  }

  const onPressDetailsMeds = (med) => {
    navigation.navigate('NewMed', { med: med , acao: 'edit'})
  } 
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.list}>
        {meds !== undefined && meds.map((med,i) => {
          return <CardMed med={med} key={i} change={() => onPressDetailsMeds(med)}/>
        })}
        <PlusButton change={onPressNewMeds}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
