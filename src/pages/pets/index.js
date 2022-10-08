import React, { useEffect, useState, useContext } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import AuthContext from '../../contexts/auth';

import { styles } from './style';

import CardPet from '../../components/cards/cardPet';
import PlusButton from '../../components/plusButton';

export const Pets = ({navigation}) => {
  const [pets, setPets] = useState([])
  const auth = useContext(AuthContext)

  useEffect(() => {
    console.log(auth.pets[0].nascimento)
    setPets(auth.pets)
  }, [auth.pets])

  const onPressNewPets = () => {
    navigation.navigate('NewPets', {acao: 'new'})
  }

  const onPressDetailsPets = (pet) => {
    navigation.navigate('DetalhesPets', { pet: pet })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
        {pets !== undefined && pets.map((pet,i) => {
          return <CardPet pet={pet} key={i} change={onPressDetailsPets}/>
        })}
        </View>
      </ScrollView>
      <PlusButton change={onPressNewPets}/>
    </SafeAreaView>
  );
}
