import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, Linking } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Name from './screens/Name';
import Registration from './screens/Registration';

function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Registration"
          component={Registration}
        />
        <Stack.Screen
          name="Name"
          component={Name}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
