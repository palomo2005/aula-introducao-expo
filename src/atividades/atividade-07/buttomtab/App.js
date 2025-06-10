import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'; // Importando o módulo Constants
import Buttomz from './buttom/index.js'; // Importando o componente Buttomz do arquivo index.js

export default function App() {
  return (
    <View style={styles.container}>
      <Buttomz />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 8,
    borderRadius: 20,
    paddingTop: Constants.statusBarHeight, // Garantindo que o topo seja ajustado para a barra de status
  },

  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold', // Definindo o peso da fonte como negrito
    color: '#FFFFFF', // Definindo a cor do texto como branco
  },
  tabBarIcon: {
    marginBottom: -3,
  },
 
});