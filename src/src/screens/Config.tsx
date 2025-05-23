import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Configuracoes() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
        
                <Text style={styles.sectionTitle}>Geral</Text>

                <TouchableOpacity style={[styles.option, styles.email]}>
                    <Ionicons name="mail-outline" size={22} />
                    <Text style={styles.optionText}>Email</Text>
                    <Ionicons name="chevron-forward-outline" size={18} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Ionicons name="person-outline" size={22} />
                    <Text style={styles.optionText}>Perfil</Text>
                    <Ionicons name="chevron-forward-outline" size={18} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Ionicons name="lock-closed-outline" size={22} />
                    <Text style={styles.optionText}>Senha</Text>
                    <Ionicons name="chevron-forward-outline" size={18} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.option, styles.border]}>
                    <Ionicons name="notifications-outline" size={22} />
                    <Text style={styles.optionText}>Notificações</Text>
                    <Ionicons name="chevron-forward-outline" size={18} />
                </TouchableOpacity>

                <View style={styles.line} />

                <Text style={styles.sectionTitle}>Conta</Text>

                <TouchableOpacity style={styles.option}>
                    <Ionicons name="log-out-outline" size={22} />
                    <Text style={styles.optionText}>Sair</Text>
                    <Ionicons name="chevron-forward-outline" size={18} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.option, styles.border]}>
                    <Ionicons name="trash-outline" size={22} />
                    <Text style={styles.optionText}>Deletar Conta</Text>
                    <Ionicons name="chevron-forward-outline" size={18} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#231F20',
        paddingTop: 100,
        alignItems: 'center', 
    },
    card: {
        backgroundColor: '#F7F3FC',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 16,
        width: 360,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 12,
        paddingHorizontal: 4,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderBottomColor: '#E0DCE4',
        borderBottomWidth: 1,
        borderRadius: 10,
    },
    border: {
        borderBottomWidth: 0,
    },
    optionText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    email: {
        backgroundColor: '#EAE0F9',
    },
    line: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 12,
        marginHorizontal: 6,
    },
});
