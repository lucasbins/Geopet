import React, { useEffect, useState } from 'react';
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
import { Container } from './styles';
import { Calendario } from '../../../components/calendario';
import { useApi } from '../../../hooks/useApi';
import { Timestamp } from "firebase/firestore";
import { ImageButton } from '../../../components/imageButton';

export const NewVac = ({navigation,route}) => {
  const [ vac, setVac ] = useState({
    name: '',
    date: new Date(),
    nextVac: new Date(),
    pet_uid: '',
    rotulo: ''
  })
  const [dateVac, setDateVac] = useState(new Date())
  const [nextVac, setNextVac] = useState(new Date())
  const [ image, setImage ] = useState('')

  const api = useApi();
  
  useEffect(() => {
    if(route.params.acao == 'edit'){
      setVac(route.params.vac)
      setDateVac(route.params.vac.date.toDate())
      setNextVac(route.params.vac.nextVac.toDate())
      setImage(route.params.vac.rotulo)
    }else if(route.params.acao == 'new'){
      setVac({...vac, pet_uid: route.params.pet.uuid})
    }
  },[])

  const handleCancel = () =>{
    navigation.navigate('Vacs', {pet: route.params.pet})
  }

  const handleSelectDate = (date) => {
    setDateVac(date)
  }
  const handleSelectNextVac = (date) => {
    setNextVac(date)
  }

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

  const handleSaveVac = () => {
    let docData = vac;
    docData.date = Timestamp.fromDate(dateVac)
    docData.nextVac = Timestamp.fromDate(nextVac)
    if(vac){
      if(image !== ''){
        docData.rotulo = image
      }
      
      if(route.params.acao === 'new'){
        api.setVac(docData).then(() => {
          showAlert()
          navigation.navigate('Vacs', {pet: route.params.pet})
        })
      }else if(route.params.acao === 'edit'){
        api.updateVac(docData).then(() => {
          showAlert()
          navigation.navigate('Vacs', {pet: route.params.pet})
        })
      }
    }
  }

  return (
    <SafeAreaView style={Container.container}>
      <ScrollView style={Container.scrollView}>
      <View style={Container.View}>
            <View style={Container.list}>
              <Text style={Container.label}>Nome</Text>
              <TextInput
                style={Container.input}
                value={vac.name}
                onChangeText={(text) => setVac({ ...vac, name: text })}
              />
              <Text style={Container.label}>Data da vacina:</Text>
              <Calendario data={dateVac} setDate={handleSelectDate}/>
              <Text style={Container.label}>Data da proxima vacina:</Text>
              <Calendario data={nextVac} setDate={handleSelectNextVac}/>
              <Text style={Container.label}>Foto do Rotulo:</Text>
              <ImageButton image={image} pickImage={pickImage}/>
            </View>
            <View style={Container.rowBtn}>
            {route.params.acao === 'edit' && 
                <TouchableOpacity
                  style={Container.deleteButton}
                  accessibilityLabel="Deletar"
                  onPress={handleCancel}
                >
                  <Text style={Container.textBtn}>Deletar</Text>
                </TouchableOpacity>
              }
              <TouchableOpacity
                style={Container.cancelButton}
                accessibilityLabel="Cancelar"
                onPress={handleCancel}
              >
                <Text style={Container.textBtn}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Container.saveButton}
                accessibilityLabel="Salvar"
                onPress={handleSaveVac}
              >
                <Text style={Container.textBtn}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
    );
}

const showAlert = () =>{
  Alert.alert(
    "Sucesso",
    "Vacina adicionada com sucesso!",
  );
}