import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { Container } from './styles';

export const RowButtons = ( params) => {
  return (
    <View style={Container.container}>
      <TouchableOpacity style={Container.button}
        onPress={params.vac}>
        <Image style={Container.imageButton} source={require('../../assets/icons/Vacinas.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={Container.button}
        onPress={params.med}>
        <Image style={Container.imageButton} source={require('../../assets/icons/Remedios.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={Container.button}
        onPress={params.anti}>
        <Image style={Container.imageButton} source={require('../../assets/icons/Parasita.png')} />
      </TouchableOpacity>
    </View>
    );
}