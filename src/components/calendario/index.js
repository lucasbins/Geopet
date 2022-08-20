import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Container } from './styles';

export const Calendario = (date, setDate) => {

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

  return (
    <TouchableOpacity onPress={showDatepicker}>
      <Text style={Container.input}>{date}</Text>
    </TouchableOpacity>
  );
}