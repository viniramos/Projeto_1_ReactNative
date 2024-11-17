import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';


export const Navbar = () => {
  return (
    <View style={styles.container}>
        <View>
        <Text style={styles.navbarText}></Text>
        <View style={styles.icons}>
            <MaterialCommunityIcons style={styles.iconsN} name="netflix" size={40} color="#D81F26" />
            <MaterialIcons name="cast-connected" size={24} color="white" />
            <Octicons name="download" size={24} color="white" />
            <AntDesign name="search1" size={24} color="white" />
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#504F3b',
    justifyContent:"center",
  },
  navbarText: {
    color: '#D81F26',
    fontSize: 20,
    marginRight: 0, 
  },
  icons:{
    width: "100%",
    height: "50%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-around",
    gap: 10,
},
  iconsN:{
    width: "50%",
    height: "90%",
    right: 0,
    alignSelf: "flex-start",
  },
});
