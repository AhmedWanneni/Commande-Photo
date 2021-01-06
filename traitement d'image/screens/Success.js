import React ,{ useState } from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {style} from './style';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Success({navigation : {goBack,navigate}}) {
    return (
        <View style={styles.SuccessContainer}>
            <View style={styles.success_image_wrap}>
                <Image style={styles.success_image} source={require('../assets/img/bags.png')}/>
            </View>
            <View style={{width:wp("88%"),alignSelf:"center"}}>
            <Text style={styles.success_title}>Success!</Text>
            <Text style={styles.success_desc}>Votre commande sera bientôt livrée. Merci d'avoir choisi notre application!</Text>
            </View>
            
            <View style={styles.success_btn}>
                <Text style={{color:"#fff",fontFamily:'Metropolis'}} onPress={() => navigate('Categorie')}> CONTINUER VOS ACHATS </Text>
            </View>
            <View style={styles.FooterBar}></View>
        </View>
    )
}
const styles = StyleSheet.create(style);
