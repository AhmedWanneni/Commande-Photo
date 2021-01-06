import React ,{useState}from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image } from 'react-native'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';

export default function Home({ route, navigation }) {
    
   
    return(
        <View style={styles.HomeContainer}>
            
            <View style={styles.WrapLogo}>
            <Image style={styles.logo} source={require('../assets/img/WeArt.png')}/>
            </View>
            
            <View style={styles.HomeLinkWrap}>
            <Text onPress={() => navigation.navigate('Adress')} style={styles.HomeLink}>TIRAGES STANDARDS </Text>
            <Text onPress={() => navigation.navigate('Agrandi')} style={styles.HomeLink}>AGRANDISSEMENT PHOTOS </Text>
            <Text onPress={() => navigation.navigate('TirageCarre')} style={styles.HomeLink}>TIRAGES CARRÉS </Text>
            <Text onPress={() => navigation.navigate('Magnet')} style={styles.HomeLink}>MAGNETS </Text>
            <Text onPress={() => navigation.navigate('ProductCards')} style={styles.HomeLink}>MAGNETS PEESONALIÉS </Text>
            <Text onPress={() => navigation.navigate('CoffertUsb')} style={styles.HomeLink}>COFFERT USB </Text>
            </View>
            <View style={styles.FooterBarHome}></View>

        </View>
        
    );
}

const styles = StyleSheet.create(style);