import React ,{useState ,useEffect}from 'react'
import {Platform,TouchableHighlight, StyleSheet, Text, View, TextInput, Image,TouchableOpacity } from 'react-native'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
export default function Magnet({navigation : {goBack,navigate}}) {
    const [image, setImage] = useState(null);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Désolé, nous avons besoin des autorisations de pellicule pour que cela fonctionne!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };



return(
    <View style={styles.container}>
      <View style={styles.UploadSizeWrap}>
        {image ?  <Image style={styles.SizeSmall} source={{ uri: image }}/> : <Image style={styles.SizeSmall} source={require('../assets/img/man.png')}/>}
        {image ?  <Image style={styles.SizeMedium} source={{ uri: image }}/> : <Image style={styles.SizeMedium} source={require('../assets/img/man.png')}/>}
        {image ? <Image style={styles.SizeLarge} source={{ uri: image }}/> : <Image style={styles.SizeLarge} source={require('../assets/img/man.png')}/>}
        <TouchableOpacity style={styles.save_size_wrap} onPress={pickImage}>
            <IconAntDesign style={styles.footer_icons_save} name="camera"/>
            <Text style={{fontWeight:"bold",width:wp("35%"),marginTop:hp("1.5%")}}>Add Your photos</Text>

        </TouchableOpacity>
        
        <View style={styles.PrixSizeWrap}>
            <Text style={style.prix_label}>prix : </Text>
            <View style={styles.prix}></View>
        </View>
        <View style={styles.SelectSize_btn_wrap}>
        <Text style={styles.SelectSize_btn} onPress={()=>navigate('Adress')}>APPLIQUER</Text>
        </View>
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