import React, {useEffect, useRef, useState} from 'react';
import MapView from 'react-native-maps';
import {Marker, Circle} from 'react-native-maps';
import { View } from 'react-native';
import * as Location from 'expo-location';
import { registerRootComponent } from 'expo';
import { styles } from './styles';

import {API_KEY} from '../../config/apiKey'

export function Maps({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState(null);

  function searchVet (location) {
    //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=2000&keyword=veterinário&key=${API_KEY}
    //https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=veterinario&inputtype=textquery&locationbias=circle%3A2000%${location.latitude}%${location.longitude}&key=${API_KEY}
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=2000&keyword=veterinário&key=${API_KEY}`
    fetch(url,{ method: 'GET'})
    .then((resp) => resp.json())
    .then(function(data) {
      console.log('Localizou')
      setMarkers(data.results)
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToSuppliedMarkers(markers.map(({ _id }) => _id));
    }
  }, [markers]);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      searchVet(location.coords);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location)
  }

  return (
    <View style={styles.background}> 
      <View style={styles.container}>
        {location != null && <MapView style={styles.map} 
          region={
            { latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.500,
              longitudeDelta: 0.500 }}
          loadingEnabled={true}
          ref={mapRef}
          showsUserLocation={true}
          userInterfaceStyle='dark'
          showsBuildings={false}
          showsIndoors={false}
        >
          <Circle center={{latitude : location.coords.latitude , longitude : location.coords.longitude}} radius={2500} fillColor={"rgba(0,166,172, 0.2)"} strokeWidth={2} strokeColor={"rgba(0,134,129,100)"}/>
        {markers != null && markers.map((marker, i) => {
          return ( 
          <Marker 
            key={i} 
            title={marker.name} 
            coordinate={{latitude: marker.geometry.location.lat, longitude: marker.geometry.location.lng}} 
            pinColor={"#04A6AC"}
            description={marker.opening_hours.open_now ? "Aberto" : "Fechado"}>
            </Marker>
          )
        })}
        </MapView>}
        
    </View>
    </View>
    
  );
}

registerRootComponent(Maps);

