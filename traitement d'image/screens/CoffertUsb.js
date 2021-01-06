import React ,{useState}from 'react'
import {Platform,TouchableHighlight, StyleSheet, Text, View, TextInput, Image,TouchableOpacity } from 'react-native'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function CoffertUsb({navigation : {goBack,navigate}}) {
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.Magnet_top_img}> 
        <Image style={{width:"100%"}}  source={require('../assets/img/coffert-usb-cover.png')}/>
        
        </TouchableOpacity>
        
        <View style={{height : hp("60%"),marginBottom:hp("-5%")}}>
        
        <TouchableOpacity onPress={()=>navigate('SelectSizeUSB')} style={styles.coffertWrap}>
            <Image style={styles.CoffertImg} source={require('../assets/img/coffert/image1.png')}/>
            <Text style={styles.CoffertDesc}>PACK COFFRET USB PERSONNALISEE SANS CLE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('SelectSizeUSB')} style={styles.coffertWrap}>
            <Image style={styles.CoffertImg} source={require('../assets/img/coffert/image5.png')}/>
            <Text style={styles.CoffertDesc}>COFFRET USB PERSONNALISEE ACIER 16 GO USB 2.0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('SelectSizeUSB')} style={styles.coffertWrap}>
            <Image style={styles.CoffertImg} source={require('../assets/img/coffert/image6.png')}/>
            <Text style={styles.CoffertDesc}>COFFRET USB PERSONNALISEE ACIER 32 GO USB 2.0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('SelectSizeUSB')} style={styles.coffertWrap}>
            <Image style={styles.CoffertImg} source={require('../assets/img/coffert/image2.png')}/>
            <Text style={styles.CoffertDesc}>COFFRET USB PERSONNALISEE CRYSTAL 8 GO USB 3.0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('SelectSizeUSB')} style={styles.coffertWrap}>
            <Image style={styles.CoffertImg} source={require('../assets/img/coffert/image4.png')}/>
            <Text style={styles.CoffertDesc}>COFFRET USB PERSONNALISEE CRYSTAL 16 GO USB 3.0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('SelectSizeUSB')} style={styles.coffertWrap}>
            <Image style={styles.CoffertImg} source={require('../assets/img/coffert/image2.png')}/>
            <Text style={styles.CoffertDesc}>COFFRET USB PERSONNALISEE CRYSTAL 32 GO USB 3.0</Text>
        </TouchableOpacity>
        
        </View>
        <View style={styles.Footer}>
                <View style={styles.footer_icons_wrap}>
                    <IconAntDesign style={styles.footer_icons} name="home"/> 
                    <Text style={{color :"#b7b7b7"}}>Home</Text>
                </View>
                
            </View>
            <View style={styles.FooterBar_cat}></View>
        </View>

        
    );
}
const styles = StyleSheet.create(style);