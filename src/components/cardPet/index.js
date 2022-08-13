import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './style';

const CardPet = (params) => {
  const pet = params.pet
  return (
    <View style={styles.card}>
      <View style={styles.line}>
        <View>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.text}>{pet.nome}</Text>
          <Text style={styles.label}>Peso</Text>
          <Text style={styles.text}>{pet.peso} kg</Text>
          <Text style={styles.label}>Idade: </Text>
          <Text style={styles.text}>{getIdade(pet.nascimento)} anos</Text>
        </View>
        <View style={styles.avatar}>
          {pet.avatar != null ? 
            <Image style={styles.imagePet}
              source={require('../../assets/icons/PetAvatar.png')}/> 
           :
            <Image/>
          }
        </View>
      </View>
      <View style={styles.line}>
        <Text style={styles.label}>Raça: </Text>
        <Text style={styles.text}>{pet.raca}</Text>
        <Text style={styles.label}>Porte: </Text>
        <Text style={styles.text}>{pet.porte}</Text>
        
      </View>
    </View>
  );
}

const getIdade = (nasc) => {
  var d = new Date
  if (nasc) {
    const data = nasc.toDate()
    return calculaIdade(data, d)
  }
}

function calculaIdade(nascimento, hoje) {
  return Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
}

export default CardPet;