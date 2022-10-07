import { StyleSheet } from "react-native";
import { background, primaryColor, secondaryColor } from "../../config/stylesColors";

export const Container = StyleSheet.create({
  btn:{
    flex: 1,
    alignItems: 'center'
  },
  image: {
    resizeMode: 'cover',
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: primaryColor,
  }
})