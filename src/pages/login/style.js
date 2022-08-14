
import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor, background } from "../../config/stylesColors";

const styles = StyleSheet.create({
  background: { 
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: background,
  },
  containerlogo:{
    flex: 1,
    justifyContent: 'center'
  },
  logo: { 
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  logo_icon: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    marginTop: 150,
    marginBottom: 30
  },
  conatiner:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  line: {
      width: '20%',
      borderBottomColor: primaryColor,
      borderBottomWidth: 0.2,
      marginBottom: 25,
      marginTop: 25,
      marginRight: 10,
      marginLeft: 10
  },
  division:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDivision: {
    color: secondaryColor
  }, 
  input: {
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: primaryColor,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: secondaryColor
  },
  buttonLogin: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
    borderRadius: 10,
    marginTop: 30
  },
  textButtonLogin: {
    color: '#ffffff',
  },
  createAccountButton: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: secondaryColor,
    borderRadius: 10,
  },
  textButtonCreateAccount: {
    color: '#ffffff',
  },
  contentAlert: {
    marginTop: 10,
    color: secondaryColor,
  },
  warningAlert: {
    color: 'red',
  },
});

export default styles;