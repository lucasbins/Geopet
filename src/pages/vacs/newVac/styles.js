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
    textAlign: 'center',
    fontSize: 15
  },
  label:{
    color: primaryColor,
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 18
   },  
  rowBtn:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25
  },
  rowBtnSwitch:{
    marginTop: 25,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelSwitch:{
    color: primaryColor,
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 50
  }
})