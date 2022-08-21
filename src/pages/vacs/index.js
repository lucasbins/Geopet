import React, { useEffect, useState, useContext } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useApi } from '../../hooks/useApi';

import { styles } from './style';

import PlusButton from '../../components/plusButton';
import { CardVac } from '../../components/cardVac';

export const Vacs = ({navigation, route}) => {
  const [ pet, setPet] = useState(route.params.pet)
  const [ vacs, setVacs] = useState([])

  useEffect(() => {
    const fetchVac = async (uid) => {
      const api = useApi()
      const data = await api.getVacs(uid)
      setVacs(data)
    }
    fetchVac(pet.uuid)
  }, [])

  const onPressNewVacs = () => {
    navigation.navigate('NewVac', { pet: pet, acao: 'new' })
  }

  const onPressDetailsVacs = (vac) => {
    navigation.navigate('NewVac', { vac: vac , acao: 'edit'})
  } 
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.list}>
        {vacs !== undefined && vacs.map((vac,i) => {
          return <CardVac vac={vac} key={i} change={() => onPressDetailsVacs(vac)}/>
        })}
        <PlusButton change={onPressNewVacs}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
