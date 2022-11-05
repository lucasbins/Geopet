import React from 'react';
import { Text, View } from 'react-native';
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
      <Button title={"faq"} text={"3 - Como adicionar uma vacina, medicamento ou antiparasitário?"} callback={() => onPressFaq(3)} />
      <Button title={"faq"} text={"4 - Como remover uma vacina, medicamento ou antiparasitário?"} callback={() => onPressFaq(4)} />
      <Button title={"faq"} text={"5 - Como localizar uma clínica veterinária?"} callback={() => onPressFaq(5)} />
      <Button title={"faq"} text={"6 - Como localizar uma petshop?"} callback={() => onPressFaq(6)} />
    </View>
  );
}