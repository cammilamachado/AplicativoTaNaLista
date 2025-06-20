import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Privacidade() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Política de Privacidade</Text>

        <Text style={styles.paragraph}>
          Esta Política de Privacidade descreve como suas informações são usadas e protegidas pelo aplicativo "Tá Na Lista!".
        </Text>

        <Text style={styles.heading}>1. Coleta de Dados</Text>
        <Text style={styles.paragraph}>
          Coletamos apenas dados necessários para o funcionamento do aplicativo, como nome, e-mail e dados das listas de compras. Não coletamos dados sensíveis sem seu consentimento.
        </Text>

        <Text style={styles.heading}>2. Uso dos Dados</Text>
        <Text style={styles.paragraph}>
          Seus dados são utilizados exclusivamente para permitir que você utilize o aplicativo, personalize sua experiência e compartilhe listas com colegas.
        </Text>

        <Text style={styles.heading}>3. Compartilhamento</Text>
        <Text style={styles.paragraph}>
          Não compartilhamos suas informações pessoais com terceiros.
        </Text>

        <Text style={styles.heading}>4. Segurança</Text>
        <Text style={styles.paragraph}>
          Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado.
        </Text>

        <Text style={styles.heading}>5. Seus Direitos</Text>
        <Text style={styles.paragraph}>
          Você pode solicitar a exclusão de seus dados pessoais a qualquer momento, entrando em contato conosco.
        </Text>

        <Text style={styles.heading}>6. Contato</Text>
        <Text style={styles.paragraph}>
          Para dúvidas relacionadas à privacidade, envie um email para: tanalista@gmail.com
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 5,
    backgroundColor: '#231F20',
  },
  card: {
    backgroundColor: '#2B2B3A',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#A82223',
    paddingBottom: 6,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F4F4F5',
    marginTop: 18,
    marginBottom: 6,
  },
  paragraph: {
    color: '#D6D6E0',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'justify',
  },
});
