import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";
import Cuenta from "../screens/acount/Cuenta";
import Ayuda from "../screens/Ayuda";
import Masleido from "../screens/Masleido";
import Masvendido from "../screens/Masvendido";
import Recomendaciones from "../screens/Recomendaciones";



const Tab= createBottomTabNavigator();


export default function Navegacion(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Cuenta"
                tabBarStyle={
                {
                    tabBarInactiveTintColor:"#9C9C9C",
                    tabBarActiveTintColor:"#008F39",
                    }
                }
                screenOptions={({route})=> ({
                    tabBarIcon:({color})=> opciones(route,color),
                })}
            >
            <Tab.Screen name="Ayuda" component={Ayuda}/>
            <Tab.Screen name="Cuenta" component={Cuenta}/>
            <Tab.Screen name="Masleido" component={Masleido}/>
            <Tab.Screen name="Masvendido" component={Masvendido}/>
            <Tab.Screen name="Recomendaciones" component={Recomendaciones}/>
            </Tab.Navigator>
            </NavigationContainer>
    )
}

function opciones(ruta, color){
    let iconName;
    switch(ruta.name){
        case"Ayuda":
        iconName="question-mark-circle";
        break;
        case"Cuenta":
        iconName="person";
        break;
        case"Masleido":
        iconName="star-border";
        break;
        case"Masvendido":
        iconName="auto-stories"
        break;
        case"Recomendaciones":
        iconName="assignment";
        break;

    }
    return(
        <Icon type="material-comunity" name={iconName} size={22} color={color}/>
    )
}