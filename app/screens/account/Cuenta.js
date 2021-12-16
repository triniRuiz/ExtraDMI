import React, {useState, useEffect} from "react";
import * as firebase from "firebase/app";
import {View,Text}from "react-native";
import Logged from "./Logged";
import Invitado from "./Invitados"

export default function Cuenta(){
   const [login,setLogin]=useState(null);
   useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
        !user ? setLogin(flase): setLogin(true);
    });
    }, []);
   if(login=== null)return <Text>Cargando...</Text>;
   return login ? <Logged/> : <Invitado/>;
}