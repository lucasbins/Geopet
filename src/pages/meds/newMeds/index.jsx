import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  Switch
} from 'react-native';
import { Calendario } from '../../../components/calendario';
import { Button } from '../../../components/button';

import { useApi } from '../../../hooks/useApi';
import AuthContext from '../../../contexts/auth';

import { uuidv4 } from "@firebase/util";

import { Container } from './styles';


export const NewMed = ({navigation,route}) => {
  const [ med, setMed ] = useState({
    uuid: '',
    nome: '',
    dataInicio: new Date().toJSON(),
    dataFim: new Date().toJSON(),
    intervalo: '',
    tipo: '',
    horario: '',
    emTratamento: true
  })
  const [dataInicio, setDataInicio] = useState(new Date())
  const [dataFim, setDataFim] = useState(new Date())

  const api = useApi();
  const auth = useContext(AuthContext)
  
  useEffect(() => {
    if(route.params.acao == 'edit'){
      setMed(route.params.med)
      setDataInicio(new Date(route.params.med.dataInicio))
      setDataFim(new Date(route.params.med.dataFim))
    }else if(route.params.acao == 'new'){
      setMed({...med, uuid: uuidv4()})
    }
  },[])

  const handleCancel = () =>{
    navigation.navigate('Menu')
  }

  const handleSelectDataInicio = (date) => {
    setDataInicio(date)
    setMed({...med, dataInicio: date.toJSON()})
  }
  const handleSelectDataFim = (date) => {
    setDataFim(date)
    setMed({...med, dataFim: date.toJSON()})
  }

  const handleSaveMed = () => {
    let docData = route.params.pet;
    if(med){      
      if(route.params.acao === 'new'){
        docData.medicamento.push(med)
        savePet(docData)
        Alert.alert("Sucesso","Medicamento adicionado com sucesso!")
      }else if(route.params.acao === 'edit'){
        docData.medicamento.map((medicamento, i) => {
          if(medicamento.uuid == med.uuid){
            docData.medicamento[i] = med;
          }
        })
        savePet(docData)
        Alert.alert("Sucesso","Medicamento alterado com sucesso!")
      }
    }
  }

  const handleDeleteMed = () => {
    Alert.alert("Cuidado", "Você tem certeza que quer deletar?", [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => {
          let docData = route.params.pet;
          docData.medicamento.map((medicamento, i) => {
            if(medicamento.uuid == med.uuid){
              docData.medicamento.splice(i,1);
            }
          })
          savePet(docData)
        }
      }]
    );
  }

  const savePet = async (docData) => {
    await api.updatePet(docData).then(() => {
      auth.getPets(route.params.pet.user_uid)
      navigation.navigate('Meds', {pet: route.params.pet})
    })
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
                onChangeText={(text) => setMed({ ...med, tipo: text })}
              />
              <Text style={Container.label}>Intervalo de dias:</Text>
              <TextInput
                style={Container.input}
                value={med.intervalo}
                onChangeText={(text) => setMed({ ...med, intervalo: text })}
              />
              <Text style={Container.label}>Horário:</Text>
              <TextInput
                style={Container.input}
                value={med.horario}
                onChangeText={(text) => setMed({ ...med, horario: text })}
              />
              <Text style={Container.label}>Início do tratamento:</Text>
              <Calendario data={dataInicio} setDate={handleSelectDataInicio}/>
              <Text style={Container.label}>Fim do tratamento:</Text>
              <Calendario data={dataFim} setDate={handleSelectDataFim}/>
              <View style={Container.rowBtnSwitch}>
                <Text style={Container.labelSwitch}>Em tratamento: </Text>
                <Switch value={med.emTratamento} onChange={() => setMed({...med, emTratamento: !med.emTratamento})}/>
              </View>
            </View>
            <View style={Container.rowBtn}>
            {route.params.acao === 'edit' && 
                <Button title="Deletar" callback={handleDeleteMed}/>
              }
                <Button title="Cancelar" callback={handleCancel}/>
              <Button title="Salvar" callback={handleSaveMed}/>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
    );
}