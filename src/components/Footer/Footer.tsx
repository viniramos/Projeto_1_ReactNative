import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const Footer = () => {
    return (
      <View style={styles.container}>
          <View style={styles.icons}>
            <MaterialIcons name="home-filled" size={24} color="black" />
              <MaterialIcons name="cast-connected" size={24} color="white" />
              <Ionicons name="game-controller-outline" size={24} color="white" />
              <MaterialCommunityIcons name="play-box-multiple-outline" size={24} color="white" />
              <Ionicons name="person-circle-outline" size={24} color="white" />
          </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: 100,
      backgroundColor: "blue",
      justifyContent:"center",
      top: 50,
    },
    icons:{
      width: "100%",
      height: "50%",
      flexDirection:"row",
      alignItems:"center",
      justifyContent: "space-around",
      gap: 10,
  },
  });
  