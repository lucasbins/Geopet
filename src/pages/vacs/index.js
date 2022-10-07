import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './style';

import PlusButton from '../../components/plusButton';
import { CardVac } from '../../components/cards/cardVac';

export const Vacs = ({navigation, route}) => {
  const pet = route.params.pet
  const vacs = route.params.pet.vacina

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
        {vacs.length > 0 && vacs.map((vac,i) => {
          return <CardVac vac={vac} key={i} change={() => onPressDetailsVacs(vac)}/>
        })}
        <PlusButton change={onPressNewVacs}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
