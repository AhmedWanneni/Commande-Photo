import React ,{useState}from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,TouchableOpacity } from 'react-native'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function TirageCarre({navigation : {goBack,navigate}}) {
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.TirageCarre_top_img}> 
        <Image style={{width:"100%"}}  source={require('../assets/img/PrixAgrandi.png')}/>
        
        </TouchableOpacity>
        <View style={styles.tirage_carre_wrap}>
        <Text onPress={() => navigate('UploadPhotoTirage')} style={styles.TriageCarreDi}>TIRAGES CARRES 10X10 cm</Text>
        <Text onPress={() => navigate('UploadPhotoTirage')} style={styles.TriageCarreDi}>TIRAGES CARRES 15X15 cm</Text>
        <Text onPress={() => navigate('UploadPhotoTirage')} style={styles.TriageCarreDi}>TIRAGES CARRES 20X20 cm</Text>
        <Text onPress={() => navigate('UploadPhotoTirage')} style={styles.TriageCarreDi}>TIRAGES CARRES 30X30 cm</Text>
        <Text onPress={() => navigate('UploadPhotoTirage')} style={styles.TriageCarreDi}>TIRAGES CARRES 60X60 cm</Text>
        </View>
        <View style={styles.Footer}>
                <View style={styles.footer_icons_wrap}>
                <TouchableOpacity onPress={()=>navigate('Home')}>
                <IconAntDesign style={styles.footer_icons} name="home"/> 
                    <Text style={{color :"#b7b7b7"}}>Home</Text>
                </TouchableOpacity>
                    
                </View>
                
            </View>
            <View style={styles.FooterBar_cat}></View>
        </View>

        
    );
}
const styles = StyleSheet.create(style);