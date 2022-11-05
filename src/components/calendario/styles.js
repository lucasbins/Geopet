import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../config/stylesColors";

export const Container = StyleSheet.create({
  input: {
    width: 300,
    padding: 5,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: primaryColor,
    color: secondaryColor,
    textAlign: 'center',
    fontSize: 15
  }
})