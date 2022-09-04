import React from 'react'
import { useState } from 'react'
import { View,Text,TextInput,FlatList } from 'react-native'
import { styles } from './styles'
import search from '../../../assets/data/search'
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function DestinationSearch() {


  const [inputText,setInputText]=useState({initialState:''})
 
  return (
    <View style={styles.container}>
<TextInput style={styles.textInput} placeholder="Where Do You Wanna Go"
  value={inputText} onChangeText={setInputText}
/>

<FlatList data={search} renderItem={(item)=>{
  console.log("search data",item)


  return <View style={styles.row}>
  <View style={styles.iconContainer}>
<FontAwesome name="map-marker"  size={30}/>
  </View>
  <Text style={styles.locationText}>{item.item.description}</Text></View>
  
}} />

    </View>
  )
}
