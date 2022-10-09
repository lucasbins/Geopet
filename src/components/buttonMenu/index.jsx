import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

import { Container } from './styles';

export const ButtonMenu = ({ icon, onPress, title }) => {
  return <TouchableOpacity
      onPress={onPress}
      style={Container.buttonsMenu}>
        {icon == 'map' &&
          <Image
            style={Container.imageButton}
            source={require('../../assets/icons/PinMarkerButton.png')} />
        }
        {icon == 'pet' &&
          <Image
            style={Container.imageButton}
            source={require('../../assets/icons/Pet.png')} />
        }
        {icon == 'agenda' &&
          <Image
            style={Container.imageButton}
            source={require('../../assets/icons/Vacinas.png')} />
        }
        <Text style={Container.title}>{title}</Text>
    </TouchableOpacity>
}
