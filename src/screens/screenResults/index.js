import React from 'react'
import { Text,View,FlatList } from 'react-native'
import feed from '../../../assets/data/feed';
import Posts from '../../components/posts';
export default function SearchResults() {
    
  return (
    <View style={{alignItems:"center",width:"90%",marginLeft:'auto',marginRight:'auto'}}>
<FlatList data={feed} renderItem={(item)=>{
 
return <Posts  data={item}/>
}}/>
    </View>
  )
}
