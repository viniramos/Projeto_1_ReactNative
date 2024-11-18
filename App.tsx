import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/components/Navbar/Navbar';
import { CategoriaNav } from './src/components/Categoria/Categoria';
import { Destaque } from './src/components/Destaque/EmDestaque';
import { Footer } from './src/components/Footer/Footer';



export default function App() {
  return (
    <View>
      <Navbar/>
      <CategoriaNav/>
      <Destaque/>
      <Footer/>
    </View>
  );
}

