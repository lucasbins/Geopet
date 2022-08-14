import { StyleSheet} from "react-native";
import { background, primaryColor, secondaryColor } from "../../config/stylesColors";

export const styles = StyleSheet.create({
  card:{
    flex: 1,
    backgroundColor: '#fff',
    borderColor: primaryColor,
    borderWidth: 3,
    borderRadius: 20,
    padding: 15,
    margin: 15
  },
  label:{
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
  name: {
    flex: 1,
    justifyContent: 'center'
  },
  line: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  imagePet:{
    resizeMode: 'cover',
    width: 100 ,
    height: 100,
    right: 10,
    borderRadius: 100
  }
})