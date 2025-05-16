import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from '../screens/TelaInicial';
import Cadastro from '../screens/Cadastro';
import Login from '../screens/Login';
import MyTabs from './TabsLista';
export type RootStackParamList = {
  Inicio: undefined;
  Cadastro: undefined;
  Login: undefined;
  NavLista: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={TelaInicial} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="NavLista" component={MyTabs} />
    </Stack.Navigator>
  );
}
