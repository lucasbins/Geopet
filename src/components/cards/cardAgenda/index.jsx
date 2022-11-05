import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Container } from './styles';

export const CardAgenda = ({data, onPress}) => {
  const agendas = priorizaData(data)

  

  return (
    <>
      {agendas.map((agenda, i) => {
        switch (agenda.tipo) {
          case "vac":
            return (
              <Pressable 
                style={calculaData(agenda.vac.proximaVacina)}
                onPress={()=> onPress('vac',agenda.vac, agenda.nomePet)}
                key={i}>
                <View style={Container.row}>
                  <Text style={Container.text}>{agenda.nomePet}</Text>
                  <Text style={Container.text}>Vacina: {agenda.vac.nome}</Text>
                </View>
                <Text style={Container.textTitle}>Data: {formataData(agenda.vac.proximaVacina)}</Text>
              </Pressable>
            )
          case "med":
            return (
              <Pressable 
                style={calculaData(agenda.med.dataFim)}
                onPress={()=> onPress('med',agenda.med, agenda.nomePet)}
                key={i}>
                <View style={Container.row}>
                  <Text style={Container.text}>{agenda.nomePet}</Text>
                  <Text style={Container.text}>Remédio: {agenda.med.nome}</Text>
                </View>
                <Text style={Container.textTitle}>Fim do Tratamento: {formataData(agenda.med.dataFim)}</Text>
                <Text style={Container.text}>Horário: {agenda.med.horario}</Text>
                <Text style={Container.text}>Qtd.: {agenda.med.tipo}</Text>
              </Pressable>
            )
          case "anti":
            return (
              <Pressable 
                style={calculaData(agenda.anti.dataFim)}
                onPress={()=> onPress('anti',agenda.anti, agenda.nomePet)}
                key={i}>
                <View style={Container.row}>
                  <Text style={Container.text}>{agenda.nomePet}</Text>
                  <Text style={Container.text}>Nome: {agenda.anti.fabricante}</Text>
                </View>
                <Text style={Container.textTitle}>Troca: {formataData(agenda.anti.dataFim)}</Text>
              </Pressable>
            )
        }
      })}
    </>
  )
}

const formataData = (date) => {
  const d = new Date(date)
  const dia = d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`
  const mes = d.getMonth()+1 < 10 ? `0${d.getMonth() +1}` : `${d.getMonth()+1}`
  return (dia + "/" + mes + `/${d.getFullYear()}`)
}

const calculaData = (date) => {
  const dataFim = new Date(date)
  const data = new Date()
  const diff = Math.abs(dataFim.getTime() - data.getTime())

  if(Math.ceil(diff / (1000 * 60 * 60 * 24)) > 180){
    return Container.list
  }else{
    if(dataFim < data){
      return Container.listRed
    }else{
      return Container.listWarning
    }
  }
}

const priorizaData = (agendas) => {
  agendas.map((agenda) =>{
    if(agenda.tipo == "vac"){
      agendas.sort((a,b) => (a.vac.proximaVacina < b.vac.proximaVacina) ? -1 : 1)
    }else if(agenda.tipo == "med"){
      agendas.sort((a,b) => (a.med.dataFim < b.med.dataFim) ? -1 : 1)
    }else{
      agendas.sort((a,b) => (a.anti.proximaVacina < b.anti.proximaVacina) ? -1 : 1)
    }
  })

  return agendas
}
