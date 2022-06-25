import React, { useState } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, Keyboard, Platform, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './style';

export const NewResponsible = ({ navigation, route }) => {
  const params = route.params.user;
  const [user, setUser] = useState(params);
  const [location, setLocation] = useState(user.location);
  const [keyboardShow, setKeyboardShow] = useState(false);

  keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
  keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

  function keyboardDidShow(){
    setKeyboardShow(true);
  }
  function keyboardDidHide(){
    setKeyboardShow(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
        <SafeAreaView style={styles.scrollView}>
          <ScrollView style={keyboardShow && styles.keyboardOn}>
          <View style={styles.infoUser}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                style={styles.text}
                value={user.name_full}
                onChangeText={(text) => setUser({ ...user, name_full: text })}
              />
              <Text style={styles.label}>Telefone</Text>
              <TextInput
                style={styles.text}
                value={user.phone}
                onChangeText={(text) => setUser({ ...user, phone: text })}
              />
              <Text style={styles.label}>Endereço</Text>
              <TextInput
                style={styles.text}
                value={location.street}
                onChangeText={(text) => setLocation({ ...location, street: text })}
              />
              <Text style={styles.label}>Numero</Text>
              <TextInput
                style={styles.text}
                value={location.number}
                onChangeText={(text) => setLocation({ ...location, number: text })}
              />
              <Text style={styles.label}>Bairro</Text>
              <TextInput
                style={styles.text}
                value={location.district}
                onChangeText={(text) => setLocation({ ...location, district: text })}
              />
              <Text style={styles.label}>Estado</Text>
              <TextInput
                style={styles.text}
                value={location.state}
                onChangeText={(text) => setLocation({ ...location, state: text })}
              />
              <Text style={styles.label}>Pais</Text>
              <TextInput
                style={styles.text}
                value={location.country}
                onChangeText={(text) => setLocation({ ...location, country: text })}
              />
              <Text style={styles.label}>CEP</Text>
              <TextInput
                style={styles.text}
                value={location.cep}
                onChangeText={(text) => setLocation({ ...location, cep: text })}
              />
            </View>
          </ScrollView>
        </SafeAreaView>     
    </KeyboardAvoidingView>

  );
}
