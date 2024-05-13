import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const MapComponent = ({ route }) => {
  const { data } = route.params;
  const latitude = parseFloat(data.address.geo.lat);
  const longitude = parseFloat(data.address.geo.lng);

  return (
    <View style={styles.container}>
      <View style={styles.mapLayer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 50,
            longitudeDelta: 50,
          }}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title={data.name}
            description={`ID: ${data.id}`}
          />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mapLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;
