import React, { useContext } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import AuthContext from '../../contexts/auth';

import { Container } from './styles';
import { CreateList } from '../../components/createList';

export const Agenda = ({navigation}) => {
  const auth = useContext(AuthContext)
  const pets = auth.pets

  const agenda = {
    vac : [],
    med : [],
    anti : []
  }

  const onPressAgenda = (tipo, data, petNome) => {
    switch(tipo){
      case 'vac':
        pets.map((pet) => {
          if(pet.nome === petNome )
            navigation.navigate("NewVac", {pet: pet, vac: data, acao: 'edit'})
        })
        break;
      case 'med':
        pets.map((pet) => {
          if(pet.nome === petNome )
            navigation.navigate("NewMed", {pet: pet, med: data, acao: 'edit'})
        })
        break;
      case 'anti':
        pets.map((pet) => {
          if(pet.nome === petNome )
            navigation.navigate("NewAnti", {pet: pet, anti: data, acao: 'edit'})
        })
        break;
    }
  }

  pets.map((pet) => {
    if (pet.vacina.length > 0){
      pet.vacina.map((vac) => {
        if(vac.aplicado == false)
          agenda.vac.push({nomePet: pet.nome,vac: vac, tipo: "vac"})
      })
    }
    if (pet.medicamento.length > 0){
      pet.medicamento.map((med) => {
        if(med.emTratamento)
          agenda.med.push({nomePet: pet.nome,med: med, tipo: "med"})
      })
    }
    if (pet.antiparasitario.length > 0){
      pet.antiparasitario.map((anti) => {
        if(anti.aplicado == false)
        agenda.anti.push({nomePet: pet.nome, anti: anti, tipo: "anti"})
      })
    }
  })

  return (
    <SafeAreaView style={Container.container}>
      <ScrollView style={Container.scrollView}>
        <CreateList data={agenda} onPress={onPressAgenda}/>
      </ScrollView>
    </SafeAreaView>
  );
}