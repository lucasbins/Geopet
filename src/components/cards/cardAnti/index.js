import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Timestamp } from 'firebase/firestore';

import { styles } from './styles';

export const CardAnti = ({anti, change}) => {
  const dataInicio = new Timestamp(anti.dataInicio.seconds,anti.dataInicio.nanoseconds)
  const dataFim = new Timestamp(anti.dataFim.seconds,anti.dataFim.nanoseconds)

  return (
    <TouchableOpacity style={styles.card}
    onPress={change}
    >
      <View style={styles.line}>
        <View style={styles.name}>
          <Text style={styles.label}>Fabricante:</Text>
          <Text style={styles.text}>{anti.fabricante}</Text>
          <Text style={styles.label}>Tipo:</Text>
          <Text style={styles.text}>{anti.tipo}</Text>
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