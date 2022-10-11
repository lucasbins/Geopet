import { StyleSheet} from "react-native";
import { background, primaryColor, secondaryColor } from "../../config/stylesColors";

export const Container = StyleSheet.create({
  container:{
    backgroundColor: background,
    flex: 1,
  },
  scrollView: {
    width: '100%',
  },
  view: {
    alignItems: 'center',
    margin: 10,
    padding: 10
  },
  list: {
    margin: 15,
    padding: 15,
    borderColor: primaryColor,
    borderWidth: 1.5,
    borderTopLeftRadius: 10,
    backgroundColor: '#fff'
  },
  textTitle:{
    fontSize: 19,
    color: primaryColor,
    fontWeight: 'bold'
  },
  button:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})