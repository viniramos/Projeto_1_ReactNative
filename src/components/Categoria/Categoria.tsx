import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export const CategoriaNav = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Séries</Text>
      <Text style={styles.text}>Filmes</Text>
      <View style={styles.categoryContainer}>
        <Text style={styles.text}>Categorias  </Text>
        <Entypo style={styles.icon} name="chevron-small-down" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#504F3b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 12.5,
    padding: 17.5,
    borderWidth: 2,
    borderRadius: 150,
    marginHorizontal: 5,
    borderColor: 'white',
    color: 'white',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    right:35,
  },
});

export default CategoriaNav;
