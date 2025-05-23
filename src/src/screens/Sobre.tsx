import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.card}>

        <Text style={styles.title}>Sobre o Tá Na Lista!</Text>

        <Text style={styles.description}>
          Nosso objetivo é facilitar a organização de compras em repúblicas por meio de listas colaborativas.
          Com o Tá Na Lista, você pode gerenciar itens em estoque, dividir custos com colegas e manter tudo organizado.
          {'\n\n'}
          Tem sugestões? Fale com a gente!
          {'\n\n'}
          — Equipe Tá Na Lista
        </Text>

        <TouchableOpacity style={styles.button}>
          <Feather name="file-text" size={18} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Termos de Serviço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Feather name="shield" size={18} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Política de Privacidade</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#1E1E2F',
  },
  card: {
    backgroundColor: '#2B2B3D',
    borderRadius: 20,
    padding: 28,
    shadowColor: '#000',
    width: '100%',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    color: '#ddd',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'justify',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#A82223',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
