import { StyleSheet} from "react-native";
import { background, primaryColor, secondaryColor } from "../../config/stylesColors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageUser: {
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  label:{
    color: primaryColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    color: secondaryColor,
    fontSize: 18,
    marginBottom: 10,
  },
  infoUser: {
    marginTop: 15,
    width: '80%',
  },
  editButton: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: primaryColor,
    padding: 5,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutButton: {
    width: 150,
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
    flexDirection: 'row'
  }
})