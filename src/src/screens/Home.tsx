import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  Switch,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '../context/Modo_Claro';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainStack';

export default function Home() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [menuVisible, setMenuVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  const textColor = isLight ? '#000' : '#fff';
  const bgColor = isLight ? '#F2F2F2' : '#231F20';
  const sidebarColor = isLight ? '#fff' : '#1E1B1B';

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {/* Ícone_Menu */}
      <View style={styles.menuIcon}>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Text style={[styles.menuText, { color: textColor }]}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu_Lateral*/}
      <Modal visible={menuVisible} animationType="slide" transparent>
        <Pressable style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
          <Pressable style={[styles.sidebar, { backgroundColor: sidebarColor }]} onPress={() => { }}>
            <View style={styles.logoWrapper}>
              <Ionicons name="grid" size={28} color="#fff" />
            </View>

            <TouchableOpacity style={styles.mainButton}>
              <Ionicons name="create" size={18} color="#fff" style={{ marginRight: 8 }} />
              <Text style={styles.mainButtonText}>Criar lista de compras</Text>
            </TouchableOpacity>

            <View style={styles.sidebarItem}>
              <Ionicons name="document-text-outline" size={18} color={textColor} style={styles.icon} />
              <Text style={[styles.sidebarItemText, { color: textColor }]}>Entrar em uma lista</Text>
            </View>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Config');
              }}
            >
              <Ionicons name="settings-outline" size={18} color={textColor} style={styles.icon} />
              <Text style={[styles.sidebarItemText, { color: textColor }]}>Configurações</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Ajuda');
              }}
            >
              <Ionicons name="chatbubbles-outline" size={18} color={textColor} style={styles.icon} />
              <Text style={[styles.sidebarItemText, { color: textColor }]}>Ajuda & Feedback</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false); // fecha o menu
                navigation.navigate('Gastos');
              }}
            >
              <Ionicons name="stats-chart-outline" size={18} color={textColor} style={styles.icon} />
              <Text style={[styles.sidebarItemText, { color: textColor }]}>Controle de Gastos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Sobre');
              }}
            >
              <Ionicons name="information-circle-outline" size={18} color={textColor} style={styles.icon} />
              <Text style={[styles.sidebarItemText, { color: textColor }]}>Sobre</Text>
            </TouchableOpacity>

            <View style={styles.themeToggle}>
              <Ionicons name="moon-outline" size={18} color={textColor} />
              <Text style={[styles.toggleLabel, { color: textColor }]}>  Modo Claro</Text>
              <Switch
                value={isLight}
                onValueChange={toggleTheme}
                thumbColor={isLight ? "#A82223" : "#ccc"}
                trackColor={{ false: "#555", true: "#FFE1E1" }}
              />
            </View>
          </Pressable>
        </Pressable>
      </Modal>
     {/* Menu_Lateral*/}
      
      <Image
        source={require('../../assets/logo3.png')}
        style={styles.image}
        resizeMode="contain"
      />
  
      <Text style={[styles.description, { color: textColor }]}>
        Você ainda não participa de nenhuma lista de compras. Crie ou entre em uma para começar a <Text style={styles.bold}>organizar</Text> os itens.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonP}>
          <Text style={styles.buttonText}>Criar nova lista</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonS}>
          <Text style={styles.buttonText}>Entrar em uma lista</Text>
        </TouchableOpacity>
      </View>

      <Pressable onPress={() => navigation.navigate('Suporte')}>
        <Text style={[styles.link, { color: '#fff' }]}>
          Precisa de ajuda?{' '}
          <Text style={[styles.highlight, { color: '#fff' }]}>
            Acesse nosso suporte.
          </Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    position: 'absolute',
    top: 70,
    left: 20,
  },
  menuText: {
    fontSize: 40,
  },
  image: {
    width: 320,
    height: 320,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 32,
    paddingHorizontal: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  buttonP: {
    backgroundColor: '#A82223',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonS: {
    backgroundColor: '#A82223',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    fontSize: 14,
    marginTop: 24,
    textAlign: 'center',
  },
  highlight: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sidebar: {
    width: 260,
    height: '100%',
    paddingTop: 60,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#A82223',
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: 6,
  },
  mainButton: {
    flexDirection: 'row',
    backgroundColor: '#A82223',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 24,
  },
  mainButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sidebarItem: {
    flexDirection: 'row',
    fontSize: 15,
    marginBottom: 20,
  },
  icon: {
    marginRight: 8,
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  toggleLabel: {
    fontSize: 14,
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  sidebarItemText: {
    fontSize: 15,
  },
});
