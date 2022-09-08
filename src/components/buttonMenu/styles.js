import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../config/stylesColors";

export const Container = StyleSheet.create({
  buttonsMenu:{
    flexDirection: 'row',
    height: 80,
    backgroundColor: primaryColor,
    alignItems: "center",
    padding: 25,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  imageButton:{
    width: 50,
    height: 50,
  },
  title:{
    fontSize: 20,
    color: secondaryColor,
    marginLeft: 20
  }
})
