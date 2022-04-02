import Cabecalho from './src/components/cabecalho'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './src/components/botao';

export default function App() {
  return (
    <View>
      <Cabecalho/>
       
      
      <Botao
       Logo="game-controller" 
       texto="Jogos" 
       cor="green"
       
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
