import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import { db } from '../firebase/firebase';
import { setDoc, doc, addDoc, collection } from 'firebase/firestore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainStack';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../context/User_Context';

interface ListaModalProps {
  visible: boolean;
  setIsVisible: (param: boolean) => void;
  onCreateTemporaria: (nome: string, id: string) => void;
  onCreateFixa: (nome: string, id: string) => void;
}

async function cadastrarLista(id: string, nome: string, tipo: 'temporaria' | 'fixa', participantes: Array<string | null>) {
  await setDoc(doc(db, 'listas', id), {
    nome,
    tipo,
    criadoEm: new Date(),
    participantes
  });
}

const CriarListaModal: React.FC<ListaModalProps> = ({
  visible,
  setIsVisible,
  onCreateTemporaria,
  onCreateFixa,
}) => {
  const [formVisible, setFormVisible] = useState<null | 'temporaria' | 'fixa'>(null);
  const [nomeLista, setNomeLista] = useState('');
  const [idListaForm, setIdListaForm] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { userId, setListId, setListIdStatus } = useUser();

  return (
    <Modal transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setIsVisible(false);
                setFormVisible(null);
                setNomeLista('');
              }}
            >
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>

            {!formVisible && (
              <>
                <Text style={styles.title}>Criar lista</Text>
                <Text style={styles.description}>
                  Crie uma lista para organizar as compras da república. Escolha entre
                  uma lista temporária ou contínua.
                </Text>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Lista Temporária</Text>
                  <Text style={styles.cardText}>
                    Para compras de um evento ou mês{"\n"}específico.
                  </Text>
                  <TouchableOpacity onPress={() => setFormVisible('temporaria')} style={styles.button}>
                    <Text style={styles.buttonText}>Criar</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Lista Fixa</Text>
                  <Text style={styles.cardText}>
                    Para compras recorrentes (como mercado{"\n"}do mês).
                  </Text>
                  <TouchableOpacity onPress={() => setFormVisible('fixa')} style={styles.button}>
                    <Text style={styles.buttonText}>Criar</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}

            {formVisible && (
              <View>
                <Text style={styles.title}>
                  Cadastrar uma lista {formVisible}{"\n"}
                </Text>

                <Text style={styles.description}>
                  Insira o ID e o nome para
                  {'\n'}
                  cadastrar uma nova lista de compras.
                </Text>

                <TextInput
                  style={[styles.input, {marginBottom: 16}]}
                  placeholder="Digite o ID da lista"
                  placeholderTextColor="#aaa"
                  value={idListaForm}
                  onChangeText={setIdListaForm}
                  autoCapitalize="none"
                />
                <TextInput
                  style={[styles.input, {marginBottom: 16}]}
                  placeholder="Digite o nome da lista"
                  placeholderTextColor="#aaa"
                  value={nomeLista}
                  onChangeText={setNomeLista}
                  autoFocus
                />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#6750A4', borderColor: '#6750A4' }]}
                    onPress={() => {
                      if (nomeLista.trim() && idListaForm.trim()) {
                        const participantes = []
                        participantes.push(userId);
                        if (formVisible === 'temporaria') {
                          cadastrarLista(idListaForm.trim(), nomeLista.trim(), 'temporaria', participantes);
                          onCreateTemporaria(nomeLista.trim(), idListaForm.trim());
                        } else {
                          cadastrarLista(idListaForm.trim(), nomeLista.trim(), 'fixa', participantes);
                          onCreateFixa(nomeLista.trim(), idListaForm.trim());
                        }
                        setFormVisible(null);
                        setNomeLista('');
                        setIdListaForm('');
                        setIsVisible(false);

                        setListId(idListaForm)
                        navigation.navigate('NavLista')
                      }
                    }}
                  >
                    <Text style={[styles.buttonText, { color: '#fff' }]}>Salvar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
        </View>
      </View>
    </Modal>
  );
};

export default CriarListaModal;

const styles = StyleSheet.create({
  overlay: {
  	flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
		height: '70%',
    backgroundColor: '#502B2B',
    padding: 20,
		maxWidth: '95%',
    width: '100%',
  },
  closeButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#000',
    borderRadius: 20,
		paddingHorizontal: 5,
    padding: 5,
    marginBottom: 15,
		width: 30,
		height: 30,
		alignItems: 'center'
  },
  closeText: {
    fontSize: 22,
		color: '#502B2B'
	},
  title: {
    fontSize: 35,
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: '600',
    marginBottom: 30,
  },
  description: {
    fontSize: 17,
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#F2EDF8',
    padding: 16,
    borderRadius: 16,
    marginBottom: 15,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#2A2A2A',
  },
  cardText: {
    color: '#4A4A4A',
    marginBottom: 12,
  },
  button: {
    borderWidth: 1,
    borderColor: '#4A3B60',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#6750A4',
    fontSize: 15,
		fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#2c262d',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderRadius: 8,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
});
