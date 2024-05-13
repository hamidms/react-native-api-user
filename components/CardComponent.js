import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const CardComponent = ({ data }) => {
  const { id, name, username, email, address } = data;
  const { street, city, zipcode, geo } = address;

  const avatarUrl = `https://i.pravatar.cc/150?img=${id}`;

  return (
    <View style={styles.card}>
      <Avatar
        source={{ uri: avatarUrl }}
        rounded
        size="large"
        containerStyle={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>@{username}</Text>
      <View style={styles.email}>
        <Icon name="email-outline" size={25} color="#6D2932" style={styles.icon} />
        <Text style={styles.emailText}>{email}</Text>
      </View>
      <View style={styles.address}>
        <Icon name="map-marker-outline" size={25} color="#6D2932" style={styles.icon} />
        <View>
        <Text style={styles.addressText}>
          {street}, {city}, {zipcode}
        </Text>
        <Text style={styles.addressText}>{geo.lat}"S {geo.lng}"E</Text>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#453E51',
    backgroundColor: '#E8D8C4',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  avatar: {
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#B19B81',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#561C24',
  },
  username: {
    paddingVertical: 5,
    color: '#561C24',
    marginBottom: 5
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  emailText: {
    color: '#6D2932',
  },
  addressText: {
    color: '#6D2932',
  },
});

export default CardComponent;
