import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { Button } from '../../components/button';

import { Container } from './styles';

export const Faq = ({navigation}) => {

  const onPressFaq = (id) => {
    navigation.navigate("DetailsFaq", { id : id})
  }

  return (
    <View style={Container.container}>
      <Text style={Container.title}>Perguntas Frequentes:</Text>
      <Button title={"faq"} text={"1 - Como adicionar um pet?"} callback={() => onPressFaq(1)} />
      <Button title={"faq"} text={"2 - Como remover um pet?"} callback={() => onPressFaq(2)} />
      <Button title={"faq"} text={"3 - Como adicionar uma vacina, medicamento ou antiparasitario?"} callback={() => onPressFaq(3)} />
      <Button title={"faq"} text={"4 - Como remover uma vacina, medicamento ou antiparasitario?"} callback={() => onPressFaq(4)} />
      <Button title={"faq"} text={"5 - Como localizar uma clinica veterinaria?"} callback={() => onPressFaq(5)} />
      <Button title={"faq"} text={"6 - Como localizar uma petshop?"} callback={() => onPressFaq(6)} />
    </View>
  );
}

const data = [
  {
    id: 1,
    texto: "Para voce adicionar um pet, devera precionar o botao de mais localizado na parte inferior direito da tela, com isso voce sera direcionado para a tela de cadastro, onde poderá informar os dados de seu pet."
  },
  {
    id: 2,
    texto: "Para voce remover o seu pet, deve selecionar o seu pet na tela de 'meus pets', seguindo para os detalhes do pet. Na parte inferior da tela havera um botão de deletar, ao preciona-lo aparecera uma tela de seguranca antes de deletar."
  }
]