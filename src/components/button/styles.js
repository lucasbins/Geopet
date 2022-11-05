import { StyleSheet } from "react-native";
import { background, primaryColor, secondaryColor } from "../../config/stylesColors";

export const Container = StyleSheet.create({
  saveButton: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: primaryColor,
    padding: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButton: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#cccccc',
    padding: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteButton:{
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#8B0000',
    padding: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtnDel: {
    fontSize: 18,
    color: '#ccc',
  },
  textBtn: {
    fontSize: 18,
    color: secondaryColor,
  },
  filterButton: {
    width: 100,
    height: 50,
    borderRadius: 100,
    backgroundColor: primaryColor,
    position: 'absolute',
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  faqButton:{
    width:'90%',
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  textFaq:{
    fontWeight: 'bold',
    color: secondaryColor,
  }
})