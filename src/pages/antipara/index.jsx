import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './styles';

import PlusButton from '../../components/plusButton';
import { CardAnti } from '../../components/cards/cardAnti';


export const Anti = ({ navigation, route }) => {
  const pet = route.params.pet;
  const antis = route.params.pet.antiparasitario;

  const onPressNewAnti = () => {
    navigation.navigate('NewAnti', { pet: pet, acao: 'new' })
  }

  const onPressDetailsAnti = (anti) => {
    navigation.navigate('NewAnti', { pet: pet, anti: anti, acao: 'edit' })
  }

  return (
    <SafeAreaView style={styles.container}>
    {antis.length > 0 ?
      <ScrollView >
        {antis.map((anti, i) => {
          return <CardAnti anti={anti} key={i} change={() => onPressDetailsAnti(anti)} />
        })}
      </ScrollView>
      :
      <View style={styles.list}>
        <Text style={styles.title}>Sem antiparasitário</Text>
        <Text style={styles.info}>Para inserir precione '+' no canto da tela.</Text>
      </View>
    }
    <PlusButton change={onPressNewAnti} />
  </SafeAreaView>
  );
}
