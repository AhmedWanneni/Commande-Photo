import React ,{useState} from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity , Picker } from 'react-native'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';

export default function Agrandi({navigation : {goBack,navigate}}) {
    const [selectedValue, setSelectedValue] = useState("Papier");
    return (
    <View style={styles.container}>
        <Image style={{width:"100%"}} source={require('../assets/img/PrixAgrandi.png')}/>
        <TouchableOpacity style={styles.wrap_picker}>
        <Picker
            style={styles.SelectFromList}
            selectedValue = {selectedValue}
            onValueChange = {(itemValue , ItemIndex) =>  setSelectedValue(itemValue)}
        >
            <Picker.Item label="Papier" value="Papier" />
            <Picker.Item label="Papier" value="Papier" />
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
        <Text style={styles.prix_btn} onPress={()=>navigate('Adress')}>CONTINUER</Text>
        <View style={styles.Footer}>
                <View style={styles.footer_icons_wrap}>
                    <IconAntDesign style={styles.footer_icons} name="home"/> 
                    <Text style={{color :"#b7b7b7"}}>Home</Text>
                </View>
            </View>
            <View style={styles.FooterBar}></View>
    </View>
    );
}
const styles = StyleSheet.create(style);