import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { Container } from './styles';

export const Button = ({title, callback}) => {
  switch(title){
    case "Salvar":
      return (
        <TouchableOpacity 
          style={Container.saveButton}
          accessibilityLabel={title} 
          onPress={callback}>
          <Text style={Container.textBtn}>{title}</Text>
        </TouchableOpacity>
      )
    case "Cancelar":
      return (
        <TouchableOpacity 
          style={Container.cancelButton}
          accessibilityLabel={title} 
          onPress={callback}>
          <Text style={Container.textBtn}>{title}</Text>
        </TouchableOpacity>
      )
    case "Deletar":
      return (
        <TouchableOpacity 
          style={Container.deleteButton}
          accessibilityLabel={title} 
          onPress={callback}>
          <Text style={Container.textBtn}>{title}</Text>
        </TouchableOpacity>
      )
  }
  
}
