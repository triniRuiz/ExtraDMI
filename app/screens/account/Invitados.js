import React from "react";
import {View,Text,Image, ScrollView,StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native"


export default function Invitados(){
    const navegacion=useNavigation();
        return(
            <ScrollView centerContent={true} style={styles.body}/>

        )}
const styles = StyleSheet.create({
        body:{
        marginLeft:30,
        marginRight:30,
   },
        imagen:{
        height:320,
        width:"100%",
        marginBottom:30,
        titulo:{
        fontWeight:"bold",
        fontSize:19,
        marginBottom:10,
        textAlign:"center",
       },
        parrafo:{
        textAlign:"justify",
        marginBottom:20,
       }
       }});