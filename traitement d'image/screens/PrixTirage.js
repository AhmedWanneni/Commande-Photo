import React ,{useState} from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity , Picker } from 'react-native'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function PrixTirage({navigation : {goBack,navigate}}) {
    const [selectedValue, setSelectedValue] = useState("Papier");
    return (
    <View style={styles.container}>
        <View style={styles.CoverImageWrap}>
        <Image style={{width:"100%"}} source={require('../assets/img/PrixAgrandi.png')}/>
        </View>
        <View style={styles.PrixContent}>
        <TouchableOpacity style={styles.wrap_picker}>
        <Picker
            style={styles.SelectFromList}
            selectedValue = {selectedValue}
            onValueChange = {(itemValue , ItemIndex) =>  setSelectedValue(itemValue)}
        >
            <Picker.Item label="papier" value="papier" />
            <Picker.Item label="papier" value="papier" />
        </Picker>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrap_picker}>
        <Picker
            style={styles.SelectFromList}
            selectedValue = {selectedValue}
            onValueChange = {(itemValue , ItemIndex) =>  setSelectedValue(itemValue)}
        >
            <Picker.Item label="Quantité" value="Quantite" />
            <Picker.Item label="Quantité" value="Quantite" />
        </Picker>
        </TouchableOpacity>
        <View style={styles.PrixWrap}>
            <Text style={style.prix_label}>prix : </Text>
            <View style={styles.prix}></View>
        </View>
            <View styles={styles.sign_up}>
            <Text style={{color :"#fff" , marginTop:hp("2%")}} onPress={()=>navigate('Adress')}>CONTINUER</Text>
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