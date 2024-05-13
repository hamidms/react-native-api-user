import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import CardComponent from './components/CardComponent';
import MapComponent from './components/MapComponent'
import axios from 'axios';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          
          headerStyle: {
            backgroundColor: '#453E51', 
          },
          headerTintColor: '#F4EBE2', 
          headerBackground: () => (
            <ScrollView
              style={{ flex: 1, backgroundColor: '#453E51' }} // Warna latar belakang header atas
            />
          ),
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Users' }}
        />
        <Stack.Screen name="Map" component={MapComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={{ padding: 10 }}>
      {data.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('Map', { data: item })}
        >
          <CardComponent data={item} />
        </TouchableOpacity>
      ))}
      <Text
      style={{
        marginBottom: 20,
        color: '#453E51'
      }}
      >Created by Hamid - 2401973053</Text>
    </ScrollView>
  );
};

export default App;