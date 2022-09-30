import React, { useContext, useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './style';

import PlusButton from '../../components/plusButton';
import { CardVac } from '../../components/cards/cardVac';
import AuthContext from '../../contexts/auth';

export const Vacs = ({navigation, route}) => {
  const pet = route.params.pet
  const [ vacs , setVacs] = useState([])
  const auth = useContext(AuthContext)

  useEffect(() => {
    setVacs(route.params.pet.vacs)
  },[auth.pet])

  const onPressNewVacs = () => {
    navigation.navigate('NewVac', { pet: pet, acao: 'new' })
  }

  const onPressDetailsVacs = (vac) => {
    navigation.navigate('NewVac', { pet: pet, vac: vac, acao: 'edit'})
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
