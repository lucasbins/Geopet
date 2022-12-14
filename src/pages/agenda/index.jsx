import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, Alert } from 'react-native';

import AuthContext from '../../contexts/auth';
import { useApi } from '../../hooks/useApi';

import { Container } from './styles';
import { CreateList } from '../../components/createList';

export const Agenda = ({ navigation }) => {
  const auth = useContext(AuthContext)
  const pets = auth.pets

  const api = useApi();

  const agenda = {
    vac: [],
    med: [],
    anti: []
  }

  const onPressAgenda = (tipo, data, petNome) => {
    switch (tipo) {
      case 'vac':
        pets.map((pet) => {
          if (pet.nome === petNome)
            Alert.alert("Cuidado", "Voce deseja adicionar uma nova vacina ?", [
              {
                text: "Não",
                style: "cancel"
              },
              {
                text: "Sim",
                onPress: () => {
                  let docData = pet;
                  docData.vacina.map((vacina, i) => {
                    if (vacina.uuid == data.uuid) {
                      docData.vacina[i].aplicado = true;
                    }
                  })
                  savePet(docData)
                  navigation.navigate('NewVac', { pet: pet, acao: 'new' })
                }
              }]
            );
        })
        break;
      case 'med':
        pets.map((pet) => {
          if (pet.nome === petNome)
            Alert.alert("Cuidado", "Deseja confirmar o fim do tratamento?", [
              {
                text: "Não",
                style: "cancel"
              },
              {
                text: "Sim",
                onPress: () => {
                  let docData = pet;
                  docData.medicamento.map((med, i) => {
                    if (med.uuid == data.uuid) {
                      docData.medicamento[i].emTratamento = false;
                    }
                  })
                  savePet(docData)
                }
              }]
            );
        })
        break;
      case 'anti':
        pets.map((pet) => {
          if (pet.nome === petNome)
            Alert.alert("Cuidado", "Deseja confirmar o fim do tratamento?", [
              {
                text: "Não",
                style: "cancel"
              },
              {
                text: "Sim",
                onPress: () => {
                  let docData = pet;
                  docData.antiparasitario.map((anti, i) => {
                    if (anti.uuid == data.uuid) {
                      docData.antiparasitario[i].emTratamento = false;
                    }
                  })
                  savePet(docData)
                }
              }]
            );
        })
        break;
    }
  }

  const savePet = async (docData) => {
    await api.updatePet(docData).then(() => {
      auth.getPets(docData.user_uid)
    })
  }

  pets.map((pet) => {
    if (pet.vacina.length > 0) {
      pet.vacina.map((vac) => {
        if (vac.aplicado == false)
          agenda.vac.push({ nomePet: pet.nome, vac: vac, tipo: "vac" })
      })
    }
    if (pet.medicamento.length > 0) {
      pet.medicamento.map((med) => {
        if (med.emTratamento)
          agenda.med.push({ nomePet: pet.nome, med: med, tipo: "med" })
      })
    }
    if (pet.antiparasitario.length > 0) {
      pet.antiparasitario.map((anti) => {
        if (anti.aplicado == false)
          agenda.anti.push({ nomePet: pet.nome, anti: anti, tipo: "anti" })
      })
    }
  })

  return (
    <SafeAreaView style={Container.container}>
      <ScrollView style={Container.scrollView}>
        <CreateList data={agenda} onPress={onPressAgenda} />
      </ScrollView>
    </SafeAreaView>
  );
}