import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import AuthRoutes from './src/routes/auth.routes';
import Login from './src/screens/Login';

export default function App() {
  const [fonteCarregada] = useFonts({
    "PoppinsRegular": Poppins_400Regular,
    "PoppinsBold": Poppins_700Bold,
  });

  if (!fonteCarregada) {
    return <View />
  }
  return (
    
      <Routes/>

  );
}
;
