import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';


interface ListaModalProps {
  visible: boolean;
  setIsVisible: (param: boolean) => void;
}

const EntrarListaModal: React.FC<ListaModalProps> = ({
  visible,
  setIsVisible
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
            />
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
});
