import { StyleSheet } from "react-native";
import { primaryColor } from "../../config/stylesColors";

export const Container = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button:{
    height: 70,
    backgroundColor: primaryColor,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  imageButton:{
    width: 50,
    height: 50,
  }
})