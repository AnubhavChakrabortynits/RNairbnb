import React from 'react'
import SearchResults from '../screens/screenResults';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
export default function SearchResultsTabNavigator() {

    const Tab=createMaterialTopTabNavigator();
  return (
    <Tab.Navigator screenOptions={{tabBarLabelStyle:{fontSize:16},tabBarIndicatorStyle:{backgroundColor:"black"},tabBarActiveTintColor:"blue",tabBarInactiveTintColor:"red"}}>
        <Tab.Screen name="list" component={SearchResults} />
        <Tab.Screen name="map" component={SearchResults} />
        
    </Tab.Navigator>
  )
}
