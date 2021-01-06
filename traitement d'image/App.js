import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import * as Font from "expo-font";
import {AppLoading} from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgetPassword from './screens/ForgetPassword';
import Categorie from './screens/Categorie';
import VisualSearch from './screens/VisualSearch';

import Success from './screens/Success';
import Payer from './screens/Payer';
import Crop from './screens/Crop';
import TakePhoto from './screens/TakePhoto';
import SplashScreen from './screens/SplashScreen';
import Home from './screens/Home';
import Agrandi from './screens/Agrandi';
import AgrandiPhoto from './screens/AgrandiPhoto';
import PrixAgrandi from './screens/PrixAgrandi';
import Adress from './screens/Adress';
import TirageCarre from './screens/TirageCarre';
import Magnet from './screens/Magnet';
import SelectSize from './screens/SelectSize';
import SelectSizeUSB from './screens/SelectSizeUSB';
import CoffertUsb from './screens/CoffertUsb';
import Collage from './screens/Collage';
import ProductCards from './screens/ProductCards';
import ManipulateImage from './screens/ManipulateImage';
import AgrandiTakePhoto from './screens/AgrandiTakePhoto';
import UploadPhotoTirage from './screens/UploadPhotoTirage';
import PrixTirage from './screens/PrixTirage';
const Stack = createStackNavigator();

const getFonts = () => {
  return Font.loadAsync({
    'Metropolis' : require('./assets/fonts/Metropolis/Metropolis.otf'),
    'Inter' : require('./assets/fonts/Inter/Inter.ttf'),
    'Abel' : require('./assets/fonts/Abel/Abel.ttf'),
    'Alegreya' : require('./assets/fonts/Alegreya.ttf'),
    

  });
} 


export default function App() {
  const [fontsLoaded , setFontsLoaded] = useState(false);
  if(fontsLoaded){

  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{ headerShown: true },{title:"Catégorie"}} name="Categorie" component={Categorie} />

      <Stack.Screen options={{ headerShown: true },{ title: 'COFFERTS USB' }} name="CoffertUsb" component={CoffertUsb} />
      <Stack.Screen options={{ headerShown: true },{ title: 'COFFERTS USB' }} name="SelectSizeUSB" component={SelectSizeUSB} />
      <Stack.Screen options={{ headerShown: true }} name="SelectSize" component={SelectSize} />

      <Stack.Screen options={{ headerShown: false , headerLeft: null }}   name="Home" component={Home} />

      <Stack.Screen options={{ headerShown: true },{ title: 'Agrandissement Photos' }} name="Agrandi" component={Agrandi} />

      <Stack.Screen options={{ headerShown: false }} name="Success" component={Success} />
      <Stack.Screen options={{ headerShown: true },{ title: 'Méthodes de payement' }} name="Payer" component={Payer} />

      

      <Stack.Screen options={{ headerShown: true },{ title: 'adresse' }} name="Adress" component={Adress} />

      <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
      <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
      
      
      
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
     
      <Stack.Screen options={{ headerShown: false }} name="ManipulateImage" component={ManipulateImage} />
      <Stack.Screen options={{ headerShown: false },{ title: 'TIRAGES CARRES' }} name="UploadPhotoTirage" component={UploadPhotoTirage} />
      <Stack.Screen options={{ headerShown: false }} name="ProductCards" component={ProductCards} />
      <Stack.Screen options={{ headerShown: false }} name="Collage" component={Collage} />
      
      <Stack.Screen options={{ headerShown: true },{ title: 'MAGNETS' }} name="Magnet" component={Magnet} />
      <Stack.Screen options={{ headerShown: true },{ title: 'TIRAGES CARRES' }} name="TirageCarre" component={TirageCarre} />
      <Stack.Screen options={{ headerShown: true },{ title: 'Agrandissement Photos' }} name="PrixAgrandi" component={PrixAgrandi} />
      <Stack.Screen options={{ headerShown: true },{ title: 'TIRAGE CARRE' }} name="PrixTirage" component={PrixTirage} />
      <Stack.Screen options={{ headerShown: true },{ title: 'Agrandissement Photos' }} name="AgrandiPhoto" component={AgrandiPhoto} />
      <Stack.Screen options={{ headerShown: true },{ title: 'Agrandissement Photos' }} name="AgrandiTakePhoto" component={AgrandiTakePhoto} />

      
 

      
      
      <Stack.Screen options={{ headerShown: false }} name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen options={{ headerShown: true }} name="VisualSearch" component={VisualSearch} />
     
      <Stack.Screen options={{ headerShown: true }} name="Crop" component={Crop} />
      <Stack.Screen options={{ headerShown: true }} name="TakePhoto" component={TakePhoto} />
      
      </Stack.Navigator>
    </NavigationContainer>
    
    
   
  );}
  else {
    return (<AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)}/>);
    }
  
}


