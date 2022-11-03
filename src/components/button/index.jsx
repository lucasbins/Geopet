import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { Container } from './styles';

export const Button = ({title,text, callback}) => {
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
    case "Filtrar":
      return (
        <TouchableOpacity 
          style={Container.filterButton}
          accessibilityLabel={title} 
          onPress={callback}>
          <Text style={{fontSize: 18, color: '#fff'}}>{title}</Text>
        </TouchableOpacity>
      )
    case "faq":
      return (
        <TouchableOpacity
        style={Container.faqButton}
        onPress={callback}
        >
        <Text style={Container.textFaq}>{text}</Text>
        <Text style={Container.textFaq}>{">"}</Text>
      </TouchableOpacity>
      )
  }
  
}
