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


import { Container } from './styles';
import { Calendario } from '../../../components/calendario';

export const NewVac = ({navigation,route}) => {
  const [ vac, setVac ] = useState({
    name: '',
    date: new Date(),
    next_vac: new Date(),
    pet_uid: ''
  })
  const [dateVac, setDateVac] = useState(route.params.vac.date.toDate())
  const [nextDateVac, setNextDateVac] = useState(route.params.vac.next_vac.toDate())
  
  useEffect(() => {
    if(route.params.acao == 'edit'){
      setVac(route.params.vac)
    }else if(route.params.acao == 'new'){
      setVac({...vac, pet_uuid: route.params.pet.uuid})
    }
  },[])

  const handleCancel = () =>{
    navigation.navigate('Vacs', {pet: route.params.pet})
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
              <Calendario date={dateVac} setDate={setDateVac}/>
              <Text style={Container.label}>Data da proxima vacina:</Text>
              <Calendario date={nextDateVac} setDate={setNextDateVac}/>
              
              <Text style={Container.label}>Selecionar Imagem</Text>
              
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
                accessibilityLabel="Salvar"
              >
                <Text style={Container.textBtn}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
    );
}


