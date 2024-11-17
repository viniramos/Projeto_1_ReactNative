import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { CategoriaNav } from './src/components/Categoria';

export default function App() {
  return (
    <View >
      <Navbar/>
      <CategoriaNav/>
    </View>
  );
}
