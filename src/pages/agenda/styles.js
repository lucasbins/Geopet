import { StyleSheet} from "react-native";
import { background, primaryColor, secondaryColor } from "../../config/stylesColors";

export const Container = StyleSheet.create({
  container:{
    backgroundColor: background,
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10
  },
})