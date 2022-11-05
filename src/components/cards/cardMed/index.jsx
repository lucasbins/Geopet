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
          <Text style={styles.label}>Início do tratamento:</Text>
          <Text style={styles.text}>{formataData(med.dataInicio)}</Text>
          <Text style={styles.label}>Fim do tratamento:</Text>
          <Text style={styles.text}>{formataData(med.dataFim)}</Text>
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