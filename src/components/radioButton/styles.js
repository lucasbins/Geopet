import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor } from '../../config/stylesColors';

export const Container = StyleSheet.create({
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    color: secondaryColor
  },
  unselected: {
    margin: 10,
  },
  selected: {
    backgroundColor: primaryColor,
    margin: 6,
    padding: 10,
    borderRadius: 10,
    width: 200
  },
  optionSelect: {
    color: '#fff',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});