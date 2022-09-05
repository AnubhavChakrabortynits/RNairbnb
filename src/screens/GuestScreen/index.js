import React from 'react'

import { View,Text, Pressable } from 'react-native'
import { useState } from 'react'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
export default function Guest() {
    const navigation=useNavigation()

    const [adults,setAdults]=useState(2)
    const [childs,setChilds]=useState(4)
    const [infants,setInfants]=useState(1)
  return (
 <View style={{width:"95%",backgroundColor:"white",justifyContent:"space-between",height:"100%"}}>
<View >
   <View style={styles.row}>

    <View >
        <Text style={{fontWeight:"bold"}}>Adults</Text>
        <Text style={{color:'grey'}}>Ages 13 or above</Text>
    </View>

    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Pressable style={styles.button} onPress={()=>{
            setAdults(adults+1)
        }}>
<Text style={{fontSize:20,fontWeight:'bold'}}>+</Text>
        </Pressable>


       <Text style={{marginHorizontal:20,fontSize:18,color:'#474747'}}>{adults}</Text>
        <Pressable style={styles.button} onPress={()=>{
            if(adults>0){
            setAdults(adults-1)}
            else{

            }
        }}>
<Text style={{fontSize:20,fontWeight:'bold'}}>
    -
</Text>
        </Pressable>
    </View>
    
   </View>




   <View style={styles.row}>

    <View >
        <Text style={{fontWeight:"bold"}}>Children</Text>
        <Text style={{color:'grey'}}>Ages 2 to 12 </Text>
    </View>

    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Pressable style={styles.button} onPress={()=>{
            setChilds(childs+1)
        }}>
<Text style={{fontSize:20,fontWeight:'bold'}}>+</Text>
        </Pressable>


       <Text style={{marginHorizontal:20,fontSize:18,color:'#474747'}}>{childs}</Text>
        <Pressable style={styles.button} onPress={()=>{
            if(childs>0){
            setChilds(childs-1)}
            else{

            }
        }}>
<Text style={{fontSize:20,fontWeight:'bold'}}>
    -
</Text>
        </Pressable>
    </View>
   </View>




   <View style={styles.row}>

    <View >
        <Text style={{fontWeight:"bold"}}>Infants</Text>
        <Text style={{color:'grey'}}>Under 2 Years of Age</Text>
    </View>

    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Pressable style={styles.button} onPress={()=>{
            setInfants(infants+1)
        }}>
<Text style={{fontSize:20,fontWeight:'bold'}}>+</Text>
        </Pressable>


       <Text style={{marginHorizontal:20,fontSize:18,color:'#474747'}}>{infants}</Text>
        <Pressable style={styles.button} onPress={()=>{
            if(infants>0){
            setInfants(infants-1)}
            else{

            }
        }}>
<Text style={{fontSize:20,fontWeight:'bold'}}>
    -
</Text>
        </Pressable>
    </View>
   </View>
   
</View>


   <View style={{marginBottom:20,backgroundColor:"#f15454",alignItems:"center",justifyContent:"center",height:50,marginHorizontal:20,borderRadius:10}}>
    <Pressable onPress={()=>{
        return navigation.navigate('')
    }}>
        <Text style={{fontWeight:"bold",fontSize:20,color:"white"}}>Search</Text>
    </Pressable>
   </View>
   
 </View>
  )
}
