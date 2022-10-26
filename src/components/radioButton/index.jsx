import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { Container } from './styles';

export const RadioButton = ({data, onSelect, callback}) => {

  return <View>
    {data.map((item, i) => {
      return (
        <Pressable 
          key={i}
          style={ 
            item.value === onSelect ? Container.selected : Container.unselected
          }
          onPress={() => callback(item.value)}
          >
          <Text style={item.value === onSelect ? Container.optionSelect : Container.option}>{item.label}</Text>
        </Pressable>
      )
    })}
  </View>;
}

