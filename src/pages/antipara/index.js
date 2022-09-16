import React, { useEffect, useState, useContext } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useApi } from '../../hooks/useApi';

import { styles } from './styles';

import PlusButton from '../../components/plusButton';
import { CardAnti } from '../../components/cards/cardAnti';


export const Anti = ({navigation, route}) => {
  const [ pet, setPet] = useState(route.params.pet)
  const [ anti, setAnti] = useState([])

  useEffect(() => {
    const fetchAnti = async (uid) => {
      const api = useApi()
      const data = await api.getAnti(uid)
      setAnti(data)
    }
    fetchAnti(pet.uuid)
  }, [])

  const onPressNewAnti = () => {
    navigation.navigate('NewAnti', { pet: pet, acao: 'new' })
  }

  const onPressDetailsAnti = (anti) => {
    navigation.navigate('NewAnti', { anti: anti , acao: 'edit'})
  } 
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.list}>
        {anti !== undefined && anti.map((anti,i) => {
          return <CardAnti anti={anti} key={i} change={() => onPressDetailsAnti(anti)}/>
        })}
        <PlusButton change={onPressNewAnti}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
