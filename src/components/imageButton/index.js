import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { Container } from './styles';

export const ImageButton = (params) => {
  return (
    <TouchableOpacity
      style={Container.btn}
      onPress={params.pickImage}>
      {params.image != '' ?
        <Image style={Container.image} source={{ uri: 'data:image/jpeg;base64,' + params.image }} />
        :
        <Image style={Container.image} source={require('../../assets/icons/PetAvatar.png')} />
      }
    </TouchableOpacity>
  );
}