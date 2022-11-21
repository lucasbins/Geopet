import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './style';

import PlusButton from '../../components/plusButton';
import { CardVac } from '../../components/cards/cardVac';

export const Vacs = ({ navigation, route }) => {
  const pet = route.params.pet
  const vacs = route.params.pet.vacina

  const onPressNewVacs = () => {
    navigation.navigate('NewVac', { pet: pet, acao: 'new' })
  }

  const onPressDetailsVacs = (vac) => {
    navigation.navigate('NewVac', { pet: pet, vac: vac, acao: 'edit' })
  }

  return (
    <SafeAreaView style={styles.container}>
      {vacs.length > 0 ?
        <ScrollView >
          {vacs.map((vac, i) => {
            return <CardVac vac={vac} key={i} change={() => onPressDetailsVacs(vac)} />
          })}
        </ScrollView>
        :
        <View style={styles.list}>
          <Text style={styles.title}>Sem vacinas</Text>
          <Text style={styles.info}>Para inserir precione '+' no canto da tela.</Text>
        </View>
      }
      <PlusButton change={onPressNewVacs} />
    </SafeAreaView>
  );
}
