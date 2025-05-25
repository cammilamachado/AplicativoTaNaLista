import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

interface ListaModalProps {
  visible: boolean;
  setIsVisible: (param: boolean) => void;
  onCreateTemporaria: () => void;
  onCreateFixa: () => void;
}

const CriarListaModal: React.FC<ListaModalProps> = ({
  visible,
  setIsVisible,
  onCreateTemporaria,
  onCreateFixa,
}) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsVisible(false)}
            >
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>

						  <Text style={styles.title}>Criar lista</Text>
							<Text style={styles.description}>
								Crie uma lista para organizar as compras da república. Escolha entre
								uma lista temporária ou contínua.
							</Text>
        
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Lista Temporária</Text>
            <Text style={styles.cardText}>
							Para compras de um evento ou mês
							{'\n'}
							específico.
            </Text>
            <TouchableOpacity onPress={onCreateTemporaria} style={styles.button}>
              <Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Lista Fixa</Text>
            <Text style={styles.cardText}>
              Para compras recorrentes (como mercado
							{'\n'}
							 do mês).
            </Text>
            <TouchableOpacity onPress={onCreateFixa} style={styles.button}>
              <Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>
          </View>
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
		maxWidth: '95%'
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
    fontSize: 33,
    color: 'rgba(255, 255, 255, 0.35)',
    fontWeight: '600',
    marginBottom: 30,
  },
  description: {
    fontSize: 17,
    color: 'rgba(255, 255, 255, 0.35)',
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
});
