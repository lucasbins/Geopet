import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import { Container } from './styles';

export const NewPets = ({ route }) => {
  const params = route.params
  const [pet, setPet] = useState({})
  const [keyboardShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    if (params.acao === 'edit') {
      setPet(params.pet)
    }
  }, [])

  keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
  keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

  function keyboardDidShow() {
    setKeyboardShow(true);
  }
  function keyboardDidHide() {
    setKeyboardShow(false);
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Container.container}>
      <SafeAreaView style={Container.scrollView}>
        <ScrollView >
          <View style={Container.View}>
            <View style={Container.list}>
              <Text style={Container.label}>Nome</Text>
              <TextInput
                style={Container.input}
                value={pet.nome}
                onChangeText={(text) => setPet({ ...pet, nome: text })}
              />
              <Text style={Container.label}>Peso</Text>
              <TextInput
                style={Container.input}
                value={pet.peso}
                onChangeText={(text) => setPet({ ...pet, peso: text })}
              />
              <Text style={Container.label}>Raça</Text>
              <TextInput
                style={Container.input}
                value={pet.raca}
                onChangeText={(text) => setPet({ ...pet, raca: text })}
              />
              <Text style={Container.label}>Nascimento</Text>
              <TouchableOpacity style={Container.input}>
                <Text>{getNasc(pet.nascimento)}</Text>
              </TouchableOpacity>
              <Text style={Container.label}>Selecionar Imagem</Text>
              <TouchableOpacity style={Container.avatar}>
                {pet.avatar != '' ?
                  <Image style={Container.imagePet} source={{ uri: pet.avatar }} />
                  :
                  <Image style={Container.imagePet} source={require('../../../assets/icons/PetAvatar.png')} />
                }
              </TouchableOpacity>
            </View>
            <View style={Container.rowBtn}>
              <TouchableOpacity
                style={Container.cancelButton}
                accessibilityLabel="Cancelar"
              >
                <Text style={Container.textBtn}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Container.saveButton}
                accessibilityLabel="Salvar"
              >
                <Text style={Container.textBtn}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>

  );
}

const getNasc = (nasc) => {
  if (nasc) {
    const data = nasc.toDate()
    return data.toString()
  }
}