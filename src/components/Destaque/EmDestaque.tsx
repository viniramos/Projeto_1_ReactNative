import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Destaque = () => {
  return (
    <View style={styles.containerColor}>
      
      <View style={styles.container} />

      <Image source={require("../../../assets/CidadeInvisivel.png")} style={styles.image} />

      <View style={styles.overlay}>
        <View style={styles.actionContainer}>
          
          <View style={[styles.button, styles.buttonAssistir]}>
            <Foundation name="play" size={20} color="black" />
            <Text style={styles.text}>Assistir</Text>
          </View>
          
          <View style={[styles.button, styles.buttonMinhaLista]}>
            <AntDesign name="plus" size={20} color="white" />
            <Text style={[styles.text, styles.textMinhaLista]}>Minha lista</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerColor: {
    flex: 1,
    width: '100%',
    backgroundColor: '#504F3b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: 550,
    backgroundColor: '#504F3b',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  image: {
    width: '90%',
    height: 400,
    borderWidth: 0.5,
    borderColor: 'rgba(112, 111, 91, 0.5)',
    borderRadius: 10,
    marginVertical: 30,
    zIndex: 2,
    top: 220,
  },
  overlay: {
    position: 'absolute',
    top: 280,
    width: '80%',
    alignSelf: 'center',
    zIndex: 3,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 95,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    right: 18,
  },
  buttonAssistir: {
    paddingVertical: 10,
    paddingHorizontal: 37,
    right: 18,
  },
  buttonMinhaLista: {
    backgroundColor: 'rgba(112, 111, 91, 0.8)', 
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
    color: 'black', 
  },
  textMinhaLista: {
    color: 'white', 
  },
});

export default Destaque;
