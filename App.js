import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Dimensions} from 'react-native';
import { Button } from 'react-native-web';
import HomeScreen from './src/screens/home';
import Posts from './src/components/posts';
import feed from './assets/data/feed';
import SearchResults from './src/screens/screenResults';
import DestinationSearch from './src/screens/DestinationSearch';
import Guest from './src/screens/GuestScreen';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';

const post1=feed[1]
export default function App() {
  return (
   <>
  
  <Router />
   <StatusBar style='dark' animated={true} />
  
  
    
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
flex:1,
 
alignItems:'center',
    marginTop:20,
  
  },
});

/*
<SafeAreaView style={styles.container}>
{/* view is like a div in html }
 {/*<HomeScreen/>}
 {/*<Posts data={post1}/>}
 {/*<SearchResults/>}
{/* <DestinationSearch/> } 
{/*<Guest/>}

  

</SafeAreaView> */



