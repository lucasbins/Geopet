import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Container } from './styles';
import { Calendario } from '../../../components/calendario';
import { useApi } from '../../../hooks/useApi';
import { Timestamp } from "firebase/firestore";

export const NewMed = ({navigation,route}) => {
  const [ med, setMed ] = useState({
    nome: '',
    dataInicio: new Date(),
    dataFim: new Date(),
    intervalo: '',
    tipo: '',
    horario: ''
  })
  const [dataInicio, setDataInicio] = useState(new Date())
  const [dataFim, setDataFim] = useState(new Date())

  const api = useApi();
  
  useEffect(() => {
    if(route.params.acao == 'edit'){
      setMed(route.params.med)
      setDataInicio(route.params.med.dataInicio.toDate())
      setDataFim(route.params.med.dataFim.toDate())
    }else if(route.params.acao == 'new'){
      setMed({...med, pet_uid: route.params.pet.uuid})
    }
  },[])

  const handleCancel = () =>{
    navigation.navigate('Meds', {pet: route.params.pet})
  }

  const handleSelectDataInicio = (date) => {
    setDateInicio(date)
  }
  const handleSelectDataFim = (date) => {
    setDataFim(date)
  }

  const handleSaveMed = () => {
    let docData = med;
    docData.dataInicio = Timestamp.fromDate(dataInicio)
    docData.dataFim = Timestamp.fromDate(dataFim)
    if(med){      
      if(route.params.acao === 'new'){
        api.setMed(docData).then(() => {
          showAlert()
          navigation.navigate('Meds', {pet: route.params.pet})
        })
      }else if(route.params.acao === 'edit'){
        api.updateMed(docData).then(() => {
          showAlert()
          navigation.navigate('Meds', {pet: route.params.pet})
        })
      }
    }
  }

  return (
    <SafeAreaView style={Container.container}>
      <ScrollView style={Container.scrollView}>
      <View style={Container.View}>
            <View style={Container.list}>
              <Text style={Container.label}>Nome:</Text>
              <TextInput
                style={Container.input}
                value={med.nome}
                onChangeText={(text) => setMed({ ...med, nome: text })}
              />
              <Text style={Container.label}>Tipo:</Text>
              <TextInput
                style={Container.input}
                value={med.tipo}
                onChangeText={(text) => setMed({ ...med, nome: text })}
              />
              <Text style={Container.label}>Intervalo de dias:</Text>
              <TextInput
                style={Container.input}
                value={med.intervalo}
                onChangeText={(text) => setMed({ ...med, nome: text })}
              />
              <Text style={Container.label}>Horario:</Text>
              <TextInput
                style={Container.input}
                value={med.horario}
                onChangeText={(text) => setMed({ ...med, nome: text })}
              />
              <Text style={Container.label}>Inicio do tratamento:</Text>
              <Calendario data={dataInicio} setDate={handleSelectDataInicio}/>
              <Text style={Container.label}>Fim do tratamento:</Text>
              <Calendario data={dataFim} setDate={handleSelectDataFim}/>
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
                onPress={handleSaveMed}
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
    "Medicamento adicionada com sucesso!",
  );
}