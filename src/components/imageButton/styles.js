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
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: primaryColor,
  }
})