import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const CardAnti = ({anti, change}) => {
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
          <Text style={styles.text}>{getDate(anti.dataInicio)}</Text>
          <Text style={styles.label}>Fim do tratamento:</Text>
          <Text style={styles.text}>{getDate(anti.dataFim)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const getDate= (date) => {
  const d= new Date(date)
  return (`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`)
}