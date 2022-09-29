import React, { useState } from 'react';
import { SafeAreaView, Text, ScrollView, View} from 'react-native';
import { CardAgenda } from '../../components/cards/cardAgenda';

import { Container } from './styles';

export const Agenda = () => {
  return (
    <SafeAreaView style={Container.container}>
      <ScrollView style={Container.scrollView}>
        <View style={Container.View}>
          <CardAgenda title={'Vacinas'}/>
          <CardAgenda title={'Remédios'}/>
          <CardAgenda title={'Antiparasitarios'}/>
        </View>
      </ScrollView>
  </SafeAreaView>
  );
}
