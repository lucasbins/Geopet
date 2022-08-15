import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { Timestamp } from "firebase/firestore";
import AuthContext from '../../../contexts/auth';
import { useApi } from '../../../hooks/useApi';

import { Container } from './styles';

export const NewPets = ({ navigation, route }) => {
  const params = route.params
  const [pet, setPet] = useState({
    avatar: '',
    nome: '',
    raca: '',
    porte: '',
    nascimento: new Date(),
    peso: ''
  })
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState('')

  const api = useApi()
  const auth = useContext(AuthContext)

  useEffect(() => {
    console.log(params)
    if (params.acao == 'edit') {
      setPet(params.pet)
      setDate(params.pet.nascimento.toDate())
      setImage(params.pet.avatar)
    }
  }, [])

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [2, 2],
      quality: 0.1,
      allowsEditing: true,
      base64: true
    });

    if (!result.cancelled) {
      setImage(result.base64);
    }
  };

  const handleSavePet = () => {
    let docData = pet;
    if(pet){
      if(image){
        docData.avatar = image
      }
      if(date){
        Timestamp.fromDate(date)
      }
      if(pet.user_uid == null){
        docData.user_uid = auth.user.user_uid
      }

      if(params.acao == 'new'){
        api.setPets(docData).then(() => {
          showAlert()
          navigation.navigate('Pets')
        })
      }else if(params.acao == 'edit'){
        api.updatePet(docData).then(() => {
          showAlert()
          navigation.navigate('Pets')
        })
      }
    }
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
              <Text style={Container.label}>Porte</Text>
              <TextInput
                style={Container.input}
                value={pet.porte}
                onChangeText={(text) => setPet({ ...pet, porte: text })}
              />
              <Text style={Container.label}>Nascimento</Text>
              <TouchableOpacity onPress={showDatepicker}>
                <Text style={Container.input}>{getNasc(date)}</Text>
              </TouchableOpacity>
              <Text style={Container.label}>Selecionar Imagem</Text>
              <TouchableOpacity 
                style={Container.avatar}
                onPress={pickImage}>
                {image != '' ?
                  <Image style={Container.imagePet} source={{ uri: 'data:image/jpeg;base64,' + image }} />
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
                onPress={handleSavePet}
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
    return (`${nasc.getDate()} / ${nasc.getMonth()} / ${nasc.getFullYear()}`)
  }
}

const showAlert = () =>{
  Alert.alert(
    "Sucesso",
    "Seu Pet foi adicionado com sucesso",
  );
}
  