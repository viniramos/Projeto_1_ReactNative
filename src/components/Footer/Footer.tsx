import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const Footer = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.content}>
        </View>
        <View style={styles.footer}>
          <View style={styles.icons}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="home-filled" size={24} color="white" />
              <Text style={styles.text}>Início</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="game-controller-outline" size={24} color='rgba(112, 111, 91, 0.5)' />
              <Text style={styles.textOff}>Jogos</Text>
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="play-box-multiple-outline" size={24} color='rgba(112, 111, 91, 0.5)' />
              <Text style={styles.textOff}>Novidades</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="person-circle-outline" size={24} color='rgba(112, 111, 91, 0.5)' />
              <Text style={styles.textOff}>Minha Netflix</Text>
            </View>
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    justifyContent: 'space-between', 
  },
  content: {
    flex: 1, 
    backgroundColor: 'lightgray', 
  },
  footer: {
    width: '100%',
    height: 55, 
    backgroundColor: 'black',
    position: 'absolute',
    bottom: -605, 
    justifyContent: 'center',
  },
  icons: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
  textOff:{
    color: 'rgba(112, 111, 91, 0.5)',
    fontSize: 12,
    marginTop: 5,
  }
});
