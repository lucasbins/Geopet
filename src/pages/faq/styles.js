import { StyleSheet} from "react-native";
import { background, primaryColor, secondaryColor } from "../../config/stylesColors";

export const Container = StyleSheet.create({
  container:{
    backgroundColor: background,
    flex: 1,
    alignItems: 'center'
  },
  scrollView:{
    flex: 1
  },
  title:{
    fontSize:20,
    color: primaryColor,
    fontWeight: "bold",
    margin: 10,
  },
  
})