import { StyleSheet } from "react-native-web";
import { Dimensions } from "react-native-web";


const styles=StyleSheet.create(
    {
        image:{
            width:'100%',
            
            aspectRatio:3/2,
            
            resizeMode:'cover',
            borderRadius:10,

        },
        container:{
            marginVertical:15,
            width:'100%' ,
            justifyContent:'center',
            alignItems:'center'
            

        },
        prices:{
fontSize:18,
fontWeight:"bold",
marginVertical:10
        },
        bedroom:{
marginVertical:10,
color:"#5b5b5b",
fontWeight:"bolder"
        },

        roomDescription:{
fontSize:18,
lineHeight:25
        },

        oldPrice:{
color:"#5b5b5b",
textDecorationLine:"line-through",

        },

        newPrice:{
fontWeight:"bold"
        },
        totalPrice:{
            fontWeight:"bold",
textDecorationLine:"underline",
fontSize:20
        }
    }
)


export {styles};