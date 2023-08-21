import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home_screen from '../screens/Home_screen';


const Stack_navigation = () => {

    const Stack = createNativeStackNavigator();


  return (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={Home_screen} options={{headerShown:false}}/>
  </Stack.Navigator>
  )
}

export default Stack_navigation

const styles = StyleSheet.create({})