import React from "react";
import {View,Text,Image, ScrollView,StyleSheet} from "react-native";
import { Divider } from "react-native-elements";

export default function Login(){
 return(
 <ScrollView>
 
 <View style={styles.contenedor}>
 <Text>Login FORM</Text>
 <CrearCuenta/>
 </View>
 <Divider style={styles.divider}/>
 <Text>Social Login</Text>
 </ScrollView>
 );
}

function CrearCuenta(){
    return (
    <Text style={styles.textRegistrar}>
    ¿Aún no tienes una cuenta?{" "}
    <Text
    style={styles.link}
    onPress={()=>console.log("Registrar...")}
    >
    Regístrate
    </Text>
    </Text>
    );
   }
   const styles = StyleSheet.create({
        usuario: {
        width:"100%",
        height:150,
        marginTop:20,
        },
        contenedor: {
        marginRight:40,
        marginLeft:40,
        },
        textRegistrar: {
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        },
    link: {
        color:"#0A6ED3",
        fontWeight:"bold",
        },
        divider: {
        backgroundColor:"#0A6ED3",
        margin:40,
        },
       });