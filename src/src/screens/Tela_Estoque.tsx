import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TextInput, Button, Alert } from 'react-native';
import { db } from '../firebase/firebase';
import { collection, addDoc, onSnapshot, query } from 'firebase/firestore';

type Produto = {
  id: string;
  nome: string;
  quantidade: number;
  categoria: string;
};

export default function Estoque() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'estoque'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista: Produto[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        lista.push({
          id: doc.id,
          nome: data.nome,
          quantidade: data.quantidade,
          categoria: data.categoria,
        });
      });
      setProdutos(lista);
    });

    return unsubscribe;
  }, []);

  const handleAdicionarProduto = async () => {
    if (!nome || !quantidade || !categoria) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    try {
      await addDoc(collection(db, 'estoque'), {
        nome,
        quantidade: parseInt(quantidade),
        categoria,
      });
      setNome('');
      setQuantidade('');
      setCategoria('');
      Alert.alert('Produto cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      Alert.alert('Erro ao adicionar produto!');
    }
  };

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
        scrollEnabled={false}
        contentContainerStyle={styles.lista}
      />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do produto"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          placeholderTextColor="#aaa"
          value={categoria}
          onChangeText={setCategoria}
        />
        <Button title="Cadastrar Produto" onPress={handleAdicionarProduto} />
      </View>
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
  form: {
    marginTop: 30,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
});
