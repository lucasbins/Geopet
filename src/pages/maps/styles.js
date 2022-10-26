import { StyleSheet } from 'react-native';
import { primaryColor } from '../../config/stylesColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  background: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primaryColor
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  pin:{
    resizeMode: 'cover',
    width: 30,
    height: 43,
  }
});