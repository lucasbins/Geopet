import React, { useContext, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import AuthContext from '../../contexts/auth';

export const Responsible = ({ navigation }) => {
  const auth = useContext(AuthContext)
  const [user, setUser] = useState(auth.user)

  const handleLogout = () => {
    auth.logout()
    navigation.navigate('Login')
  }

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
      {user && <View style={styles.infoUser}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.text}>{user.name_full}</Text>
        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.text}>{user.email}</Text>
        <Text style={styles.label}>Telefone</Text>
        <Text style={styles.text}>{user.phone}</Text>
      </View>}
      
      <View style={styles.rowBtn}>
        <TouchableOpacity
          style={styles.logoutButton}
          accessibilityLabel="Editar"
          onPress={handleLogout}>
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
