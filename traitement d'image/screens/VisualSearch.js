import React ,{ useState } from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export default function VisualSearch({navigation : {goBack,navigate}}) {
    return (
        <View style={styles.container}>
        <Image source={require('../assets/img/background.png')} style={styles.backgroundImage} />
        <View style={styles.take_photo_btn}>
          <Text onPress={() => navigate('TakePhoto')} style={{color :"#fff" , marginTop:13}}>PRENDRE UNE PHOTO</Text>
        </View>
        <View style={styles.download_btn}>
          <Text onPress={() => navigate('ManipulateImage')} style={{color :"#fff" , marginTop:13}}>TELECHARGEMENT UNE IMAGE</Text>
        </View>
        </View>
        
        
        
    );
}

const styles = StyleSheet.create(style);
