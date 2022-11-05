import { StyleSheet } from "react-native";
import { background, primaryColor, secondaryColor } from "../../../config/stylesColors";

export const container = StyleSheet.create({
  container: {
    backgroundColor: background,
    flex: 1,
    alignItems: 'center'
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  view: {
    flex: 1,
    alignItems: 'center'
  },
  imagePet: {
    resizeMode: 'cover',
    width: 200,
    height: 200,
    marginBottom: 15,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: primaryColor
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: primaryColor,
    textAlign: 'center',
    margin: 30
  },
  label: {
    color: primaryColor,
    fontSize: 25,
  },
  text: {
    color: secondaryColor,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 10,
  },
  line: {
    flex: 1,
    flexDirection: "row",
  },
  card: {
    flex: 1,
    width: '90%',
    padding: 20,
  },
  div: {
    width: '80%',
    borderBottomColor: primaryColor,
    borderBottomWidth: 1.5,
  },
  button:{
    padding: 10,
    backgroundColor: primaryColor,
    width: '45%',
    alignItems: 'center',
    borderRadius: 9
  },
  buttonRed:{
    padding: 10,
    backgroundColor: '#8B0000',
    width: '45%',
    alignItems: 'center',
    borderRadius: 9
  },
  textButton:{
    fontSize:18,
    color: secondaryColor
  },
  textButtonDel:{
    fontSize:18,
    color: '#fff'
  },
  rowButtons:{
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between'
  }
})