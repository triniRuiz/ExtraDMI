import React from "react";
import {View,Text, Image, StyleSheet} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import FormRegistro from "../../components/account/FormRegistro";
export default function Registrar(){
    return(
        <KeyboardAwareScrollView>
        <Image
        resizeMethod="auto"
        style={styles.imagen}/>
        <View style={styles.formulario}>
        <FormRegistro/>
        </View>
        </KeyboardAwareScrollView>
        );
}
const styles = StyleSheet.create({
    imagen:{
    width:"100%",
    height:150,
    marginTop:20,
    },
    formulario: {
    marginTop:40,
    marginLeft:40,
    marginRight:40,
    },
   })