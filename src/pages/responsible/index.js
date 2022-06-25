import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const Responsible = ({ navigation, route }) => {
  const user = route.params.user

  return (
    <View style={styles.container}>
      <View >
        <TouchableOpacity
          accessibilityLabel="Adicionar Foto">
          <Image
            style={styles.imageUser}
            source={require('../../assets/icons/User.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.infoUser}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.text}>{user.name_full}</Text>
        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.text}>{user.email}</Text>
        <Text style={styles.label}>Telefone</Text>
        <Text style={styles.text}>{user.phone}</Text>
        <Text style={styles.label}>Endereço</Text>
        <Text style={styles.text}>{user.location.street}, {user.location.number} - {user.location.district}</Text>
        <Text style={styles.text}>{user.location.state} - {user.location.country}</Text>
      </View>
      <View style={styles.rowBtn}>
        <TouchableOpacity
          style={styles.logoutButton}
          accessibilityLabel="Editar"
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textBtn}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.editButton}
          accessibilityLabel="Editar"
          onPress={() => navigation.navigate('newResponsible', { user: user })}>
          <Text style={styles.textBtn}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
