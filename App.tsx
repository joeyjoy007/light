import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Stack_navigation from './src/navigation/Stack_navigation'
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
       <NavigationContainer>
         <Stack_navigation/>
       </NavigationContainer>
       <Toast/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})