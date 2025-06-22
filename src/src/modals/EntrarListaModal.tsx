import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { RootStackParamList } from '../navigation/MainStack';
import { db } from '../firebase/firebase';
import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { useUser } from '../context/User_Context';

interface ListaModalProps {
  visible: boolean;
  setIsVisible: (param: boolean) => void;
}

const EntrarListaModal: React.FC<ListaModalProps> = ({
  visible,
  setIsVisible
}) => {
  const [codigoLista, setCodigoLista] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { userId, setListId } = useUser();

  async function handleEntrarLista() {
    if (!codigoLista.trim()) {
      Alert.alert('Erro', 'Digite o código da lista.');
      return;
    }

    setLoading(true);
    try {
      const ListaRef = doc(db, 'listas', codigoLista.trim());

      await updateDoc(ListaRef, {
        participantes: arrayUnion(userId)
      });
      setListId(codigoLista.trim());
      setIsVisible(false);
      setCodigoLista('');
      navigation.navigate('NavLista');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível entrar na lista.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setIsVisible(false)
                setCodigoLista('');
              }}
            >
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Juntar-se a uma lista</Text>

            <Text style={styles.description}>
              Insira o código de convite para
              {'\n'}
              participar da lista de compras.
            </Text>

            <TextInput
              placeholder="Digite o código"
              placeholderTextColor="#aaa"
              style={styles.input}
              value={codigoLista}
              onChangeText={setCodigoLista}
              autoCapitalize="none"
              editable={!loading}
            />

            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#6750A4', borderColor: '#6750A4', marginTop: 16 }]}
              onPress={handleEntrarLista}
              disabled={loading}
            >
              <Text  style={[styles.buttonText, { color: '#fff' }]}>{loading ? 'Entrando...' : 'Entrar'}</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EntrarListaModal;
const styles = StyleSheet.create({
  overlay: {
  	flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    justifyContent: 'center',
    alignItems: 'center'
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
    color: 'background: rgba(255, 255, 255, 0.4);',
    fontWeight: '600',
    marginBottom: 30,
  },
  description: {
    fontSize: 17,
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 40,
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
  button: {
    borderWidth: 1,
    borderColor: '#4A3B60',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#6750A4',
    fontSize: 15,
    fontWeight: 'bold',
    display: 'flex',
  },
});
