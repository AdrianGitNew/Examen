import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import HomeScreen from "./Screens/HomeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import StackScreen from "./Screens/StackScreen";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import CalculatorScreen from "./Screens/CalculatorScreen";
import FotosScreen from "./Screens/FotosScreen";
import Entypo from '@expo/vector-icons/Entypo';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="Examen Screen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="Calculator"
                component={CalculatorScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />
        </HomeStackNavigator.Navigator>
        
        
        
    )
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: 'purple'
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={MyStack}
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({Colors,size}) => (
                    <FontAwesome name="home" size={24} color="purple" />
                ),
                tabBarBadge: 69,
                headerShown: false, 

            }} 
            
            />
            <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
                tabBarLabel: 'Videos',
                tabBarIcon: ({Colors,size}) => (
                    <Entypo name="video" size={24} color="purple" />
                ),
                tabBarBadge: 1,
                headerShown: false, 

            }}
            
            />
            <Tab.Screen 
            name="Fotos" 
            component={FotosScreen} 
            options={{
                tabBarLabel: 'Fotos',
                tabBarIcon: ({Colors,size}) => (
                    <FontAwesome name="photo" size={24} color="purple" />
                ),
                tabBarBadge: 2,
                headerShown: false, 

            }}
            
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}