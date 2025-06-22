import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { db } from '../firebase/firebase';
import { collection, doc, query, where, orderBy, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from '../firebase/firebase'; 

LocaleConfig.locales['pt'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt';

interface Tarefa {
  id: string;
  titulo: string;
  data: string;
  descricao?: string;
  concluida?: boolean;
}

const Tela_Cronograma = () => {
  const usuarioAtual = auth.currentUser;
  const uid = usuarioAtual?.uid;
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [dataSelecionada, setDataSelecionada] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [novaTarefa, setNovaTarefa] = useState({ titulo: '', descricao: '', data: format(new Date(), 'yyyy-MM-dd') });
  const [editandoTarefaId, setEditandoTarefaId] = useState<string | null>(null);

  // Referência para coleção do usuário no Firestore
  const tarefasCollectionRef = uid
    ? collection(db, 'tarefas_por_usuario', uid, 'tarefas')
    : null;
  if (!uid || !tarefasCollectionRef) {
  return <View><Text>Carregando usuário...</Text></View>;
}

  // Gera datas marcadas para o calendário
  const gerarDatasMarcadas = () => {
    const marcadas: { [key: string]: { marked: boolean; dotColor: string } } = {};
    tarefas.forEach(tarefa => {
      marcadas[tarefa.data] = { marked: true, dotColor: '#FFA726' };
    });
    return marcadas;
  };

  // Carregar tarefas do dia selecionado
  const carregarTarefasDoDia = async () => {
    if (!tarefasCollectionRef) return;

    try {
      const q = query(
        tarefasCollectionRef,
        where('data', '==', dataSelecionada),
        orderBy('criadoEm')
      );
      const querySnapshot = await getDocs(q);

      const tarefasDia: Tarefa[] = querySnapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...(docSnap.data() as Omit<Tarefa, 'id'>)
      }));

      // Mantém as tarefas de outras datas e atualiza as do dia selecionado
      const outras = tarefas.filter(t => t.data !== dataSelecionada);
      setTarefas([...outras, ...tarefasDia]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
      console.error(error);
    }
  };

  useEffect(() => {
    carregarTarefasDoDia();
  }, [dataSelecionada, uid]);

  // Adicionar ou editar tarefa
  const adicionarOuEditarTarefa = async () => {
    if (!tarefasCollectionRef) {
      Alert.alert('Erro', 'Usuário não autenticado.');
      return;
    }

    if (!novaTarefa.titulo.trim()) {
      Alert.alert('Erro', 'Digite um título para a tarefa');
      return;
    }

    try {
      if (editandoTarefaId) {
        const docRef = doc(tarefasCollectionRef, editandoTarefaId);
        await updateDoc(docRef, {
          titulo: novaTarefa.titulo,
          descricao: novaTarefa.descricao,
          data: novaTarefa.data,
          atualizadoEm: serverTimestamp(),
        });
        setEditandoTarefaId(null);
      } else {
        await addDoc(tarefasCollectionRef, {
          titulo: novaTarefa.titulo,
          descricao: novaTarefa.descricao,
          data: novaTarefa.data,
          concluida: false,
          criadoEm: serverTimestamp(),
          atualizadoEm: serverTimestamp(),
        });
      }
      setModalVisivel(false);
      setNovaTarefa({ titulo: '', descricao: '', data: dataSelecionada });
      carregarTarefasDoDia();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a tarefa.');
      console.error(error);
    }
  };

  // Alternar tarefa concluída
  const alternarConcluida = async (id: string, concluidaAtual: boolean) => {
    if (!tarefasCollectionRef) return;

    try {
      const docRef = doc(tarefasCollectionRef, id);
      await updateDoc(docRef, {
        concluida: !concluidaAtual,
        atualizadoEm: serverTimestamp(),
      });
      carregarTarefasDoDia();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar a tarefa.');
      console.error(error);
    }
  };

  // Excluir tarefa
  const excluirTarefa = (id: string) => {
    Alert.alert(
      'Excluir Tarefa',
      'Tem certeza de que deseja excluir esta tarefa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            if (!tarefasCollectionRef) return;
            try {
              const docRef = doc(tarefasCollectionRef, id);
              await deleteDoc(docRef);
              carregarTarefasDoDia();
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível excluir a tarefa.');
              console.error(error);
            }
          }
        }
      ]
    );
  };

  // Editar tarefa (abre modal)
  const editarTarefa = (tarefa: Tarefa) => {
    setNovaTarefa({ titulo: tarefa.titulo, descricao: tarefa.descricao || '', data: tarefa.data });
    setEditandoTarefaId(tarefa.id);
    setModalVisivel(true);
  };

  const formatarData = (data: string) => {
    const [ano, mes, dia] = data.split('-').map(Number);
    const dataObj = new Date(ano, mes - 1, dia);
    return format(dataObj, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  };

  const aoSelecionarDia = (day: { dateString: string }) => {
    setDataSelecionada(day.dateString);
    setNovaTarefa(nova => ({ ...nova, data: day.dateString }));
  };


  return (
    <View style={styles.container}>
      <Calendar
        current={dataSelecionada}
        onDayPress={aoSelecionarDia}
        markedDates={{
          ...gerarDatasMarcadas(),
          [dataSelecionada]: { 
            selected: true, 
            selectedColor: '#FFA726',
            selectedTextColor: '#231F20'
          }
        }}
        theme={{
          calendarBackground: '#231F20',
          backgroundColor: '#231F20',
          textSectionTitleColor: '#FFA726',
          dayTextColor: '#FFFFFF',
          todayTextColor: '#FFA726',
          monthTextColor: '#FFA726',
          arrowColor: '#FFA726',
          textDisabledColor: '#555555',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 14,
          selectedDayBackgroundColor: '#FFA726',
          selectedDayTextColor: '#231F20',
        }}
        style={styles.calendario}
      />

      {/* Lista de Tarefas do Dia */}
      <View style={styles.tarefasContainer}>
        <Text style={styles.tituloTarefas}>
          Tarefas em <Text style={styles.dataDestaque}>{formatarData(dataSelecionada)}</Text>
        </Text>
        
        {tarefas
          .filter(tarefa => tarefa.data === dataSelecionada)
          .map(tarefa => (
            <View key={tarefa.id} style={[styles.tarefaCard, tarefa.concluida && styles.tarefaCardConcluida]}>
              <View style={styles.tarefaHeader}>
                <Text style={[styles.tarefaTitulo, tarefa.concluida && styles.tarefaTituloConcluida]}>
                  {tarefa.titulo}
                </Text>
                <View style={styles.iconesContainer}>
                  <TouchableOpacity
                    onPress={() => alternarConcluida(tarefa.id, tarefa.concluida!)}
                    style={styles.iconeBotao}
                    accessibilityLabel={tarefa.concluida ? "Desmarcar como concluída" : "Marcar como concluída"}
                  >
                    <Icon
                      name={tarefa.concluida ? "check-circle" : "checkbox-blank-circle-outline"}
                      size={22}
                      color={tarefa.concluida ? "#43A047" : "#CCCCCC"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => editarTarefa(tarefa)}
                    style={styles.iconeBotao}
                    accessibilityLabel="Editar tarefa"
                  >
                    <Icon name="pencil" size={22} color="#FFA726" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => excluirTarefa(tarefa.id)}
                    style={styles.iconeBotao}
                    accessibilityLabel="Excluir tarefa"
                  >
                    <Icon name="close" size={22} color="#E53935" />
                  </TouchableOpacity>
                </View>
              </View>
              {tarefa.descricao ? (
                <Text style={[styles.tarefaDescricao, tarefa.concluida && styles.tarefaDescricaoConcluida]}>
                  {tarefa.descricao}
                </Text>
              ) : null}
            </View>
          ))}
          
        {tarefas.filter(tarefa => tarefa.data === dataSelecionada).length === 0 && (
          <Text style={styles.semTarefas}>Nenhuma tarefa para este dia</Text>
        )}
      </View>

      {/* Botão Nova Tarefa */}
      <TouchableOpacity
        style={styles.botaoFlutuante}
        onPress={() => {
          setEditandoTarefaId(null);
          setNovaTarefa({
            titulo: '',
            descricao: '',
            data: dataSelecionada
          });
          setModalVisivel(true);
        }}
      >
        <Text style={styles.textoBotao}>+ Nova Tarefa</Text>
      </TouchableOpacity>

      {/* Modal de Nova Tarefa */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => {
          setModalVisivel(false);
          setEditandoTarefaId(null);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalConteudo}>
            <Text style={styles.modalTitulo}>
              {editandoTarefaId ? "Editar Tarefa" : "Adicionar Nova Tarefa"}
            </Text>
            
            <TextInput
              style={styles.input}
              placeholder="Título da Tarefa*"
              placeholderTextColor="#888"
              value={novaTarefa.titulo}
              onChangeText={texto => setNovaTarefa({...novaTarefa, titulo: texto})}
            />
            
            <TextInput
              style={[styles.input, styles.descricaoInput]}
              placeholder="Descrição (Opcional)"
              placeholderTextColor="#888"
              multiline
              value={novaTarefa.descricao}
              onChangeText={texto => setNovaTarefa({...novaTarefa, descricao: texto})}
            />
            
            <Text style={styles.dataLabel}>
              Data: <Text style={styles.dataDestaque}>{formatarData(novaTarefa.data)}</Text>
            </Text>

            <View style={styles.botoesContainer}>
              <TouchableOpacity
                style={[styles.botaoModal, styles.botaoCancelar]}
                onPress={() => {
                  setModalVisivel(false);
                  setEditandoTarefaId(null);
                }}
              >
                <Text style={styles.textoBotaoModal}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.botaoModal, styles.botaoAdicionar]}
                onPress={adicionarOuEditarTarefa}
              >
                <Text style={styles.textoBotaoModal}>
                  {editandoTarefaId ? "Salvar" : "Adicionar"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    padding: 16,
  },
  calendario: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    marginBottom: 20,
  },
  tarefasContainer: {
    flex: 1,
    marginBottom: 70,
  },
  tituloTarefas: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  dataDestaque: {
    color: '#FFA726',
    textDecorationLine: 'underline',
  },
  tarefaCard: {
    backgroundColor: '#333333',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  tarefaCardConcluida: {
    opacity: 0.6,
    backgroundColor: '#222',
  },
  tarefaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tarefaTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
    flexWrap: "wrap",
  },
  tarefaTituloConcluida: {
    textDecorationLine: 'line-through',
    color: '#43A047',
  },
  tarefaDescricao: {
    fontSize: 14,
    color: '#CCCCCC',
    marginTop: 5,
  },
  tarefaDescricaoConcluida: {
    textDecorationLine: 'line-through',
    color: '#43A047',
  },
  iconesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  iconeBotao: {
    marginHorizontal: 4,
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
  semTarefas: {
    fontStyle: 'italic',
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 20,
  },
  botaoFlutuante: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FFA726',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textoBotao: {
    color: '#231F20',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalConteudo: {
    width: '90%',
    backgroundColor: '#333333',
    borderRadius: 15,
    padding: 25,
    elevation: 10,
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFA726',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#231F20',
    color: '#FFFFFF',
  },
  descricaoInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  dataLabel: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 20,
    textAlign: 'center',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botaoModal: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    minWidth: 120,
    alignItems: 'center',
  },
  botaoCancelar: {
    backgroundColor: '#555555',
  },
  botaoAdicionar: {
    backgroundColor: '#FFA726',
  },
  textoBotaoModal: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tela_Cronograma;