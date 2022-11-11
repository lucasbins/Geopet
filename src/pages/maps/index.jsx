import React, { useEffect, useRef, useState } from 'react';
import MapView from 'react-native-maps';
import { Marker, Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { View, Text, Image, Alert } from 'react-native';
import * as Location from 'expo-location';
import { registerRootComponent } from 'expo';
import { styles } from './styles';
import { Button } from '../../components/button'

import { API_KEY } from '../../config/firebaseconfig'
import { FilterModal } from '../../components/filterModal';



export function Maps() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [params, setParams] = useState({
    radius: 2000,
    type: 'veterinary_care'
  })

  const searchVet = (location, param) => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=${param.radius}&type=${param.type}&key=${API_KEY}`
    fetch(url, { method: 'GET' })
      .then((resp) => resp.json())
      .then(function (data) {
        if (data.status != 'OK') {
          Alert.alert("Erro", data.status)
        } else {
          setMarkers(data.results)
        }
      })
  }

  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToSuppliedMarkers(markers.map(({ _id }) => _id));
    }
  }, [mapRef]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      searchVet(location.coords, params);
    })();
  }, []);

  let text = 'Carregando';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location)
  }

  const showOpen = (isOpen) => {
    if (isOpen)
      return isOpen.open_now ? 'Aberto' : 'Fechado'
  }

  const handleFilter = async (newParams) => {
    setParams(newParams)
    setModalVisible(!modalVisible)
    await searchVet(location.coords, newParams);
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {location != null ? <MapView style={styles.map}
          region={
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          provider={PROVIDER_GOOGLE}
          loadingEnabled={true}
          ref={mapRef}
          showsUserLocation={true}
          userInterfaceStyle='dark'
          showsBuildings={false}
          showsIndoors={false}
          followsUserLocation={true}
        >
          <Circle center={{ latitude: location.coords.latitude, longitude: location.coords.longitude }} radius={params.radius} fillColor={"rgba(0,166,172, 0.2)"} strokeWidth={2} strokeColor={"rgba(0,134,129,100)"} />
          {markers != null && markers.map((marker, i) => {
            return (
              <Marker
                key={i}
                title={marker.name}
                coordinate={{ latitude: marker.geometry.location.lat, longitude: marker.geometry.location.lng }}
                description={showOpen(marker.opening_hours)}
              >
                <View>
                  <Image style={styles.pin}
                    source={require('../../assets/icons/pin.png')} />
                </View>
              </Marker>
            )
          })}
        </MapView> :
        <Text style={styles.loading}>{text}</Text>
        }
        <Button title={"Filtrar"} callback={() => setModalVisible(!modalVisible)} />
        <FilterModal modalVisible={modalVisible} setModalVisible={handleFilter} />
      </View>
    </View>

  );
}

registerRootComponent(Maps);

