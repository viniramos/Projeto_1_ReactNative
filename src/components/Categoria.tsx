import React from 'react';
import { View, Text ,StyleSheet } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
export const CategoriaNav = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.Text}> Séries </Text>
            <Text style={styles.Text}> Filmes </Text>
            <Text style={styles.Text}> Categorias       </Text>
            <Entypo style={styles.icon} name="chevron-small-down" size={24} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#504F3b',
        alignContent:"flex-start",
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    Text:{
        fontSize: 15,
        padding: 10,
        borderWidth: 2,
        borderRadius: 150,
        marginHorizontal: 5,
        borderColor:"white",
        color:"white"
    },
    icon:{
        alignSelf: "center",
        right: 40,
    },
    })