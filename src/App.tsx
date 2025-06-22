import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import './src/firebase/firebase';
import { ThemeProvider } from './src/context/Modo_Claro';
import { UserProvider } from './src/context/User_Context';

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </ThemeProvider>
    </UserProvider>
  );
}
