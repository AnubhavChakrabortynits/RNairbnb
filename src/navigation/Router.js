import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import HomeTabNavigator from './HomeTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DestinationSearch from '../screens/DestinationSearch';
import Guest from '../screens/GuestScreen';
export default function Router(props) {

    const Stack=createNativeStackNavigator();
  return (

<NavigationContainer >
<Stack.Navigator >


<Stack.Screen name='Homescreen' component={HomeTabNavigator}
    options={{headerShown:false}} />


    <Stack.Screen name='Search Destination' component={DestinationSearch}
    options={{title:"search your destination"}} />

<Stack.Screen name='Guest' component={Guest}
    options={{title:"How many people"}} />



</Stack.Navigator>
</NavigationContainer>

  )
}
 