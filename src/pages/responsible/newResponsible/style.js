import { StyleSheet} from "react-native";
import { background, primaryColor, secondaryColor } from "../../../config/stylesColors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: background,
  },
  label:{
    color: primaryColor,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    height: 40,
    borderColor: secondaryColor,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    color: secondaryColor,
    fontSize: 18,
    marginBottom: 5,
    padding: 5
  },
  infoUser: {
    padding: 24,
  },
  keyboardOn: {
    flex:1,
    backgroundColor: background,
    marginBottom: 150
  },
  scrollView:{
    flex: 1
  }
})