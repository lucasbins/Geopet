import { StyleSheet } from "react-native"
import { primaryColor, secondaryColor, background } from "../../config/stylesColors";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: "center"
  },
  logo: {
    resizeMode: "contain",
    width: 300,
    height: 200,
  },
  container:{
    marginTop: 10,
    justifyContent: 'center'
  },
  rowButtons:{
    flexDirection: "column",
    justifyContent: "center",
  },
  logout:{
    justifyContent: "center",
    fontSize: 20,
    color: secondaryColor,
  },
  btnLogout:{
    alignItems: "center",
    justifyContent: 'center',
    padding: 25,
  }
})