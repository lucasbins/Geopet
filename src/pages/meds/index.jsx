import React from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';

import { styles } from './style';

import PlusButton from '../../components/plusButton';
import { CardMed } from '../../components/cards/cardMed';

export const Meds = ({ navigation, route }) => {
  const pet = route.params.pet
  const meds = route.params.pet.medicamento;

  const onPressNewMeds = () => {
    navigation.navigate('NewMed', { pet: pet, acao: 'new' })
  }

  const onPressDetailsMeds = (med) => {
    navigation.navigate('NewMed', { pet: pet, med: med, acao: 'edit' })
  }

  return (
    <SafeAreaView style={styles.container}>
      {meds.length > 0 ?
        <ScrollView >
          {meds.map((med, i) => {
            return <CardMed med={med} key={i} change={() => onPressDetailsMeds(med)} />
          })}
        </ScrollView>
        :
        <View style={styles.list}>
          <Text style={styles.title}>Sem medicamentos</Text>
          <Text style={styles.info}>Para inserir precione '+' no canto da tela.</Text>
        </View>
      }
      <PlusButton change={onPressNewMeds} />
    </SafeAreaView>
  );
}
