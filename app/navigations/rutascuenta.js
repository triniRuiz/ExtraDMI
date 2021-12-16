import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Login from "../screens/account/Login";
import Cuentas from "../screens/account/Cuentas";

export default function RutasCuenta() {
    return (
        <Stack.Navigator>
        <Stack.Screen
        name="cuentas"
        component={Cuentas}
        options={{title:"Mi Cuenta"}}
        />
       
       <Stack.Screen
        name="login"
        component={Login}
        options={{title:"Iniciar Sesión"}}
        />
        </Stack.Navigator>
        );
       
       }