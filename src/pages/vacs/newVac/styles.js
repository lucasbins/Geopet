import { StyleSheet} from "react-native";
import { background, primaryColor, secondaryColor } from "../../../config/stylesColors";

export const Container = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  scrollView:{
    width: '100%',
  },
  View:{
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: '100%',
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  input: {
    width: 300,
    padding: 5,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: primaryColor,
    color: secondaryColor,
    textAlign: 'center'
  },
  label:{
    color: primaryColor,
    fontWeight: 'bold',
    marginTop: 15
   },  
  rowBtn:{
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
})