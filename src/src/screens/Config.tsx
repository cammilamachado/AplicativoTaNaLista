import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainStack';
import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Config'>;

export default function Configuracoes() {

  const navigation = useNavigation<NavigationProp>();
  const usuarioLogado = auth.currentUser != null;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert('Sessão encerrada', 'Você foi desconectado.');
        navigation.navigate('Inicio');
      })
      .catch((error) => {
        console.error('Erro ao sair:', error);
        Alert.alert('Algo deu errado. Tente novamente.');
      });
  };

  const handleNotificacoes = () => {
    if (!usuarioLogado) {
      Alert.alert(
        'Faça login ou crie uma conta para ativar as notificações.'
      );
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Geral</Text>

        <TouchableOpacity style={[styles.option, styles.border]} onPress={handleNotificacoes}>
          <Ionicons name="notifications-outline" size={22} />
          <Text style={styles.optionText}>Notificações</Text>
          <Ionicons name="chevron-forward-outline" size={18} />
        </TouchableOpacity>

        <View style={styles.line} />

        <Text style={styles.sectionTitle}>Conta</Text>

        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} />
          <Text style={styles.optionText}>Sair</Text>
          <Ionicons name="chevron-forward-outline" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    paddingTop: 100,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#F7F3FC',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    width: 360,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 12,
    paddingHorizontal: 4,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomColor: '#E0DCE4',
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  border: {
    borderBottomWidth: 0,
  },
  optionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 12,
    marginHorizontal: 6,
  },
});
