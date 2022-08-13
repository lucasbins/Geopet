import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { container } from './style';

const PlusButton = (params) => {
  return (
    <TouchableOpacity style={container.center}
      accessibilityLabel="Adicionar">
      <Image
        style={container.button}
        source={require('../../assets/icons/Plus.png')}></Image>
    </TouchableOpacity>
  );
}

export default PlusButton;