import React ,{useState ,useEffect}from 'react'
import {Platform,TouchableHighlight, StyleSheet, Text, View, TextInput, Image,TouchableOpacity, Button } from 'react-native'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';

export default function UploadPhotoTirage({navigation : {goBack,navigate}}) {
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
        <View style={styles.Container}>
            <TouchableOpacity style={styles.agrandi_photo_wrap} onPress={pickImage}>
                    <IconAntDesign style={styles.agrandi_icon} name="camera"/>
                    <Text style={{marginTop : hp("4%"),fontSize:15,fontWeight:"bold"}}>Ajouter Vos photos</Text>
                </TouchableOpacity>
                
                {image ? <Image style={{margin : wp("8.6%") , width :wp("90%"),height:hp("42.4%"),alignSelf:"center"}} source={{ uri: image }}/> :  <Image style={{margin : wp("8.6%")}} source={require('../assets/img/man.png')}/>  }
  
                <View style={styles.footer_agrandi_wrap}>
                  <TouchableOpacity onPress={() => navigate('PrixTirage',image)}>
                <Image style={{marginLeft : wp("90%"),marginTop:hp(3)}}source={require('../assets/img/flip.png')}/>
                  </TouchableOpacity>
                  </View>
                <View style={styles.FooterBarAgrandi}></View>
        </View>
    );
}
const styles = StyleSheet.create(style);