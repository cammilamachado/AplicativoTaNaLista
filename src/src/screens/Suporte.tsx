import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Suporte() {

  const handleWhatsAppSupport = () => {
    const phoneNumber = '55319XXXXXXXX'; 
    const message = 'Oi, preciso de ajuda com o Tá Na Lista!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.');
        }
      })
      .catch(() => Alert.alert('Erro', 'Algo deu errado.'));
  };

  const handleEmailSupport = () => {
    const email = 'tanalista@gmail.com';
    const subject = 'Ajuda com o Tá Na Lista!';
    const body = 'Oi, estou com uma dúvida sobre...';
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(url).catch(() =>
      Alert.alert('Erro', 'Não foi possível abrir o e-mail.')
    );
  };

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Central de Suporte</Text>
      <Text style={[styles.description]}>
        Caso tenha dúvidas, entre em contato com a equipe Tá Na Lista!
      </Text>

      <TouchableOpacity style={styles.wppButton} onPress={handleWhatsAppSupport}>
        <Ionicons name="logo-whatsapp" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Nosso WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emailButton} onPress={handleEmailSupport}>
        <Ionicons name="mail-outline" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Enviar e-mail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor:'#231F20' ,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#fff',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 16,
    color:'#fff',
  },
  wppButton: {
    backgroundColor: '#25D366',
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  emailButton: {
    backgroundColor: '#A82223',
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
});
