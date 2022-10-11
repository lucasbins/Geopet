import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, Text, ScrollView, View } from 'react-native';

import AuthContext from '../../contexts/auth';

import { Container } from './styles';
import { CreateList } from '../../components/createList';

export const Agenda = () => {
  const auth = useContext(AuthContext)
  const pets = auth.pets

  const agenda = {
    vac : [],
    med : [],
    anti : []
  }

  pets.map((pet) => {
    if (pet.vacina.length > 0){
      pet.vacina.map((vac) => {
        agenda.vac.push({nomePet: pet.nome,vac: vac, tipo: "vac"})
      })
    }
    if (pet.medicamento.length > 0){
      pet.medicamento.map((med) => {
        agenda.med.push({nomePet: pet.nome,med: med, tipo: "med"})
      })
    }
    if (pet.antiparasitario.length > 0){
      pet.antiparasitario.map((anti) => {
        agenda.anti.push({nomePet: pet.nome, anti: anti, tipo: "anti"})
      })
    }
  })

  return (
    <SafeAreaView style={Container.container}>
      <ScrollView style={Container.scrollView}>
        <CreateList data={agenda}/>
      </ScrollView>
    </SafeAreaView>
  );
}
