import { Timestamp } from 'firebase/firestore';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './style';

export const CardMed = ({med, change}) => {
  const dataInicio = new Timestamp(med.dataInicio.seconds,med.dataInicio.nanoseconds)
  const dataFim = new Timestamp(med.dataFim.seconds,med.dataFim.nanoseconds)

  return (
    <TouchableOpacity style={styles.card}
    onPress={change}
    >
      <View style={styles.line}>
        <View style={styles.name}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.text}>{med.nome}</Text>
          <Text style={styles.label}>Inicio do tratamento:</Text>
          <Text style={styles.text}>{getDate(dataInicio.toDate())}</Text>
          <Text style={styles.label}>Fim do tratamento:</Text>
          <Text style={styles.text}>{getDate(dataFim.toDate())}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const getDate= (date) => {
  return (`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
 }