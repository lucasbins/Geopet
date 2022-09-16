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
          <Text style={styles.text}>{anti.Fabricante}</Text>
          <Text style={styles.label}>Tipo:</Text>
          <Text style={styles.text}>{anti.Tipo}</Text>
          <Text style={styles.label}>Inicio do tratamento:</Text>
          <Text style={styles.text}>{getDate(anti.dataInicio.toDate())}</Text>
          <Text style={styles.label}>Fim do tratamento:</Text>
          <Text style={styles.text}>{getDate(anti.dataFim.toDate())}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const getDate= (date) => {
 return (`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
}