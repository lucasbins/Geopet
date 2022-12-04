import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import { Container } from './styles';

export const RowButtons = ( params) => {
  return (
    <View style={Container.container}>
      <TouchableOpacity style={Container.button}
        onPress={params.vac}>
        <Image style={Container.imageButton} source={require('../../assets/icons/Vacinas.png')} />
        <Text style={Container.text}>Vacinas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Container.button}
        onPress={params.med}>
        <Image style={Container.imageButton} source={require('../../assets/icons/Remedios.png')} />
        <Text style={Container.text}>Medicamentos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Container.button}
        onPress={params.anti}>
        <Image style={Container.imageButton} source={require('../../assets/icons/Parasita.png')} />
        <Text style={Container.text}>Antiparasitários</Text>
      </TouchableOpacity>
    </View>
    );
}