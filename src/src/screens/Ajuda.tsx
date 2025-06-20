import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Ajuda() {
  const abrirFAQ = () => {
    Linking.openURL('https://tanalista.com/faq').catch(() =>
      Alert.alert('Erro', 'Não foi possível abrir o link.')
    );
  };

  const enviarEmail = () => {
    const email = 'tanalista@gmail.com';
    const assunto = 'Ajuda com o app';
    const corpo = 'Olá, preciso de ajuda com...';
    const url = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

    Linking.openURL(url).catch(() =>
      Alert.alert('Erro', 'Não foi possível abrir o aplicativo de e-mail.')
    );
  };

  const avaliarApp = () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=tanalista').catch(() =>
      Alert.alert('Erro', 'Não foi possível abrir.')
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ajuda & Feedback</Text>

        <TouchableOpacity style={styles.item} onPress={abrirFAQ}>
          <Text style={styles.label}>FAQ</Text>
          <Ionicons name="help-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={enviarEmail}>
          <Text style={styles.label}>Contato</Text>
          <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={avaliarApp}>
          <Text style={styles.label}>Avaliações</Text>
          <Ionicons name="star-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#231F20',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '800',
    marginBottom: 28,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#3F3F50',
  },
  label: {
    color: '#ddd',
    fontSize: 17,
    fontWeight: '600',
  },
});
