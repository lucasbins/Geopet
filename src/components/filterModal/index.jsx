import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { RadioButton } from "../radioButton";
import Slider from '@react-native-community/slider';

import { Container } from "./styles";

export const FilterModal = ({ modalVisible, setModalVisible }) => {
  const [params, setParams] = useState({
    radius: 2000,
    type: 'veterinary_care'
  })
  const types = [
    { value: 'veterinary_care', label: 'Veterinária' },
    { value: 'pet_store', label: 'Pet Shop' },
  ]

  const handleSelectType = (newType) => {
    setParams({ ...params, type: newType })
  }

  const handleSelectRadius = (value) => {
    setParams({ ...params, radius: value })
  }

  return (
    <View style={Container.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        
      >
        <View style={Container.centeredView}>
          <View style={Container.modalView}>
            <Text style={Container.titleLabel}>Distância:</Text>
            <View>
              <Text>{params.radius /1000}Km</Text>
            </View>
            <View style={Container.sliderView}>
              <Text>2km</Text>
              <Slider
                style={Container.slider}
                minimumValue={2000}
                maximumValue={10000}
                step={100}
                value={params.radius}
                onValueChange={handleSelectRadius}
              />
              <Text>10km</Text>
            </View>
            <Text style={Container.titleLabel}>Estabelecimento:</Text>
            <RadioButton data={types} onSelect={params.type} callback={handleSelectType} />
            <View style={Container.division}>
              <View style={Container.line}>
              </View>
            </View>
            <Pressable
              style={Container.button}
              onPress={() => setModalVisible(params)}
            >
              <Text style={Container.textStyle}>Buscar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};