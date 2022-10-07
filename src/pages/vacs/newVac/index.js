import React, { useEffect, useState, useContext } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Container } from './styles';

import { Calendario } from '../../../components/calendario';
import { ImageButton } from '../../../components/imageButton';
import { Timestamp } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";

import { useApi } from '../../../hooks/useApi';
import AuthContext from '../../../contexts/auth';
import { Button } from '../../../components/button';

export const NewVac = ({ navigation, route }) => {
  const [vac, setVac] = useState({
    uuid: '',
    nome: '',
    data: Timestamp.now(),
    proximaVacina: Timestamp.now(),
    rotulo: ''
  })
  const [dateVac, setDateVac] = useState(new Date())
  const [nextVac, setNextVac] = useState(new Date())

  const api = useApi();
  const auth = useContext(AuthContext)

  useEffect(() => {
    if (route.params.acao == 'edit') {
      setVac(route.params.vac)
      setDateVac(route.params.vac.data.toDate())
      setNextVac(route.params.vac.proximaVacina.toDate())
    } else if (route.params.acao == 'new') {
      setVac({ ...vac, uuid: uuidv4() })
    }
  }, [])

  const handleCancel = () => {
    navigation.navigate('Vacs', { pet: route.params.pet })
  }

  const handleSelectDate = (date) => {
    setDateVac(date)
    setVac({ ...vac, data: Timestamp.fromDate(date) })
  }
  const handleSelectNextVac = (date) => {
    setNextVac(date)
    setVac({ ...vac, proximaVacina: Timestamp.fromDate(date) })
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
      setVac({ ...vac, rotulo: result.base64 });
    }
  };

  const handleSaveVac = () => {
    let docData = route.params.pet;
    if (vac) {
      if (route.params.acao === 'new') {
        docData.vacina.push(vac)
        savePet(docData)
        Alert.alert("Sucesso", "Vacina adicionada com sucesso!");
      } else if (route.params.acao === 'edit') {
        docData.vacina.map((vacina, i) => {
          if (vacina.uuid == vac.uuid) {
            docData.vacina[i] = vac;
          }
        })
        savePet(docData)
        Alert.alert("Sucesso", "Vacina editada com sucesso!");
      }
    }
  }

  const handleDeleteVac = () => {
    Alert.alert("Cuidado", "Você tem certeza que quer deletar?", [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => {
          let docData = route.params.pet;
          docData.vacina.map((vacina, i) => {
            if (vacina.uuid == vac.uuid) {
              docData.vacina.splice(i, 1);
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
      navigation.navigate('Vacs', { pet: route.params.pet })
    })
  }

  return (
    <SafeAreaView style={Container.container}>
      <ScrollView style={Container.scrollView}>
        <View style={Container.View}>
          <View style={Container.list}>
            <Text style={Container.label}>Nome</Text>
            <TextInput
              style={Container.input}
              value={vac.nome}
              onChangeText={(text) => setVac({ ...vac, nome: text })}
            />
            <Text style={Container.label}>Data da vacina:</Text>
            <Calendario data={dateVac} setDate={handleSelectDate} />
            <Text style={Container.label}>Data da proxima vacina:</Text>
            <Calendario data={nextVac} setDate={handleSelectNextVac} />
            <Text style={Container.label}>Foto do Rotulo:</Text>
            <ImageButton image={vac.rotulo} pickImage={pickImage} />
          </View>
          <View style={Container.rowBtn}>
            {route.params.acao === 'edit' &&
              <Button title="Deletar" callback={handleDeleteVac} />
            }
            <Button title="Cancelar" callback={handleCancel} />
            <Button title="Salvar" callback={handleSaveVac} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

