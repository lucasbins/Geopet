import React from 'react';
import { View, Text } from 'react-native';
import { CardAgenda } from '../cards/cardAgenda'
import { Container } from './styles';

export const CreateList = ({ data }) => {
  return (
    <>
      {data.vac.length > 0 &&
        <View style={Container.list}>
          <Text style={Container.textTitle}>Vacinas</Text>
          <CardAgenda data={data.vac}/>
        </View>
      }
      {data.med.length > 0 &&
        <View style={Container.list}>
          <Text style={Container.textTitle}>Medicamentos</Text>
          <CardAgenda data={data.med} />
        </View>
      }
      {data.anti.length > 0 &&
        <View style={Container.list}>
          <Text style={Container.textTitle}>Antiparasitarios</Text>
          <CardAgenda data={data.anti} />
        </View>
      }
    </>
  )
}