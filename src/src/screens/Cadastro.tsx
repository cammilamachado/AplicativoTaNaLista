import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainStack';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cadastro'>;

export default function Cadastro() {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    if (!email || !senha || !confirmarSenha) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
      .then(userCredential => {
        console.log('Usuario cadastrado:', userCredential.user);
        alert('Cadastro realizado com sucesso!');
        navigation.navigate('Inicio');
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error.message);
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {
          <Image
            source={require('../../assets/cadastro.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        }
        <Text style={styles.headerTitle}>CADASTRO</Text>
      </View>

      <View style={styles.form}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Nome Completo*</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>CPF*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: XXX.XXX.XXX-XX"
          placeholderTextColor="#888"
          keyboardType="numeric"

        />

        <Text style={styles.label}>Celular*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: (DD) XXXXX-XXXX"
          placeholderTextColor="#888"
          keyboardType="phone-pad"

        />

        <Text style={styles.label}>E-mail*</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: contato@email.com"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha*</Text>
        <TextInput
          style={styles.input}
          placeholder="************"
          placeholderTextColor="#888"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.label}>Digite a senha novamente*</Text>
        <TextInput
          style={styles.input}
          placeholder="************"
          placeholderTextColor="#888"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2B2B',
  },
  header: {
    backgroundColor: '#A82223',
    alignItems: 'center',
    paddingVertical: 24,
  },
  logo: {
    width: 170,
    height: 170,
    marginTop: 17,
    marginBottom: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 1,
  },
  form: {
    backgroundColor: '#2E2E2E',
    flex: 1,
    padding: 24,
  },
  backIcon: {
    marginBottom: 12,
  },
  backText: {
    fontSize: 22,
    color: '#fff',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#E6E6E6',
    borderRadius: 6,
    padding: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#FFA726',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
