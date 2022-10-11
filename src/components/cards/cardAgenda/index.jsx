import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

export const CardAgenda = ({ data }) => {
  const agendas = priorizaData(data)

  return (
    <>
      {agendas.map((agenda, i) => {
        switch (agenda.tipo) {
          case "vac":
            return (
              <View style={calculaData(agenda.vac.proximaVacina) ? Container.list : Container.listWarning } key={i}>
                <View style={Container.row}>
                  <Text style={Container.text}>{agenda.nomePet}</Text>
                  <Text style={Container.text}>Vacina: {agenda.vac.nome}</Text>
                </View>
                <Text style={Container.textTitle}>Data: {formataData(agenda.vac.proximaVacina)}</Text>
              </View>
            )
          case "med":
            return (
              <View style={calculaData(agenda.med.dataFim) ? Container.list : Container.listWarning } key={i}>
                <View style={Container.row}>
                  <Text style={Container.text}>{agenda.nomePet}</Text>
                  <Text style={Container.textTitle}>Rémedio: {agenda.med.nome}</Text>
                </View>
                <Text style={Container.text}>Fim do Tratamento: {formataData(agenda.med.dataFim)}</Text>
                <Text style={Container.text}>Horário: {agenda.med.horario}</Text>
                <Text style={Container.text}>Qtd.: {agenda.med.tipo}</Text>
              </View>
            )
          case "anti":
            return (
              <View style={calculaData(agenda.anti.dataFim) ? Container.list : Container.listWarning } key={i}>
                <View style={Container.row}>
                  <Text style={Container.text}>{agenda.nomePet}</Text>
                  <Text style={Container.textTitle}>Nome: {agenda.anti.fabricante}</Text>
                </View>
                <Text style={Container.text}>Troca: {formataData(agenda.anti.dataFim)}</Text>
              </View>
            )
        }
      })}
    </>
  )
}

const formataData = (date) => {
  const d = new Date(date)
  return (`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`)
}

const calculaData = (date) => {
  const dataFim = new Date(date)
  const data = new Date()
  const diff = Math.abs(dataFim.getTime() - data.getTime())

  if(Math.ceil(diff / (1000 * 60 * 60 * 24)) > 180){
    return true
  }else{
    return false
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
