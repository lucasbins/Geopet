import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './styles';

import PlusButton from '../../components/plusButton';
import { CardAnti } from '../../components/cards/cardAnti';


export const Anti = ({ navigation, route }) => {
  const pet = route.params.pet;
  const anti = route.params.pet.antiparasitario;

  const onPressNewAnti = () => {
    navigation.navigate('NewAnti', { pet: pet, acao: 'new' })
  }

  const onPressDetailsAnti = (anti) => {
    navigation.navigate('NewAnti', { pet: pet, anti: anti, acao: 'edit' })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.list}>
          {anti.length > 0 && anti.map((anti, i) => {
            return <CardAnti anti={anti} key={i} change={() => onPressDetailsAnti(anti)} />
          })}
        </View>
      </ScrollView>
      <PlusButton change={onPressNewAnti} />
    </SafeAreaView>
  );
}
