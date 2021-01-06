import React ,{ useState } from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RNPhotoManipulator from 'react-native-photo-manipulator';

export default function Crop({navigation : {goBack,navigate}}) {

     const image = "https://unsplash.com/photos/qw6qQQyYQpo/download?force=true";
     const cropRegion = { x: 5, y: 30, size: 400, width: 250 };
     const targetSize = { size: 200, width: 150 };
     let doIt = () => {
     PhotoManipulator.crop(image, cropRegion, targetSize).then(path => 
          console.log(`Result image path: ${path}`)
     );
     }


    return (
        <View style={styles.container}>
        <Image source={require('../assets/img/Banner.png')} style={styles.backgroundImage} />
        <View style={styles.crop_wrap}>
                <View style={styles.top_line}></View>
                

                

                <View style={styles.field_crop}>
                     <Text style={styles.crop_item_title}>AGRANDISSEMENT 50X60</Text>
                     <Text onPress={doIt} style={styles.crop_item_btn}>Appliquer</Text>
                </View>

                <View style={styles.field_crop}>
                     <Text style={styles.crop_item_title}>AGRANDISSEMENT 50X70</Text>
                     <Text style={styles.crop_item_btn}>Appliquer</Text>
                </View>

                <View style={styles.field_crop}>
                     <Text style={styles.crop_item_title}>AGRANDISSEMENT 50X75</Text>
                     <Text style={styles.crop_item_btn}>Appliquer</Text>
                </View>
                <View style={styles.field_crop}>
                     <Text style={styles.crop_item_title}>AGRANDISSEMENT 60X80</Text>
                     <Text style={styles.crop_item_btn}>Appliquer</Text>
                </View>

                <View style={styles.field_crop}>
                     <Text style={styles.crop_item_title}>AGRANDISSEMENT 60X90</Text>
                     <Text style={styles.crop_item_btn}>Appliquer</Text>
                </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create(style);
