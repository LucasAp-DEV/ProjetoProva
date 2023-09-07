import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import ItemDetailScreen from './src/components/ItemDetail';
import ExtraScreen from './src/components/ExtraScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
        <Stack.Screen name="ExtraScreen" component={ExtraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
