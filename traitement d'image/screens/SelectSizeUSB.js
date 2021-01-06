import React ,{useState ,useEffect} from 'react'
import {Platform,TouchableHighlight, StyleSheet, Text, View, TextInput, Image,TouchableOpacity ,Picker} from 'react-native'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
export default function SelectSizeUSB({navigation : {goBack,navigate}}) {
    const [selectedValue, setSelectedValue] = useState("Quantité");
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
        <TouchableOpacity style={styles.Magnet_top_img}> 
        <Image style={{width:"100%"}}  source={require('../assets/img/coffert-usb-cover.png')}/>
        </TouchableOpacity>
        <View style={{marginBottom:"-13%"}}>
        <View style={{height:hp("18%"),width:wp("100%"),flexDirection:"row"}}>
        <Image style={{width : wp("26%"),height:hp("8.8%"),margin:hp("2.3"),marginTop:hp("5%")}}  source={require('../assets/img/usb_photo1.png')}/>
        <Image style={{width : wp("30%"),height:hp("14%"),margin:hp("2.2%")}}  source={require('../assets/img/usb_photo2.png')}/>
        </View>
        <View style={{height : hp("7%"),width:wp("100%"),flexDirection:"row"}}>
            <Text style={styles.gravure_btn}>Gravure laser sur clé </Text>
            <TouchableOpacity style={styles.wrap_picker_usb}>
        <Picker
            style={styles.SelectFromList}
            selectedValue = {selectedValue}
            onValueChange = {(itemValue , ItemIndex) =>  setSelectedValue(itemValue)}
        >
            <Picker.Item label="Quantité" value="Quantite" />
            <Picker.Item label="Quantité" value="Quantite" />
        </Picker>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:"center",alignSelf:"center",width:wp("100%"),flexDirection:"row"}}>
        {image ? <Image  style={{width:wp("40%"),height : hp("20%"),margin:hp("2%")}} source={{ uri: image }} /> : <Image style={{width:wp("40%"),height : hp("20%"),margin:hp("2%")}}  source={require('../assets/img/man.png')}/>}
        <TouchableOpacity style={styles.save_sizeUSB_wrap} onPress={pickImage}>
            <IconAntDesign style={styles.footer_icons_save} name="camera"/>
            <Text style={{marginTop: hp("2%"),fontWeight:"bold",width:wp("30%")}}>Add Your photos</Text>
        </TouchableOpacity>
        
        </View>
        <View style={styles.PrixUSBWrap}>
            <Text style={style.prix_label}>prix : </Text>
            <View style={styles.prix}></View>
        </View>
        <View style={styles.Ajoute_carte_btn}>
          <Text onPress={() => navigate('Adress')} style={{color :"#fff" , marginTop:13}}>AJOUTER UNE CARTE</Text>
        </View>
        </View>
        <View style={styles.Footer}>
                <TouchableOpacity style={styles.footer_icons_wrap} onPress={() => navigate('Home')}>
                    <IconAntDesign style={styles.footer_icons} name="home"/> 
                    <Text style={{color :"#b7b7b7"}}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.FooterBar}></View>
    </View>
        
);

}

const styles = StyleSheet.create(style);