import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Container } from './styles';

export const Calendario = (params) => {
  const date = params.data
  const setDate = params.setDate

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
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

  const getDate = (nasc) => {
    if (nasc) {
      return (`${nasc.getDate()} / ${nasc.getMonth()} / ${nasc.getFullYear()}`)
    }
  }

  return (
    <TouchableOpacity onPress={showDatepicker}>
      <Text style={Container.input}>{getDate(date)}</Text>
    </TouchableOpacity>
  );
}