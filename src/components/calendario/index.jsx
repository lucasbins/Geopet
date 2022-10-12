import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Container } from './styles';

export const Calendario = (params) => {
  const date = params.data
  const setDate = params.setDate

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const formataData = (date) => {
    const d = new Date(date)
    const dia = d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`
    const mes = d.getMonth()+1 < 10 ? `0${d.getMonth() +1}` : `${d.getMonth()+1}`
    return (dia + "/" + mes + `/${d.getFullYear()}`)
  }

  return (
    <TouchableOpacity onPress={showDatepicker}>
      <Text style={Container.input}>{formataData(date)}</Text>
    </TouchableOpacity>
  );
} 