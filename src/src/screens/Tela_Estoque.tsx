import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

type Produto = {
  id: string;
  nome: string;
  quantidade: number;
  categoria: string;
};

export default function Estoque() {
  const produtos: Produto[] = [
    { id: '1', nome: 'Arroz', quantidade: 2, categoria: 'Alimentos' },
    { id: '2', nome: 'Detergente', quantidade: 1, categoria: 'Limpeza' },
    { id: '3', nome: 'Papel higiênico', quantidade: 12, categoria: 'Higiene' },
    { id: '4', nome: 'Leite', quantidade: 3, categoria: 'Bebidas' },
  ];

  const renderItem = ({ item }: { item: Produto }) => (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.info}>Quantidade: {item.quantidade}</Text>
      <Text style={styles.info}>Categoria: {item.categoria}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Estoque Atual</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false} // desativa rolagem interna, já que ScrollView está fora
        contentContainerStyle={styles.lista}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#231F20',
    padding: 16,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'center',
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#2B2B3D',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    elevation: 3,
  },
  nome: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#ddd',
  },
});
