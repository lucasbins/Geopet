import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

export const CardAgenda = ({title, data}) => {
  return  (
    <View style={Container.list}>
      <Text style={Container.textTitle}>{title}</Text>
    </View>
  );
}
