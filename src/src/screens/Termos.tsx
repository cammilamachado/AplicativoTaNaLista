import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Termos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Termos de Serviço</Text>

        <Text style={styles.paragraph}>
          Bem-vindo ao aplicativo "Tá Na Lista!". Ao utilizar o aplicativo, você concorda com os presentes Termos de Serviço. Por favor, leia-os com atenção.
        </Text>

        <Text style={styles.heading}>1. Uso do Aplicativo</Text>
        <Text style={styles.paragraph}>O "Tá Na Lista!" é destinado à organização de listas de compras colaborativas. Você se compromete a utilizar o aplicativo de forma legal, respeitosa e em conformidade com estes termos.</Text>

        <Text style={styles.heading}>2. Conta de Usuário</Text>
        <Text style={styles.paragraph}>O uso completo do aplicativo pode exigir autenticação. Ao se cadastrar, você é responsável por manter a segurança das suas credenciais. Não compartilhe sua conta com terceiros.</Text>

        <Text style={styles.heading}>3. Responsabilidades</Text>
        <Text style={styles.paragraph}>A Equipe "Tá Na Lista" não se responsabiliza por erros causados por uso indevido, falhas de conexão ou informações inseridas incorretamente pelos usuários.</Text>

        <Text style={styles.heading}>4. Contato</Text>
        <Text style={styles.paragraph}>Dúvidas ou sugestões? Entre em contato pelo e-mail: tanalista@gmail.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#231F20',
  },
  card: {
    backgroundColor: '#2B2B3A',
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
