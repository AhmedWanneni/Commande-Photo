import React ,{ useState } from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RNPhotoManipulator from 'react-native-photo-manipulator';

export default function AgrandiPhoto({ route, navigation }) {
     const image = route.params;
    


    return (
        <View style={{flex:1,backgroundColor:"#000"}}>
             <View style={styles.agrandi_photo_wrap_img}>
     {image ? <Image style={styles.agrandiPhoto} source={{ uri: image }}/> 
            :<Image style={styles.agrandiPhoto} source={require('../assets/img/man.png')}/>  }
       </View>
        <View style={styles.crop_wrap}>
                <View style={styles.top_line}></View>
                

                

                <View style={styles.field_crop}>
                     <Text style={styles.crop_item_title}>AGRANDISSEMENT 50X60</Text>
                     <Text onPress={() => navigation.navigate('PrixAgrandi')} style={styles.crop_item_btn}>Appliquer</Text>
                </View>

                <View style={styles.field_crop}>
                     <Text style={styles.crop_item_title}>AGRANDISSEMENT 50X70</Text>
                     <Text onPress={() => navigation.navigate('PrixAgrandi')} style={styles.crop_item_btn}>Appliquer</Text>
                </View>

                <View style={styles.field_crop}>
                     <Text style={styles.crop_item_title}>AGRANDISSEMENT 50X75</Text>
                     <Text onPress={() => navigation.navigate('PrixAgrandi')} style={styles.crop_item_btn}>Appliquer</Text>
                </View>
                <View style={styles.field_crop}>
                     <Text style={styles.crop_item_title}>AGRANDISSEMENT 60X80</Text>
                     <Text onPress={() => navigation.navigate('PrixAgrandi')} style={styles.crop_item_btn}>Appliquer</Text>
                </View>

                <View style={styles.field_crop}>
                     <Text style={styles.crop_item_title}>AGRANDISSEMENT 60X90</Text>
                     <Text onPress={() => navigation.navigate('PrixAgrandi')} style={styles.crop_item_btn}>Appliquer</Text>
                </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create(style);
