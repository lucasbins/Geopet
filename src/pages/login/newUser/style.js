
import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor, background } from "../../../config/stylesColors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    resizeMode: "contain",
    width: 300,
    height: 200,
  },
  line: {
    width: '60%',
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
    marginBottom: 25,
    marginTop: 25
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
  createAccountButton: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
    borderRadius: 10,
    marginTop: 30
  },
  disableButton: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: secondaryColor,
    borderRadius: 10,
    marginTop: 30
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
  }
});

export default styles;