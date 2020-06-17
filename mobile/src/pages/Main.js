import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords  } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
      }

      const { latitude, longitude } = coords;

      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      })
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (


    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={currentRegion}>
        <Marker coordinate={{ latitude: 22.3740334, longitude: -41.7981034 }}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/17788722?s=460&u=9d480670bf5b2e9a62a5ab58e6ad4d24d67dd31d&v=4' }} />
          <Callout>
            <View styles={styles.callout}>
              <Text styles={styles.devName} >Vinícius Neto</Text>
              <Text styles={styles.devBio} >Computer Scientist, Fullstack Developer. Lately I've been studying NodeJS, React, React Native and related technologies.</Text>
              <Text styles={styles.devTechs} >NodeJS, ReactJS, React Native</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF'
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio: {
    color: '#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  },
});

export default Main;