import { StyleSheet} from "react-native";
import { background, primaryColor, secondaryColor } from "../../config/stylesColors";

export const styles = StyleSheet.create({
  container:{
    backgroundColor: background,
    flex: 1,
  },
  list:{
    flex: 1,
    justifyContent: 'center',
  },
  title:{
    color: secondaryColor,
    fontSize: 20,
    textAlign: "center"
  },
  info:{
    color: secondaryColor,
    fontSize: 15,
    textAlign: "center",
    marginTop: 5
  }
})