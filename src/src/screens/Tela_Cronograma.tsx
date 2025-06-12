import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Configuração de localização para português
LocaleConfig.locales['pt'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ],
  dayNames: [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt';

interface Tarefa {
  id: string;
  titulo: string;
  data: string; // Formato YYYY-MM-DD
  descricao?: string;
  concluida?: boolean;
}

const Tela_Cronograma = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [dataSelecionada, setDataSelecionada] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [novaTarefa, setNovaTarefa] = useState({
    titulo: '',
    descricao: '',
    data: format(new Date(), 'yyyy-MM-dd')
  });
  const [editandoTarefaId, setEditandoTarefaId] = useState<string | null>(null);

  // Gerar datas marcadas com as tarefas
  const gerarDatasMarcadas = () => {
    const marcadas: { [key: string]: { marked: boolean; dotColor: string } } = {};
    tarefas.forEach(tarefa => {
      marcadas[tarefa.data] = { marked: true, dotColor: '#FFA726' };
    });
    return marcadas;
  };

  // Adicionar nova tarefa ou editar
  const adicionarOuEditarTarefa = () => {
    if (!novaTarefa.titulo.trim()) {
      Alert.alert('Erro', 'Digite um título para a tarefa');
      return;
    }

    if (editandoTarefaId) {
      setTarefas(tarefas.map(tarefa =>
        tarefa.id === editandoTarefaId
          ? { ...tarefa, titulo: novaTarefa.titulo, descricao: novaTarefa.descricao, data: novaTarefa.data }
          : tarefa
      ));
      setEditandoTarefaId(null);
    } else {
      const novaTarefaCompleta: Tarefa = {
        id: Math.random().toString(36).substring(7),
        titulo: novaTarefa.titulo,
        data: novaTarefa.data,
        descricao: novaTarefa.descricao,
        concluida: false
      };
      setTarefas([...tarefas, novaTarefaCompleta]);
    }
    setModalVisivel(false);
    setNovaTarefa({
      titulo: '',
      descricao: '',
      data: dataSelecionada
    });
  };

  // Marcar como concluída/desconcluída
  const alternarConcluida = (id: string) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
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
          onPress: () => setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
        }
      ]
    );
  };

  // Editar tarefa
  const editarTarefa = (tarefa: Tarefa) => {
    setNovaTarefa({
      titulo: tarefa.titulo,
      descricao: tarefa.descricao || '',
      data: tarefa.data
    });
    setEditandoTarefaId(tarefa.id);
    setModalVisivel(true);
  };

  // Formatar data para exibição (corrige bug de fuso)
  const formatarData = (data: string) => {
    // Garante que a data seja interpretada como local
    const [ano, mes, dia] = data.split('-').map(Number);
    const dataObj = new Date(ano, mes - 1, dia);
    return format(dataObj, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  };

  // Quando seleciona uma data, atualiza também a data do modal
  const aoSelecionarDia = (day: { dateString: string }) => {
    setDataSelecionada(day.dateString);
    setNovaTarefa(nova => ({
      ...nova,
      data: day.dateString
    }));
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
                    onPress={() => alternarConcluida(tarefa.id)}
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