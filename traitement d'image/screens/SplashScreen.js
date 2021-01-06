import React ,{ useState } from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export default function SplashScreen({navigation : {goBack,navigate}}) {
   
   setTimeout(()=>navigate('Login'),2000);
    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigate('Login')}>
            
        <Image source={require('../assets/img/splash.png')} style={styles.backgroundImage} />
            
        </TouchableOpacity>
        
        
        
    );
}

const styles = StyleSheet.create(style);
