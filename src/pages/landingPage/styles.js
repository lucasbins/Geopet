
import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor, background } from "../../config/stylesColors";

export const Container = StyleSheet.create({
  containerlogo:{
    justifyContent: 'center'
  },
  logo: { 
    resizeMode: "contain",
    width: 250,
    height: 250,
  },
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  loading:{
    marginTop: 50
  }
});
