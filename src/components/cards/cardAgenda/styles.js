import { StyleSheet} from "react-native";
import { background, primaryColor, secondaryColor } from "../../../config/stylesColors";

export const Container = StyleSheet.create({
  listWarning: {
    margin: 8,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: "#ff5c00"
  },
  list: {
    margin: 8,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: primaryColor
  },
  textTitle:{
    margin: 5,
    fontSize: 21,
    color: "#fff",
    fontWeight: 'bold'
  },
  text:{
    margin: 5,
    fontSize: 16,
    color: "#fff",
    fontWeight: 'bold'
  },
  button:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})