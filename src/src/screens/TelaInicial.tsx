import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainStack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Inicio'>;

export default function TelaInicial() {

    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            {
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            }
            <Text style={styles.title}>Bem-vindo ao{'\n'}Tá Na Lista!</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.buttonText}>Criar uma conta</Text>
            </TouchableOpacity>

            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>Já tem uma conta? <Text style={styles.loginLink}>Fazer login.</Text></Text>
            </Pressable>

            <TouchableOpacity
                style={styles.buttonGuest}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.guestText}>Entrar como visitante</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A82223',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 15,

    },
    title: {
        color: '#fff',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
    },
    button: {
        backgroundColor: '#FFA726',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#fff',
        fontSize: 15,
    },
    loginLink: {
        color: '#FFA726',
        textDecorationLine: 'underline',
    },
    buttonGuest: {
        backgroundColor: '#4169E1',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
    },
    guestText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
