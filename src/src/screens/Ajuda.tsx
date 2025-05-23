import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Ajuda() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ajuda & Feedback</Text>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.label}>FAQ</Text>
          <Ionicons name="help-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.label}>Contato</Text>
          <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
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
