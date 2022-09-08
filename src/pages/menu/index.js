import React, {useContext} from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ButtonMenu } from '../../components/buttonMenu';
import { styles } from './style';

import AuthContext from '../../contexts/auth';

export const Menu = ({navigation}) => {
  const auth = useContext(AuthContext)

  const onPressMaps = () => {
    navigation.navigate('Maps')
  }
  const onPressPets = () => {
    navigation.navigate('Pets')
  }
  const onPressAgenda = () => {
    navigation.navigate('Agenda')
  }

  const onPressLogout = () => {
    auth.logout()
    navigation.navigate('Login')
  }

  return (
    <View style={styles.background}>
      <View >
        <Image
          style={styles.logo}
          source={require('../../assets/img/Logo.png')} />
      </View>
      <View style={styles.container}>
        <View style={styles.rowButtons}>
          <ButtonMenu icon={"map"} onPress={onPressMaps} title={'Localizar Veterinaria'} />
          <ButtonMenu icon={"pet"} onPress={onPressPets} title={'Meus Pets'}/>
          <ButtonMenu icon={"agenda"} onPress={onPressAgenda} title={'Agenda'}/>
          <TouchableOpacity
            style={styles.btnLogout}
            onPress={onPressLogout}
          >
            <Text style={styles.logout}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
