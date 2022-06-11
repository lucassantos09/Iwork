import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../screens/Home";
import Login from "../screens/Login";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Pesquisar from "../screens/Pesquisar";
import DetalhesColaborador from "../screens/DetalhesColaborador";
import Colaboradores from "../screens/Colaboradores";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="Colaboradores" component={Colaboradores} />
            <Stack.Screen name="Detalhes" component={DetalhesColaborador} />
        </Stack.Navigator>
    )
}


function PesquisarStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Pesquisar" component={Pesquisar} />
        </Stack.Navigator>
    )
}


function AppRoutes() {


    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Tab.Screen
                name="Pesquisar"
                component={PesquisarStack}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons
                            name="magnify-expand"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />


        </Tab.Navigator>
    );
}

export default AppRoutes;