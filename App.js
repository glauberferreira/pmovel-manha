import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gato from './Gato';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Prof. Glauber Ferreira</Text>
      <Gato nome="Black"/>
      <Gato nome="Garfield"/>
      <Gato nome="Mingau"/>
      <StatusBar style="auto" />
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
