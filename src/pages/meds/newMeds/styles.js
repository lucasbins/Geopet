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
  labelSwitch:{
    color: primaryColor,
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 50
   },
  saveButton: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: primaryColor,
    padding: 5,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButton: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#cccccc',
    padding: 5,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtn: {
    fontSize: 18,
    color: secondaryColor,
  },
  rowBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  rowBtnSwitch:{
    marginTop: 25,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})