import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Gastos() {
  return (
    <View style={styles.container}>

       {/* Menu */}
      <TouchableOpacity style={styles.menuIcon}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {/* Saldo */}
      <View style={styles.saldosContainer}>
        <View style={styles.saldoBox}>
          <Text style={styles.saldoLabel}>SALDO INICIAL</Text>
          <Text style={styles.saldoValor}>R$ 0,00</Text>
        </View>
        <View style={[styles.saldoBox, styles.saldoAtual]}>
          <Text style={styles.saldoLabel}>SALDO ATUAL</Text>
          <Text style={styles.saldoValor}>R$ 0,00</Text>
        </View>
      </View>

      {/* Cabeçalho */}
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, styles.cellHeader, { flex: 2 }]}>ITEM</Text>
        <Text style={[styles.cell, styles.cellHeader]}>ESTIMADO (R$)</Text>
        <Text style={[styles.cell, styles.cellHeader]}>DESPESA (R$)</Text>
      </View>

      {/* Tabela */}
      <ScrollView style={styles.tableBody}>
        {Array.from({ length: 10 }).map((_, i) => (
          <View style={styles.tableRow} key={i}>
            <Text style={[styles.cell, { flex: 2 }]}>{`Item ${i + 1}`}</Text>
            <Text style={styles.cell}>0,00</Text>
            <Text style={styles.cell}>0,00</Text>
          </View>
        ))}
      </ScrollView>

      {/* Linha */}
      <View style={styles.totalRow}>
        <Text style={[styles.cell, styles.totalLabel, { flex: 2 }]}>TOTAL</Text>
        <Text style={styles.cell}>R$ 0,00</Text>
        <Text style={styles.cell}>R$ 0,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
    paddingTop: 150,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuIcon: {
    position: 'absolute',
    top: 70,
    left: 20,
  },
  menuText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '700',
  },
  saldosContainer: {
    marginBottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saldoBox: {
    backgroundColor: '#2A2A40',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
  },
  saldoAtual: {
    backgroundColor: '#A82223',
  },
  saldoLabel: {
    color: '#A0A0B0',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 6,
    letterSpacing: 1,
  },
  saldoValor: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFF',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#34344A',
    paddingVertical: 15,
  },
  tableBody: {
    marginBottom: 25,
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#444466',
    paddingVertical: 14,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#D0D0E0',
    fontSize: 16,
    fontWeight: '500',
  },
  cellHeader: {
    fontWeight: '700',
    color: '#BCC1D1',
  },
  totalRow: {
    flexDirection: 'row',
    borderTopWidth: 8,
    borderColor: '#2C2C44',
    paddingVertical: 18,
    backgroundColor: '#2C2C44',
  },
  totalLabel: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 20,
  },
});
