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
import * as ImagePicker from 'expo-image-picker';
import { Timestamp } from "firebase/firestore";

import AuthContext from '../../../contexts/auth';
import { useApi } from '../../../hooks/useApi';

import { Container } from './styles';
import { ImageButton } from '../../../components/imageButton';
import { Calendario } from '../../../components/calendario';
import { Button } from '../../../components/button';

export const NewPets = ({ navigation, route }) => {
  const params = route.params
  const [pet, setPet] = useState({
    avatar: '',
    nome: '',
    raca: '',
    porte: '',
    nascimento: Timestamp.now(),
    peso: '',
    vacina: [],
    medicamento: [],
    antiparasitario: []
  })
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState('')

  const api = useApi()
  const auth = useContext(AuthContext)

  useEffect(() => {
    if (params.acao == 'edit') {
      setPet(params.pet)
      setDate(params.pet.nascimento.toDate())
      setImage(params.pet.avatar)
    }
  }, [])

  const handleSelectNascimento = (date) => {
    setDate(date);
    setPet({...pet, nascimento: Timestamp.fromDate(date)})
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
      setPet({...pet, avatar: result.base64})
    }
  };

  const handleCancel = () => {
    navigation.navigate('Pets')
  }

  const handleSavePet = () => {
    let docData = pet;
    if(pet){
      if(pet.user_uid == null){
        docData.user_uid = auth.user
      }
      if(params.acao == 'new'){
        api.setPets(docData).then(() => {
          showAlert()
          auth.getPets(auth.user)
          navigation.navigate('Pets')
        })
      }else if(params.acao == 'edit'){
        api.updatePet(docData).then(() => {
          showAlert()
          auth.getPets(auth.user)
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
              <Calendario data={date} setDate={handleSelectNascimento}/>
              <Text style={Container.label}>Selecionar Imagem</Text>
              <ImageButton image={pet.avatar} pickImage={pickImage}/>
            </View>
            <View style={Container.rowBtn}>
              <TouchableOpacity
                style={Container.cancelButton}
                accessibilityLabel="Cancelar"
                onPress={handleCancel}
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

const showAlert = () =>{
  Alert.alert(
    "Sucesso",
    "Seu Pet foi adicionado com sucesso",
  );
}
  