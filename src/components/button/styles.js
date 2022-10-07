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
    backgroundColor: '#f00',
    padding: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtn: {
    fontSize: 18,
    color: secondaryColor,
  },
})