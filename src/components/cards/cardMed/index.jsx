import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './style';

export const CardMed = ({med, change}) => {

  return (
    <TouchableOpacity style={styles.card}
    onPress={change}
    >
      <View style={styles.line}>
        <View style={styles.name}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.text}>{med.nome}</Text>
          <Text style={styles.label}>Inicio do tratamento:</Text>
          <Text style={styles.text}>{getDate(med.dataInicio)}</Text>
          <Text style={styles.label}>Fim do tratamento:</Text>
          <Text style={styles.text}>{getDate(med.dataFim)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const getDate= (date) => {
  const d = new Date(date)
  return (`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`)
 }