import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import './src/firebase/firebase';
import { ThemeProvider } from './src/context/Modo_Claro';

export default function App() {
  return (
     <ThemeProvider>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
    </ThemeProvider>
  );
}
