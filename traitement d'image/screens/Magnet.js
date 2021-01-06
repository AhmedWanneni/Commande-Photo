import React ,{useState}from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,TouchableOpacity } from 'react-native'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Magnet({navigation : {goBack,navigate}}) {
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.Magnet_top_img}> 
        <Image style={{width:"100%"}}  source={require('../assets/img/magnetCover.png')}/>
        
        </TouchableOpacity>
        
        <View style={{height:hp("52%"),marginTop:hp("2.2%")}}>
        <TouchableOpacity onPress={() => navigate('Adress')} style={styles.magnetWrap}>
            <Image style={styles.magnetImg} source={require('../assets/img/magnet1.png')}/>
            <Text style={styles.magnetDesc}>FEUILLE MAGNÉTIQUE ADHÉSIVE 10X15 0.3MM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Adress')} style={styles.magnetWrap}>
            <Image style={styles.magnetImg} source={require('../assets/img/magnet2.png')}/>
            <Text style={styles.magnetDesc}>FEUILLE MAGNÉTIQUE ADHÉSIVE 15X20 0.3MM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Adress')} style={styles.magnetWrap}>
            <Image style={styles.magnetImg} source={require('../assets/img/magnet3.png')}/>
            <Text style={styles.magnetDesc}>FEUILLE MAGNÉTIQUE ADHÉSIVE 20X30 0.3MM</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.Footer}>
                <View style={styles.footer_icons_wrap}>
                    <TouchableOpacity onPress={() => navigate('Home')}>
                        <IconAntDesign style={styles.footer_icons} name="home"/> 
                        <Text style={{color :"#b7b7b7"}}>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.FooterBar}></View>
        </View>

        
    );
}
const styles = StyleSheet.create(style);