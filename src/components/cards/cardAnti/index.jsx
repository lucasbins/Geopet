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
          <Text style={styles.label}>Início do tratamento:</Text>
          <Text style={styles.text}>{formataData(anti.dataInicio)}</Text>
          <Text style={styles.label}>Fim do tratamento:</Text>
          <Text style={styles.text}>{formataData(anti.dataFim)}</Text>
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