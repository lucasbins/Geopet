import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../config/stylesColors";

export const Container = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between',
  },
  button:{
    height: 70,
    backgroundColor: primaryColor,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  imageButton:{
    width: 50,
    height: 50,
    marginLeft: 30
  },
  text:{
    fontSize: 20,
    color: secondaryColor,
    marginLeft: 25,
  }
})