import { StyleSheet } from "react-native"
import { primaryColor, secondaryColor, background } from "../../config/stylesColors";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: "center"
  },
  logo: {
    resizeMode: "contain",
    width: 300,
    height: 200,
  },
  container:{
    marginTop: 50
  },
  rowButtons:{
    flexDirection: "row",
    marginTop: 20
  },
  buttonsMenu:{
    width: 80,
    height: 80,
    backgroundColor: background,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10
  },
  imageButton:{
    width: 50,
    height: 50,
  }
})