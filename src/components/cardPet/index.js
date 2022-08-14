import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { styles } from './style';

const CardPet = (params) => {
  const pet = params.pet

  return (
    <TouchableOpacity style={styles.card}
      onPress={() => params.change(pet)}
    >
      <View style={styles.line}>
        <View style={styles.name}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.text}>{pet.nome}</Text>
        </View>
        <View style={styles.avatar}>
          {pet.avatar != '' ? 
              <Image style={styles.imagePet}
              source={{uri: pet.avatar}}/>
           :
              <Image style={styles.imagePet}
              source={require('../../assets/icons/PetAvatar.png')}/>
          }
        </View>
      </View>
    </TouchableOpacity>
  );
}



export default CardPet;