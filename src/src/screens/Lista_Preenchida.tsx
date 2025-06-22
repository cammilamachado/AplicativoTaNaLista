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
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../context/User_Context";

interface Produto {
  id: string;
  nome: string;
  quantidade: number;
  criadoEm: Date;
}

export default function Lista() {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [validade, setValidade] = useState("");

  const { userId, listId } = useUser();

  useEffect(() => {
    carregarProdutos();
  }, [userId, listId])

  async function carregarProdutos() {
    if(userId && listId){
      const produtosRef = collection(db, 'listas', listId, 'produtos');

      try {
        const produtosSnap = await getDocs(produtosRef);
        if (produtosSnap.empty) {
          setProdutos([]);
          return;
        }

        const produtosDaLista = produtosSnap.docs.map(doc => ({
          id: doc.id, 
          nome: doc.data().nome,
          quantidade: doc.data().quantidade,
          criadoEm: doc.data().criadoEm?.toDate ? doc.data().criadoEm.toDate() : new Date()
        }));

        setProdutos(produtosDaLista);
      } catch (error) {
        setProdutos([]);
      }
    }
  }

  const adicionarProduto = async () => {
    if (!nome || !quantidade ) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }
    try {
      if (userId && listId) {
        await addDoc(collection(db, "listas", listId, "produtos"), {
          nome,
          quantidade: Number(quantidade),
          criadoEm: new Date()
        });
        setModalVisible(false);
        setNome("");
        setQuantidade("");
        carregarProdutos();
      }
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      Alert.alert("Erro ao salvar");
    }
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
        unFillColor="#2B2B3D"
        iconStyle={{ borderColor: "black" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={() =>
          Alert.alert(
            "Confirmar compra",
            "Deseja confirmar a compra do item?",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", 
                onPress: () => console.log("OK Pressed") 
              },
            ]
          )
        }
      />
      <View style={styles.textocard}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.info}>Quantidade: {item.quantidade}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {listId && (
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setFilterModalVisible(true)}
          >
            <Ionicons
              name="filter-outline"
              size={16}
              style={{ marginRight: 6 }}
            />
            <Text style={styles.filterButtonText}>Filtro</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />

     {listId && (
      <>
      <TouchableOpacity
        style={styles.botaoFlutuante}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.iconeBotao}>＋ Adicionar</Text>
      </TouchableOpacity>

          <Modal
            visible={filterModalVisible}
            animationType="slide"
            transparent
            onRequestClose={() => setFilterModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.filterModalContent}>
                <TouchableOpacity
                  style={styles.filterOption}
                  onPress={filtrarPorQuantidadeDecrescente}
                >
                  <Text style={styles.filterOptionText}>
                    Filtrar por quantidade (decrescente)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.filterOption}
                  onPress={filtrarPorQuantidadeCrescente}
                >
                  <Text style={styles.filterOptionText}>
                    Filtrar por quantidade (crescente)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.filterOption}
                  onPress={() => setFilterModalVisible(false)}
                >
                  <Text style={styles.filterOptionText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

        <Modal
        visible= {modalVisible}
        animationType="slide"
        transparent = {true}
        >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>Adicionar produto</Text>
            <TextInput
              placeholder="Nome"
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholderTextColor="#aaa"
            />
            <TextInput
              placeholder="Quantidade"
              style={styles.input}
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="numeric"
              placeholderTextColor="#aaa"
            />

            <View style={styles.botoesModal}>
              <TouchableOpacity
                style={[styles.botaoModal, { backgroundColor: "red" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "#fff", fontWeight :"bold" }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.botaoModal, { backgroundColor: "blue" }]}
                onPress={adicionarProduto}
              >
                <Text style={{ color: "#fff", fontWeight :"bold" }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </Modal>
        </>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#231F20" },
  lista: { paddingBottom: 16 },
  textocard: { flexDirection: "column" },
  info: {
    fontSize: 16,
    color: "#ddd",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#2B2B3D",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  nome: { fontSize: 18, fontWeight: "bold", color: "#ddd" },

  filterContainer: { alignItems: "flex-end", marginBottom: 8 },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  filterButtonText: { color: "#000", fontWeight: "500" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    padding: 20,
  },
  filterModalContent: { backgroundColor: "#fff", borderRadius: 8, padding: 16 },
  filterOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  filterOptionText: { fontSize: 16, color: "#000" },

  botaoFlutuante: {
    position: "absolute",
    right: 24,
    bottom: 24,
    backgroundColor: "#eaddff",
    width: "auto",
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  iconeBotao: { fontSize: 30, color: "#fff", lineHeight: 32 },

  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  modalContent: { backgroundColor: '#2B2B3D',
    borderRadius: 20,
    padding: 20,},
  modalTitulo: { 
    color: "#fff",
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 16,
    alignSelf:'center'
  },
  input: {
 backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  botoesModal: { flexDirection: "row", justifyContent: "space-between" },
  botaoModal: {
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    width: "48%",
  },
});
