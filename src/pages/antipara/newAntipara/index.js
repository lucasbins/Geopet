import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Calendario } from '../../../components/calendario';

import { useApi } from '../../../hooks/useApi';
import AuthContext from '../../../contexts/auth';

import { Timestamp } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";

import { Container } from './styles';
import { Button } from '../../../components/button';

export const NewAnti = ({ navigation, route }) => {
  const [anti, setAnti] = useState({
    uuid: '',
    fabricante: '',
    dataInicio: Timestamp.now(),
    dataFim: Timestamp.now(),
    intervalo: '',
    tipo: '',
    horario: '',
    tipoAplicacao: ''
  })
  const [dataInicio, setDataInicio] = useState(new Date())
  const [dataFim, setDataFim] = useState(new Date())

  const api = useApi()
  const auth = useContext(AuthContext)

  useEffect(() => {
    if (route.params.acao == 'edit') {
      setAnti(route.params.anti)
      setDataInicio(route.params.anti.dataInicio.toDate())
      setDataFim(route.params.anti.dataFim.toDate())
    } else if (route.params.acao == 'new') {
      setAnti({ ...anti, uuid: uuidv4() })
    }
  }, [])

  const handleCancel = () => {
    navigation.navigate('Anti', { pet: route.params.pet })
  }

  const handleSelectDataInicio = (date) => {
    setDateInicio(date)
    setAnti({ ...anti, dataInicio: Timestamp.fromDate(date) })
  }
  const handleSelectDataFim = (date) => {
    setDataFim(date)
    setAnti({ ...anti, dataInicio: Timestamp.fromDate(date) })
  }

  const handleSaveAnti = () => {
    let docData = route.params.pet;
    if (anti) {
      if (route.params.acao === 'new') {
        docData.antiparasitario.push(anti)
        savePet(docData)
        Alert.alert("Sucesso", "Antiparasitario adicionado com sucesso!")
      } else if (route.params.acao === 'edit') {
        docData.antiparasitario.map((antiparasitario, i) => {
          if (antiparasitario.uuid == anti.uuid) {
            docData.antiparasitario[i] = anti;
          }
        })
        savePet(docData)
        Alert.alert("Sucesso", "Medicamento alterado com sucesso!")
      }
    }
  }

  const handleDeleteAnti = () => {
    Alert.alert("Cuidado", "Você tem certeza que quer deletar?", [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => {
          let docData = route.params.pet;
          docData.antiparasitario.map((antiparasitario, i) => {
            if (antiparasitario.uuid == anti.uuid) {
              docData.antiparasitario.splice(i, 1);
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
      navigation.navigate('Anti', { pet: route.params.pet })
    })
  }

  return (
    <SafeAreaView style={Container.container}>
      <ScrollView style={Container.scrollView}>
        <View style={Container.View}>
          <View style={Container.list}>
            <Text style={Container.label}>Fabricante:</Text>
            <TextInput
              style={Container.input}
              value={anti.fabricante}
              onChangeText={(text) => setAnti({ ...anti, fabricante: text })}
            />
            <Text style={Container.label}>Tipo:</Text>
            <TextInput
              style={Container.input}
              value={anti.tipo}
              onChangeText={(text) => setAnti({ ...anti, tipo: text })}
            />
            <Text style={Container.label}>Intervalo de dias:</Text>
            <TextInput
              style={Container.input}
              value={anti.intervalo}
              onChangeText={(text) => setAnti({ ...anti, intervalo: text })}
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
            <Calendario data={dataInicio} setDate={handleSelectDataInicio} />
            <Text style={Container.label}>Fim do tratamento:</Text>
            <Calendario data={dataFim} setDate={handleSelectDataFim} />
          </View>
          <View style={Container.rowBtn}>
            {route.params.acao === 'edit' &&
              <Button title="Deletar" callback={handleDeleteAnti} />
            }
            <Button title="Cancelar" callback={handleCancel} />
            <Button title="Salvar" callback={handleSaveAnti} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}