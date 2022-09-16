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

export const NewAnti = ({navigation,route}) => {
  const [ anti, setAnti ] = useState({
    Fabricante: '',
    dataInicio: new Date(),
    dataFim: new Date(),
    Intervalo: '',
    Tipo: '',
    horario: '',
    tipoAplicacao: ''
  })
  const [dataInicio, setDataInicio] = useState(new Date())
  const [dataFim, setDataFim] = useState(new Date())

  const api = useApi();
  
  useEffect(() => {
    if(route.params.acao == 'edit'){
      setAnti(route.params.anti)
      setDataInicio(route.params.anti.dataInicio.toDate())
      setDataFim(route.params.anti.dataFim.toDate())
    }else if(route.params.acao == 'new'){
      setAnti({...anti, pet_uid: route.params.pet.uuid})
    }
  },[])

  const handleCancel = () =>{
    navigation.navigate('Anti', {pet: route.params.pet})
  }

  const handleSelectDataInicio = (date) => {
    setDateInicio(date)
  }
  const handleSelectDataFim = (date) => {
    setDataFim(date)
  }

  const handleSaveAnti = () => {
    let docData = anti;
    docData.dataInicio = Timestamp.fromDate(dataInicio)
    docData.dataFim = Timestamp.fromDate(dataFim)
    if(anti){      
      if(route.params.acao === 'new'){
        api.setanti(docData).then(() => {
          showAlert()
          navigation.navigate('Anti', {pet: route.params.pet})
        })
      }else if(route.params.acao === 'edit'){
        api.updateanti(docData).then(() => {
          showAlert()
          navigation.navigate('Anti', {pet: route.params.pet})
        })
      }
    }
  }

  return (
    <SafeAreaView style={Container.container}>
      <ScrollView style={Container.scrollView}>
      <View style={Container.View}>
            <View style={Container.list}>
              <Text style={Container.label}>Fabricante:</Text>
              <TextInput
                style={Container.input}
                value={anti.Fabricante}
                onChangeText={(text) => setAnti({ ...anti, Fabricante: text })}
              />
              <Text style={Container.label}>Tipo:</Text>
              <TextInput
                style={Container.input}
                value={anti.Tipo}
                onChangeText={(text) => setAnti({ ...anti, Tipo: text })}
              />
              <Text style={Container.label}>Intervalo de dias:</Text>
              <TextInput
                style={Container.input}
                value={anti.Intervalo}
                onChangeText={(text) => setAnti({ ...anti, Intervalo: text })}
              />
              <Text style={Container.label}>Horario:</Text>
              <TextInput
                style={Container.input}
                value={anti.horaAplicacao}
                onChangeText={(text) => setAnti({ ...anti, horaAplicacao: text })}
              />
              <Text style={Container.label}>Tipo de Aplicação:</Text>
              <TextInput
                style={Container.input}
                value={anti.tipoAplicacao}
                onChangeText={(text) => setAnti({ ...anti, tipoAplicacao: text })}
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
                onPress={handleSaveAnti}
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
    "Antiparasitario adicionado com sucesso!",
  );
}