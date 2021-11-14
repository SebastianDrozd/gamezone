import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading'
import Navigator from './routes/homeStack'
import * as Font from "expo-font"

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf') ,
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <Navigator/>
    );
  }
  else{
   return (
      <AppLoading
      startAsync={getFonts}
      onFinish={setFontsLoaded(true)}/>
   );

  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
