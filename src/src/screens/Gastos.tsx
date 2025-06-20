import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {
  collection,
  onSnapshot,
  query,
  where,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

export default function Gastos() {
  const [gastos, setGastos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState('');
  const [estimado, setEstimado] = useState('');
  const [realizado, setRealizado] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'gastos'), where('userId', '==', 'visitante'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const lista: any[] = [];
      querySnapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });
      setGastos(lista);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const totalEstimado = gastos.reduce((sum, g) => sum + g.estimado, 0);
  const totalRealizado = gastos.reduce((sum, g) => sum + g.realizado, 0);

  const adicionarGasto = async () => {
    if (!nome || !estimado || !realizado) return;
    try {
      await addDoc(collection(db, 'gastos'), {
        nome,
        estimado: parseFloat(estimado),
        realizado: parseFloat(realizado),
        userId: 'visitante',
      });
      setNome('');
      setEstimado('');
      setRealizado('');
    } catch (error) {
      console.error('Erro ao adicionar gasto:', error);
    }
  };

  const excluirGasto = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'gastos', id));
    } catch (error) {
      console.error('Erro ao excluir gasto:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.saldosContainer}>
        <View style={styles.saldoBox}>
          <Text style={styles.saldoLabel}>SALDO INICIAL</Text>
          <Text style={styles.saldoValor}>R$ {totalEstimado.toFixed(2)}</Text>
        </View>
        <View style={[styles.saldoBox, styles.saldoAtual]}>
          <Text style={styles.saldoLabel}>SALDO ATUAL</Text>
          <Text style={styles.saldoValor}>R$ {(totalEstimado - totalRealizado).toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do item"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor estimado (R$)"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={estimado}
          onChangeText={setEstimado}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor realizado (R$)"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={realizado}
          onChangeText={setRealizado}
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarGasto}>
          <Text style={styles.botaoAdicionarTexto}>Adicionar Gasto</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.tabelaWrapper}>
        <View>
          <View style={styles.tabelaCabecalho}>
            <Text style={[styles.cabecalhoCelula, { flex: 2 }]}>ITEM</Text>
            <Text style={[styles.cabecalhoCelula, { flex: 1 }]}>ESTIMADO</Text>
            <Text style={[styles.cabecalhoCelula, { flex: 1 }]}>DESPESA</Text>
            <Text style={[styles.cabecalhoCelula, { width: 50 }]}></Text>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            gastos.map((gasto) => (
              <View style={styles.tabelaLinha} key={gasto.id}>
                <Text style={[styles.celula, { flex: 2 }]}>{gasto.nome}</Text>
                <Text style={[styles.celula, { flex: 1 }]}>R$ {gasto.estimado.toFixed(2)}</Text>
                <Text style={[styles.celula, { flex: 1 }]}>R$ {gasto.realizado.toFixed(2)}</Text>
                <TouchableOpacity onPress={() => excluirGasto(gasto.id)} style={{ width: 50, alignItems: 'center' }}>
                  <Text style={{ color: '#FF5555', fontSize: 20 }}>🗑</Text>
                </TouchableOpacity>
              </View>
            ))
          )}

          <View style={styles.tabelaTotal}>
            <Text style={[styles.totalTexto, { flex: 2 }]}>TOTAL</Text>
            <Text style={[styles.totalTexto, { flex: 1 }]}>R$ {totalEstimado.toFixed(2)}</Text>
            <Text style={[styles.totalTexto, { flex: 1 }]}>R$ {totalRealizado.toFixed(2)}</Text>
            <View style={{ width: 50 }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    paddingTop: 100,
    paddingHorizontal: 15,
  },
  saldosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  saldoBox: {
    backgroundColor: '#2A2A40',
    borderRadius: 10,
    padding: 15,
    width: '48%',
  },
  saldoAtual: {
    backgroundColor: '#A82223',
  },
  saldoLabel: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 5,
  },
  saldoValor: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#2A2A40',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#3A3A50',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#A82223',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  botaoAdicionarTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabelaWrapper: {
    backgroundColor: '#2C2C44',
    borderRadius: 8,
    padding: 10,
  },
  tabelaCabecalho: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#555',
    paddingBottom: 8,
    marginBottom: 8,
  },
  cabecalhoCelula: {
    color: '#BCC1D1',
    fontWeight: '700',
    fontSize: 14,
    paddingHorizontal: 15,
  },
  tabelaLinha: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#444',
    alignItems: 'center',
  },
  celula: {
    color: '#D0D0E0',
    fontSize: 15,
    paddingHorizontal: 4,
  },
  tabelaTotal: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#666',
    marginTop: 10,
  },
  totalTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 6,
  },
});
