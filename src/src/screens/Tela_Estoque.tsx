import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { db } from '../firebase/firebase';
import { collection, addDoc, onSnapshot, query } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons'; // Caso use Expo. Se não usa, troque por outro ícone.

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
  const [modalVisible, setModalVisible] = useState(false);

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
      setModalVisible(false);
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Estoque Atual</Text>

          <ScrollView>
            {produtos.length === 0 ? (
              <Text style={styles.semEstoque}>Nenhum produto em estoque no momento.</Text>
            ) : (
              <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollEnabled={false}
                contentContainerStyle={styles.lista}
              />
            )}
          </ScrollView>

          {/* BOTÃO FLUTUANTE */}
          <TouchableOpacity
            style={styles.fab}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="add" size={28} color="#fff" />
          </TouchableOpacity>

          {/* MODAL DE CADASTRO */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Cadastrar Produto</Text>

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

                  <View style={{ marginTop: 10 }}>
                    <Button title="Salvar Produto" onPress={handleAdicionarProduto} />
                    <View style={{ marginTop: 10 }}>
                      <Button
                        title="Cancelar"
                        color="red"
                        onPress={() => setModalVisible(false)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    padding: 16,
    paddingBottom: 70,
  },
  title: {
    marginTop: 20,
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
  semEstoque: {
    color: '#ddd',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    fontStyle: 'italic',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6200ee',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#2B2B3D',
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
});
