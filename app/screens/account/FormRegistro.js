import React, {useState} from 'react';
import {StyleSheet, View, Text} from "react-native";
import {Input, Icon, Button} from "react-native-elements";
export default function FormRegistro(){
    const [mostrar, setMostrar]=useState(false);
return (
            <View style={styles.formContainer}>
                <Input
                    placeholder="Correo Electrónico"
                    containerStyle={styles.inputForm}
                    rightIcon={
                <Icon
                    type="material-community-icon"
                    name="alternate-email"
                    iconStyle={styles.icono}/>}/>
                <Input
                    placeholder="Contraseña"
                    containerStyle={styles.inputForm}
                    password={true}
                    secureTextEntry={mostrar?false:true}
                    rightIcon={
            <Icon
                    type="material-community-icon"
                    name={mostrar?"visibility":"visibility-off"}
                    iconStyle={styles.icono}
                    onPress={() => setMostrar(!mostrar)}/>}/>
            <Input
                placeholder="Repetir Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
                rightIcon={
            <Icon
                    type="material-community-icon"
                    name="visibility-off"
                    iconStyle={styles.icono}
            />
            }
            />
            <Button
                title="Registrar"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}/>
            </View>
            )}

const styles = StyleSheet.create({
    formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    },
    inputForm: {
    width:"100%",
    marginTop:20,
    },
    btnContainer: {
    marginTop:20,
    width:"100%",
    },
    btn: {
    backgroundColor:"#0A6ED3",
    },
    icono: {
        color:"#c1c1c1"
        },
   })
   