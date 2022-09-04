import { Dimensions } from "react-native";
import { StyleSheet } from "react-native-web";
import { useWindowDimensions} from "react-native-web";

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:500,resizeMode:'cover',
        justifyContent:'center'
    },
    title:{
fontSize:80,
fontWeight:'bold',
color:"white",
width:"70%",
marginLeft:25

    },
    exploreButton:{
       
        backgroundColor:"#FFFFFF",
        width:200,
        marginLeft:25,
        height:40,
        borderRadius:15,
         alignItems:"center",
        justifyContent:"center",
        fontSize:16,
        fontWeight:"bold",
        marginTop:25
    },
    searchButtonText:{
fontSize:16,
fontWeight:"bold",
color:"black"

    },
    searchButton:{
        backgroundColor:"#fff",
       zIndex:100,
        height:60,
        borderRadius:10,
       top:50,
      
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
    width:Dimensions.get('window').width -20 ,
    borderRadius:30,
    marginHorizontal:10,


 position:"absolute"
    },
   
})
export {styles};