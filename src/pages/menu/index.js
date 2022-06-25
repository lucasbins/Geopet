import React, {useEffect, useState} from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { firebaseConfig } from '../../config/firebaseconfig';
import { styles } from './style';

export const Menu = ({navigation, route}) => {
  const [ user , setUser ] = useState(null);
  const user_uid = route.params.idUser;
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const q = query(collection(db, "responsible"), where("user_uid", "==", user_uid));

  useEffect(() => {
    async function getUser(){
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let user = JSON.parse(JSON.stringify(doc.data()));
      setUser(user)
      })
    }
    getUser();
  }, [])

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
            onPress={() => navigation.navigate('Responsible', {user: user})}
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
