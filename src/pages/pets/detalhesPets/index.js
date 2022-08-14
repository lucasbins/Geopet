import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { RowButtons } from '../../../components/rowButtons';

import { container } from './styles';

export const DetalhesPets = ({ navigation, route }) => {
  const pet = route.params.pet;
  return (
    <SafeAreaView style={container.container}>
      <ScrollView style={container.scrollView}>
        <View style={container.view}>
          <Text style={container.title}>{pet.nome}</Text>
          <View>
            {pet.avatar != '' ?
              <Image style={container.imagePet} source={{uri: pet.avatar}}/>
              :
              <Image style={container.imagePet} source={require('../../../assets/icons/PetAvatar.png')} />
            }
          </View>
          <View style={container.card}>
            <View style={container.line}>
              <Text style={container.label}>Peso: </Text>
              <Text style={container.text}>{pet.peso} kg </Text>
            </View>
            <View style={container.line}>
              <Text style={container.label}>Idade: </Text>
              <Text style={container.text}>{getIdade(pet.nascimento)}</Text>
            </View>
            <View style={container.line}>
              <Text style={container.label}>Raça: </Text>
              <Text style={container.text}>{pet.raca}</Text>
            </View>
            <View style={container.line}>
              <Text style={container.label}>Porte: </Text>
              <Text style={container.text}>{pet.porte}</Text>

            </View>
          </View>
          <View style={container.div}/>
          <View style={container.card}>
            <View style={container.rowButtons}>
              <RowButtons></RowButtons>
            </View>
          </View>
          <View style={container.div}/>
          <View style={container.card}>
            <View style={container.rowButtons}>
              <TouchableOpacity style={container.buttonRed}>
                <Text style={container.textButton}>Deletar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={container.button}
                onPress={() => navigation.navigate('NewPets', {pet : pet , acao: 'edit'})}>
                <Text style={container.textButton}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const getIdade = (nasc) => {
  var d = new Date
  if (nasc) {
    const data = nasc.toDate()
    return calculaIdade(data, d)
  }
}

function calculaIdade(nascimento, hoje) {
  return Math.floor(Math.ceil(Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);
}
