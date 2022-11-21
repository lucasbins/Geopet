import React, { useEffect, useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import AuthContext from '../../contexts/auth';

import { styles } from './style';

import CardPet from '../../components/cards/cardPet';
import PlusButton from '../../components/plusButton';

export const Pets = ({ navigation }) => {
  const [pets, setPets] = useState([])
  const auth = useContext(AuthContext)

  useEffect(() => {
    setPets(auth.pets)
  }, [auth.pets])

  const onPressNewPets = () => {
    navigation.navigate('NewPets', { acao: 'new' })
  }

  const onPressDetailsPets = (pet) => {
    navigation.navigate('DetalhesPets', { pet: pet })
  }

  return (
    <SafeAreaView style={styles.container}>
      {pets.length > 0 ?
        <ScrollView >
          {pets.map((pet, i) => {
            return <CardPet pet={pet} key={i} change={() => onPressDetailsPets(pet)} />
          })}
        </ScrollView>
        :
        <View style={styles.list}>
          <Text style={styles.title}>Sem pets</Text>
          <Text style={styles.info}>Para inserir precione '+' no canto da tela.</Text>
        </View>
      }
      <PlusButton change={onPressNewPets} />
    </SafeAreaView>
  );
}
