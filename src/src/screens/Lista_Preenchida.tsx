import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Produto {
  id: string;
  nome: string;
  quantidade: number;
  validade: Date;
}

const produtosStatic: Produto[] = [
  { id: "1", validade: new Date(Date.now()), nome: "Pão de forma", quantidade: 2 },
  { id: "21", nome: "Sabonete", validade: new Date(Date.now()), quantidade: 5 },
];

export default function Lista() {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState<Produto[]>(produtosStatic);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [validade, setValidade] = useState("");

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      const snapshot = await getDocs(collection(db, "listas"));
      const lista: Produto[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Produto[];
      setProdutos(lista.length ? lista : produtosStatic);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setProdutos(produtosStatic);
    }
  }

  const adicionarProduto = async () => {
    if (!nome || !quantidade || !validade) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }
    try {
      await addDoc(collection(db, "listas"), {
        nome,
        quantidade: Number(quantidade),
        validade: new Date(validade),
      });
      setModalVisible(false);
      setNome("");
      setQuantidade("");
      setValidade("");
      carregarProdutos();
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      Alert.alert("Erro ao salvar");
    }
  };

  const filtrarPorValidade = () => {
    setProdutos([...produtos].sort((a, b) => b.validade.getTime() - a.validade.getTime()));
    setFilterModalVisible(false);
  };

  const filtrarPorQuantidadeDecrescente = () => {
    setProdutos([...produtos].sort((a, b) => b.quantidade - a.quantidade));
    setFilterModalVisible(false);
  };

  const filtrarPorQuantidadeCrescente = () => {
    setProdutos([...produtos].sort((a, b) => a.quantidade - b.quantidade));
    setFilterModalVisible(false);
  };

  const renderItem = ({ item }: { item: Produto }) => (
    <View style={styles.card}>
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unFillColor="#F5F5F5"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => console.log(isChecked)}
      />
      <View style={styles.textocard}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>Quantidade: {item.quantidade}</Text>
        <Text>Válido até: {item.validade.toLocaleDateString()}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterModalVisible(true)}
        >
          <Ionicons name="filter-outline" size={16} style={{ marginRight: 6 }} />
          <Text style={styles.filterButtonText}>Filtro</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />

      <TouchableOpacity style={styles.botaoFlutuante} onPress={() => setModalVisible(true)}>
        <Text style={styles.iconeBotao}>＋ Adicionar</Text>
      </TouchableOpacity>

      <Modal
        visible={filterModalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.filterModalContent}>
            <TouchableOpacity style={styles.filterOption} onPress={filtrarPorValidade}>
              <Text style={styles.filterOptionText}>Filtrar por data de validade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption} onPress={filtrarPorQuantidadeDecrescente}>
              <Text style={styles.filterOptionText}>Filtrar por quantidade (decrescente)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption} onPress={filtrarPorQuantidadeCrescente}>
              <Text style={styles.filterOptionText}>Filtrar por quantidade (crescente)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption} onPress={() => setFilterModalVisible(false)}>
              <Text style={styles.filterOptionText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {modalVisible && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>Adicionar produto</Text>
            <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
            <TextInput
              placeholder="Quantidade"
              style={styles.input}
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Data de validade (YYYY-MM-DD)"
              style={styles.input}
              value={validade}
              onChangeText={setValidade}
            />
            <View style={styles.botoesModal}>
              <TouchableOpacity style={[styles.botaoModal, { backgroundColor: "#ccc" }]} onPress={() => setModalVisible(false)}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.botaoModal, { backgroundColor: "#4caf50" }]} onPress={adicionarProduto}>
                <Text style={{ color: "#fff" }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  lista: { paddingBottom: 16 },
  textocard: { flexDirection: "column" },
  card: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  nome: { fontSize: 18, fontWeight: "bold" },

  filterContainer: { alignItems: "flex-end", marginBottom: 8 },
  filterButton: { flexDirection: "row", alignItems: "center", backgroundColor: "#e0e0e0", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 4 },
  filterButtonText: { color: "#000", fontWeight: "500" },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)", justifyContent: "center", padding: 20 },
  filterModalContent: { backgroundColor: "#fff", borderRadius: 8, padding: 16 },
  filterOption: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  filterOptionText: { fontSize: 16, color: "#000" },

  botaoFlutuante: { position: "absolute", right: 24, bottom: 24, backgroundColor: "#eaddff", width: 60, height: 60, borderRadius: 30, alignItems: "center", justifyContent: "center", elevation: 5 },
  iconeBotao: { fontSize: 30, color: "#fff", lineHeight: 32 },

  modalContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#000000aa", justifyContent: "center", padding: 20 },
  modalContent: { backgroundColor: "#fff", padding: 20, borderRadius: 8 },
  modalTitulo: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 6, marginBottom: 12 },
  botoesModal: { flexDirection: "row", justifyContent: "space-between" },
  botaoModal: { padding: 12, borderRadius: 6, alignItems: "center", width: "48%" },
});
