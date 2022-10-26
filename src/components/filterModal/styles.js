import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../config/stylesColors"

export const Container = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%'
  },
  button: {
    borderRadius: 10,
    width: 100,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    backgroundColor: primaryColor,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  titleLabel: {
    color: primaryColor,
    fontWeight: 'bold',
    fontSize: 20
  },
  sliderView: {
    justifyContent: 'center',
    width: '90%',
    margin: 15,
    flexDirection: 'row'
  },
  slider: {
    width: '90%',
  },
  line: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  division: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 15,
  },
});