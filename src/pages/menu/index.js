import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export const Menu = ({navigation}) => {

  return (
    <View style={styles.background}>
      <View >
        <Image
          style={styles.logo}
          source={require('../../assets/img/Logo.png')} />
      </View>
      <View style={styles.container}>
        <View style={styles.rowButtons}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Maps')}
            style={styles.buttonsMenu}>
            <Image
              style={styles.imageButton}
              source={require('../../assets/icons/PinMarkerButton.png')} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Responsible')}
            style={styles.buttonsMenu}>
            <Image
              style={styles.imageButton}
              source={require('../../assets/icons/Responsavel.png')} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Pets')}
            style={styles.buttonsMenu}>
            <Image
              style={styles.imageButton}
              source={require('../../assets/icons/Pet.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.rowButtons}>
          <TouchableOpacity style={styles.buttonsMenu}>
            <Image
              style={styles.imageButton}
              source={require('../../assets/icons/Vacinas.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonsMenu}>
            <Image
              style={styles.imageButton}
              source={require('../../assets/icons/Remedios.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonsMenu}>
            <Image
              style={styles.imageButton}
              source={require('../../assets/icons/Parasita.png')} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
