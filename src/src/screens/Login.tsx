import { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainStack';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Atenção!', 'Preencha todos os campos!');
      return;
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then(userCredential => {
        console.log('Login realizado:', userCredential.user);
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('NavLista');
      })
      .catch(error => {
        console.error('Erro ao fazer login:', error.message);
        Alert.alert('Erro', 'E-mail ou senha incorretos.');
      });
  };
  
  const handleEsqueceuSenha = () => {
    if (!email) {
      Alert.alert('Atenção!', 'Digite seu e-mail para redefinir a senha.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('E-mail enviado', `Enviamos um link para: ${email}`);
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail de redefinição:', error.message);
        Alert.alert('Erro', 'Não foi possível enviar o e-mail de redefinição.');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Image
          source={require('../../assets/logo2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>E-mail*</Text>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#a8a8a8"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha*</Text>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#a8a8a8"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />
        
        <Pressable onPress={handleEsqueceuSenha}>
          <Text style={styles.link}>
            Esqueceu sua senha?{' '}
            <Text style={styles.linkHighlight}>Clique aqui.</Text>
          </Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </Pressable>
      </View>

      <Pressable onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>
          Não é um membro?{' '}
          <Text style={styles.linkHighlight}>Registre-se</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A82223',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  loginBox: {
    width: '100%',
    backgroundColor: '#2E2E2E',
    borderRadius: 8,
    padding: 24,
    paddingTop: 60,
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 140,
    height: 140,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 4,
    marginTop: 12,
    fontSize: 14,
  },
  input: {
    width: '100%',
    backgroundColor: '#E6E6E6',
    color: '#000',
    padding: 15,
    borderRadius: 10,
  },
  link: {
    color: '#fff',
    fontSize: 14,
    marginTop: 12,
  },
  linkHighlight: {
    color: '#FFA726',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#FFA726',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
