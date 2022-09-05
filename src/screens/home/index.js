import React from 'react'
import {styles} from './styles.js'
import {View,Text,ImageBackground,Pressable} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
export default function HomeScreen() {

  const navigation=useNavigation()
  return (
    <View>



<ImageBackground source={{uri:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"}} style={styles.image}>
<Pressable style={styles.searchButton} onPress={()=>{return navigation.navigate('Search Destination')}}>
<FontAwesome name="search" color={"#f15454"} size={25}/>
<Text style={styles.searchButtonText} >Where Ya Goin Mate?</Text>
    </Pressable>

    <Text style={styles.title}>Go Near</Text>
    <Pressable style={styles.exploreButton} onPress={()=>{console.log("explore  utton clicked")}}>
        <Text>Explore Nearby Places</Text>
    </Pressable>
</ImageBackground>
    </View>
  )
}
