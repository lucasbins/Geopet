import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { styles } from './style';

export const CardVac = (params) => {
  const vac = params.vac

  return (
    <TouchableOpacity style={styles.card}
    onPress={params.change}
    >
      <View style={styles.line}>
        <View style={styles.name}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.text}>{vac.name}</Text>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.text}>{getDate(vac.date.toDate())}</Text>
          <Text style={styles.label}>Proxima:</Text>
          <Text style={styles.text}>{getDate(vac.nextVac.toDate())}</Text>
        </View>
        <View>
          <Text style={styles.label}>Rotulo:</Text>
          {vac.rotulo ? 
              <Image style={styles.imageRotulo}
              source={{ uri: 'data:image/jpeg;base64,' + vac.rotulo}}/>
           :
              <Image style={styles.imageRotulo}
              source={require('../../assets/icons/PetAvatar.png')}/>
          }
        </View>
      </View>
    </TouchableOpacity>
  );
}

const getDate= (date) => {
 return (`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
}