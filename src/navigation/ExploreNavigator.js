import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home';
import SearchResults from '../screens/screenResults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';
 const ExploreNavigator = (props) => {

    const Stack=createNativeStackNavigator()
  return (
  <Stack.Navigator>



        
    <Stack.Screen name="Welcome" component={HomeScreen}
    options={{headerShown:false}} />
        
        <Stack.Screen name="Search Results" component={SearchResultsTabNavigator}
    options={{headerShown:false}} />
     
    


  </Stack.Navigator>
  )
}


export default ExploreNavigator;
