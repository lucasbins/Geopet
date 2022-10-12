import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { styles } from './style';

export const CardVac = ({vac,change}) => {

  return (
    <TouchableOpacity style={styles.card}
    onPress={change}
    >
      <View style={styles.line}>
        <View style={styles.name}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.text}>{vac.nome}</Text>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.text}>{formataData(vac.data)}</Text>
          <Text style={styles.label}>Proxima:</Text>
          <Text style={styles.text}>{formataData(vac.proximaVacina)}</Text>
        </View>
        <View>
          <Text style={styles.label}>Rotulo:</Text>
          {vac.rotulo ? 
              <Image style={styles.imageRotulo}
              source={{ uri: 'data:image/jpeg;base64,' + vac.rotulo}}/>
           :
              <Image style={styles.imageRotulo}
              source={require('../../../assets/icons/PetAvatar.png')}/>
          }
        </View>
      </View>
    </TouchableOpacity>
  );
}

const formataData = (date) => {
  const d = new Date(date)
  const dia = d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`
  const mes = d.getMonth()+1 < 10 ? `0${d.getMonth() +1}` : `${d.getMonth()+1}`
  return (dia + "/" + mes + `/${d.getFullYear()}`)
}