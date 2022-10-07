import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './style';

import PlusButton from '../../components/plusButton';
import { CardMed } from '../../components/cards/cardMed';

export const Meds = ({navigation, route}) => {
  const pet = route.params.pet
  const meds = route.params.pet.medicamento;

  const onPressNewMeds = () => {
    navigation.navigate('NewMed', { pet: pet, acao: 'new' })
  }

  const onPressDetailsMeds = (med) => {
    navigation.navigate('NewMed', { pet: pet, med: med, acao: 'edit'})
  } 
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.list}>
        {meds.length > 0 && meds.map((med,i) => {
          return <CardMed med={med} key={i} change={() => onPressDetailsMeds(med)}/>
        })}
        <PlusButton change={onPressNewMeds}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
