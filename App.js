import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gato from './Gato';
import Cliques from './Cliques';

function App() {
  return (
    <View style={styles.container}>
      <Text>Prof. Glauber Ferreira</Text>
      <Gato idade={3}/>
      <Gato idade={7}/>
      <Gato idade={1}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
