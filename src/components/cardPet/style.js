import { StyleSheet} from "react-native";
import { background, primaryColor, secondaryColor } from "../../config/stylesColors";

export const styles = StyleSheet.create({
  card:{
    backgroundColor: '#fff',
    borderColor: primaryColor,
    borderWidth: 3,
    borderRadius: 20,
    padding: 15,
    margin: 15
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
    marginRight: 10,
  },
  line: {
    flex: 1,
    flexDirection: "row",
  },
  imagePet:{
    resizeMode: "contain",
    width: 150 ,
    height: 150,
  },
  avatar: {
    flex: 1,
  }
})