import React ,{ useState } from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Categorie({navigation : {goBack,navigate}}) {
    return (
        <View style={styles.container}>
            <View style={style.cat_wrap}>
            <TouchableHighlight style={styles.cat} onPress= {() => navigate('TakePhoto')}>
                <View style={styles.cat_wrap}>
                    <View style={styles.cat_title_wrap}>
                        <Text style={styles.cat_title}>Filtre Photo</Text>
                    </View>
                    <View style={styles.cat_image_wrap}> 
                        <Image style={styles.cat_image} source={require('../assets/img/image1.png')}/>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.cat} onPress= {() => navigate('TakePhoto')}>
                <View style={styles.cat_wrap}>
                    <View style={styles.cat_title_wrap}>
                        <Text style={styles.cat_title}>resize Photo</Text>
                    </View>
                    <View style={styles.cat_image_wrap}> 
                        <Image style={styles.cat_image} source={require('../assets/img/crop.png')}/>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.cat} onPress= {() => navigate('TakePhoto')}>
                <View style={styles.cat_wrap}>
                    <View style={styles.cat_title_wrap}>
                        <Text style={styles.cat_title}>Stickers Photo</Text>
                    </View>
                    <View style={styles.cat_image_wrap}> 
                        <Image style={styles.cat_image} source={require('../assets/img/stickers.png')}/>
                    </View>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.cat} onPress= {() => navigate('TakePhoto')}>
                <View style={styles.cat_wrap}>
                    <View style={styles.cat_title_wrap}>
                        <Text style={styles.cat_title}>Albums</Text>
                    </View>
                    <View style={styles.cat_image_wrap}> 
                        <Image style={styles.cat_image} source={require('../assets/img/albums.png')}/>
                    </View>
                </View>
            </TouchableHighlight>
            </View>
            
            <View style={styles.Footer}>
                <View style={styles.footer_icons_wrap}>
                <TouchableOpacity onPress={() => navigate('Home')}>
                    <IconAntDesign style={styles.footer_icons} name="home"/> 
                    <Text style={{color :"#b7b7b7"}}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer_icons_wrap}>
                <TouchableOpacity>
                    <FontAwesome5 style={styles.footer_icons_shop} name="shopping-cart"/> 
                    <Text style={{color :"#b7b7b7"}} onPress={() => navigate('Categorie')}>Shop</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.FooterBar_cat}></View>

        </View>
        
    );
}

const styles = StyleSheet.create(style);