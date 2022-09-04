import { StyleSheet } from "react-native-web";
import { Dimensions } from "react-native";

const styles=StyleSheet.create({
container:{
margin:5,
width:Dimensions.get('window').width -10 ,

},
textInput:{
    fontSize:18,
    marginBottom:15,
    marginLeft:20,
    marginTop:10,
    
    
},
locationText:{
    fontWeight:'bold',fontSize:18

},row:{
flexDirection:'row',
width:'100%',
alignItems:'center',
margin:12,
borderBottomWidth:1,
borderColor:'lightgrey'

},
iconContainer:{
backgroundColor:'#d4d4d4',
borderRadius:10,
padding:7,
marginRight:15
}
})

export {styles};