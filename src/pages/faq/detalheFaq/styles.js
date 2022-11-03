import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../../config/stylesColors";

export const Container = StyleSheet.create({
  background:{
    alignItems: "center",
    justifyContent: 'center',
    flex: 1
  },
  title:{
    color: primaryColor,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5
  },
  text: {
    color: secondaryColor,
    width: '80%',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 10
  },
  imageS:{
    width: 280,
    height: 110,
    marginTop: 10
  },
  imageL:{
    width: 300,
    height: 600,
    marginTop: 10
  },
  imageIcon:{
    width:50,
    height: 50
  },
  erro:{
    color: 'red',
    fontWeight: 'bold',
  }
})