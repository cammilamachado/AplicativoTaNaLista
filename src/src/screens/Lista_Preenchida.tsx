import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, StyleSheet, Modal, TextInput, TouchableOpacity, Alert } from "react-native";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Produto {
  id: string;
  nome: string;
  quantidade: number;
  validade: Date;
}
const produtosStatic: Produto[] = [{ id: "1", validade: new Date(Date.now()), nome: " Pão de forma", quantidade: 2 }, { id: "21", nome: " Sabonete", validade: new Date(Date.now()), quantidade: 5 }];
export default function Lista() {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [validade, setValidade] = useState("");

  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function carregarUsuarios() {
    try {
      const snapshot = await getDocs(collection(db, "listas"));
      const lista: Produto[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Produto[];
      setProdutos(lista);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  const adicionarProduto = async () => {
    if (!nome || !quantidade || !validade) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      await addDoc(collection(db, "usuarios"), {
        nome,
        idade: Number(quantidade),
        email: validade,
      });
      setModalVisible(false);
      setNome("");
      setQuantidade("");
      setValidade("");
      carregarUsuarios(); // recarrega os dados
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
      Alert.alert("Erro ao salvar");
    }
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
        onPress={(isChecked: boolean) => { console.log(isChecked) }}
      />
      <View style={styles.textocard}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>Quantidade: {item.quantidade}</Text>
        <Text>Valido até: {item.validade.toLocaleDateString()}</Text>
      </View>

    </View>
  );

  return (
    <View style={styles.container}>


      <FlatList
        data={produtosStatic}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />


      {/* Botão '+' flutuante */}
      <TouchableOpacity
        style={styles.botaoFlutuante}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.iconeBotao}>＋ Adicionar</Text>
      </TouchableOpacity>

      {/* Modal de cadastro */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>Adicionar produto</Text>

            <TextInput
              placeholder="Nome"
              style={styles.input}
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              placeholder="Idade"
              style={styles.input}
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={validade}
              onChangeText={setValidade}
              keyboardType="email-address"
            />

            <View style={styles.botoesModal}>
              <TouchableOpacity
                style={[styles.botaoModal, { backgroundColor: "#ccc" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.botaoModal, { backgroundColor: "#4caf50" }]}
                onPress={adicionarProduto}
              >
                <Text style={{ color: "#fff" }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
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

  botaoFlutuante: {
    position: "absolute",
    right: 24,
    bottom: 24,
    backgroundColor: "#eaddff",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  iconeBotao: {
    fontSize: 30,
    color: "#fff",
    lineHeight: 32,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
  botoesModal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botaoModal: {
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    width: "48%",
  },
});
