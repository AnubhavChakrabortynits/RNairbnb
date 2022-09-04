import React from "react";
import { styles } from "./styles";
import { View,Text,Image } from "react-native";

export default function(props) {
  console.log(props.data.item.image)
  return (<View style={styles.container}>
  
  <Image source={{uri:String(props.data.item.image)}} style={styles.image} />
  
  <View style={{width:'90%',alignItems:'flex-start'}} >
  
  <Text style={styles.bedroom}>{props.data.item.bed} bed {props.data.item.bedroom} bedroom</Text>
  <Text style={{fontWeight:"900",fontSize:20}}>{props.data.item.title}</Text>
  <Text style={{fontWeight:"700",fontSize:15,marginVertical:5}}>Type:{props.data.item.type}</Text>
  
  </View>
  <View style={{width:'90%',alignItems:'flex-start'}}>
  <Text style={styles.prices}>
    <Text style={styles.oldPrice}>
{props.data.item.oldPrice}$
    </Text>
    <Text style={styles.newPrice}> {props.data.item.newPrice}$ /night</Text>
  </Text>

  <Text style={styles.totalPrice}>
    {props.data.item.totalPrice}$ total
  </Text>
  </View>
  </View>

  
      
    




   

  )
}
