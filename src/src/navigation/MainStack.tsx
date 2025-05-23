import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from '../screens/TelaInicial';
import Cadastro from '../screens/Cadastro';
import Login from '../screens/Login';
import Home from '../screens/Home';
import MyTabs from './TabsLista';
import Config from '../screens/Config';
import Gastos from '../screens/Gastos';
import Ajuda from '../screens/Ajuda';
import Sobre from '../screens/Sobre';
import Suporte from '../screens/Suporte';

export type RootStackParamList = {
  Inicio: undefined;
  Cadastro: undefined;
  Login: undefined;
  NavLista: undefined;
  Home: undefined;
  Config: undefined;
  Gastos: undefined;
  Ajuda: undefined;
  Sobre: undefined;
  Suporte: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={TelaInicial} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="NavLista" component={MyTabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Gastos" component={Gastos} />
      <Stack.Screen name="Ajuda" component={Ajuda} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Config" component={Config} />
      <Stack.Screen name="Suporte" component={Suporte} />
    </Stack.Navigator>
  );
}
