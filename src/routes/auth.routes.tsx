import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cadastro from "../screens/Cadastro";
import Colaboradores from "../screens/Colaboradores";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Pesquisar from "../screens/Pesquisar";

const Stack = createNativeStackNavigator();

function AuthRoutes(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Colaboradores" component={Colaboradores} />
            <Stack.Screen name="Pesquisar" component={Pesquisar} />

        </Stack.Navigator>
    )
}   

export default AuthRoutes;