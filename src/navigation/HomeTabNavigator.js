import React from 'react'
import { View ,Text} from 'react-native';
import WelcomeScreen from '../screens/home'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ExploreNavigator from './ExploreNavigator';
export default function HomeTabNavigator() {

    const Tab=createBottomTabNavigator()
  return (
   <Tab.Navigator >
    <Tab.Screen name='Explore'  component={ExploreNavigator}
        options={{tabBarIcon:(color)=>{
               return <FontAwesome size={25} color={color} name="search" />}
        }}
    />
    <Tab.Screen name={"heart"} component={HomeScreen}
        options={{tabBarIcon:(color)=>{
               return <FontAwesome size={25} color={color} name="heart-o" />}
        }}
    />
    <Tab.Screen name={"airbnb"} component={HomeScreen}
        options={{tabBarIcon:(color)=>{
               return <FontAwesome size={25} color={color} name="hotel" />}
        }}
    />
    <Tab.Screen name={"message"} component={WelcomeScreen}
        options={{tabBarIcon:(color)=>{
               return <FontAwesome size={25} color={color} name="envelope-o" />}
        }}
    />
    <Tab.Screen name={"profile"} component={WelcomeScreen}
        options={{tabBarIcon:(color)=>{
               return <FontAwesome size={25} color={color} name="user-o" />}
        }}
    />
   </Tab.Navigator>
  )
}
