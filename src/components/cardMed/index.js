import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './style';

export const CardMed = (params) => {
  const med = params.med

  return (
    <TouchableOpacity style={styles.card}
    onPress={params.change}
    >
      <View style={styles.line}>
        <View style={styles.name}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.text}>{med.nome}</Text>
          <Text style={styles.label}>Inicio do tratamento:</Text>
          <Text style={styles.text}>{getDate(med.dataInicio.toDate())}</Text>
          <Text style={styles.label}>Fim do tratamento:</Text>
          <Text style={styles.text}>{getDate(med.dataFim.toDate())}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const getDate= (date) => {
 return (`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
}