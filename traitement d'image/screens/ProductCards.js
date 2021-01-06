import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView,Image,TouchableOpacity } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';

export default function ProductCards({navigation : {goBack,navigate}}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{alignSelf:"center"}}>
            <TouchableOpacity onPress={()=>navigate('SelectSize')}>
            <Image source={require('../assets/img/cards/image1.png')} style={styles.cardImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('SelectSize')}>
            <Image source={require('../assets/img/cards/image2.png')} style={styles.cardImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('SelectSize')}>
            <Image source={require('../assets/img/cards/image3.png')} style={styles.cardImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('SelectSize')}>
            <Image source={require('../assets/img/cards/image4.png')} style={styles.cardImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('SelectSize')}>
            <Image source={require('../assets/img/cards/image5.png')} style={styles.cardImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('SelectSize')}>
            <Image source={require('../assets/img/cards/image6.png')} style={styles.cardImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate('SelectSize')}>
            <Image source={require('../assets/img/cards/image7.png')} style={styles.cardImage} />
            </TouchableOpacity>
            </ScrollView>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create(style);