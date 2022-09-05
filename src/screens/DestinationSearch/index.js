import React from 'react'
import { useState } from 'react'
import { View,Text,TextInput,FlatList,Pressable } from 'react-native'
import { styles } from './styles'
import search from '../../../assets/data/search'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
export default function DestinationSearch() {

  const navigation=useNavigation()

  const [inputText,setInputText]=useState({initialState:''})
 
  return (
    <View style={styles.container}>
<TextInput style={styles.textInput} placeholder="Where Do You Wanna Go"
  value={inputText} onChangeText={setInputText}
/>

<FlatList data={search} renderItem={(item)=>{
  console.log("search data",item)


  return <Pressable style={styles.row} onPress={()=>{
    return navigation.navigate('Guest')
  }}>
  <View style={styles.iconContainer}>
<FontAwesome name="map-marker"  size={30}/>
  </View>
  <Text style={styles.locationText}>{item.item.description}</Text></Pressable>
  
}} />

    </View>
  )
}
