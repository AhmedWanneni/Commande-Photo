import React ,{useState} from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity , TextInput } from 'react-native'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Adress({navigation : {goBack,navigate}}) {
    const[NameChecked,setNameChecked]= useState(false);
    const[LastChecked,setLastChecked]= useState(false);
    const[EmailChecked,setEmailChecked]= useState(false);
    const[PhoneChecked,setPhoneChecked]= useState(false);
    const[AddressChecked,setAddressChecked]= useState(false);
    const[ErrorMsg,setErrorMsg] = useState(false);
    return(
    <View style={styles.container}>
        <View style={{marginBottom : hp("33%"),marginTop : hp("0%")}}>
          <View style={styles.form}>
          <View style={styles.adress_field_wrap}>
        <TextInput placeholder="Nom" style={styles.Adressfield} 
        autoCompleteType="name" 
        textContentType="name"
        onChange={(text) => {
            if (text.nativeEvent.text.length > 0 )
                       {
                        setNameChecked(true);
                       } else {
                        setNameChecked(false);
                       }
          }} 
          onEndEditing = {(e) => {
            if (e.nativeEvent.text.length > 0 )
                       {
                        setNameChecked(true);
                       } else {
                        setNameChecked(false);
                       }
          }}
        
        />
        {NameChecked ? <FontAwesome5 style={styles.adress_name_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.adress_name_icon_error} name="times"/>}
        </View>
        <View style={styles.adress_field_wrap}>
        <TextInput placeholder="Prénom" style={styles.Adressfield}
        autoCompleteType="name" 
        textContentType="name"
        onChange={(text) => {
            if (text.nativeEvent.text.length > 0 )
                       {
                        setLastChecked(true);
                       } else {
                        setLastChecked(false);
                       }
          }} 
          onEndEditing = {(text) => {
            if (text.nativeEvent.text.length > 0 )
                       {
                        setLastChecked(true);
                       } else {
                        setLastChecked(false);
                       }
          }}
          /> 
          {LastChecked ? <FontAwesome5 style={styles.adress_name_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.adress_name_icon_error} name="times"/>}
          </View>
          <View style={styles.adress_field_wrap}>
        <TextInput placeholder="Adresse de livraison" style={styles.Adressfield}
        autoCompleteType="street-address" 
        textContentType="fullStreetAddress"
        onChange={(text) => {
            if (text.nativeEvent.text.length > 0 )
                       {
                        setAddressChecked(true);
                       } else {
                        setAddressChecked(false);
                       }
          }} 
          onEndEditing = {(text) => {
            if (text.nativeEvent.text.length > 0 )
                       {
                        setAddressChecked(true);
                       } else {
                        setAddressChecked(false);
                       }
          }}
        /> 
        {AddressChecked ? <FontAwesome5 style={styles.adress_name_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.adress_name_icon_error} name="times"/>}
        </View>
        <View style={styles.adress_field_wrap}>
        <TextInput placeholder="Numéro de téléphone" style={styles.Adressfield}
        autoCompleteType="tel"
        autoCorrect={false} 
        textContentType="telephoneNumber"
        keyboardType = "numeric"
        onChange={(text) => {
            if (text.nativeEvent.text.length > 0 )
                       {
                        var re =  /([0-9]{8})/gm;
                        setPhoneChecked(re.test(text.nativeEvent.text));
                       } else {
                        setPhoneChecked(false);
                       }
          }} 
          onEndEditing = {(text) => {
            if (text.nativeEvent.text.length > 0 )
                       {
                        var re =  /([0-9]{8})/gm;
                        setPhoneChecked(re.test(text.nativeEvent.text));
                       } else {
                        setPhoneChecked(false);
                       }
          }}
        /> 
        {PhoneChecked ? <FontAwesome5 style={styles.adress_name_icon_checked} name="check"/>
                      : <FontAwesome5 style={styles.adress_name_icon_error} name="times"/>}
                      </View>
          <View style={styles.adress_field_wrap}>
        <TextInput placeholder="Email" style={styles.Adressfield}
            autoCompleteType="email"
            textContentType="emailAddress"
            onChange={(text) => {
                if (text.nativeEvent.text.length > 0 )
                {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    setEmailChecked(re.test(text.nativeEvent.text));
                   } else {
                    setEmailChecked(false);
                   }
              }} 
              onEndEditing = {(text) => {
                if (text.nativeEvent.text.length > 0 )
                {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    setEmailChecked(re.test(text.nativeEvent.text));
                   } else {
                    setEmailChecked(false);
                   }
              }}
        
        />
        {EmailChecked ? <FontAwesome5 style={styles.adress_name_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.adress_name_icon_error} name="times"/>}</View>
        </View>
        {/*(ErrorMsg) ? <Text style={styles.ErrorMessage}>Veuillez remplir le formulaire</Text>:null*/}
        {/*(ErrorMsg) ? alert('Veuillez remplir le formulaire'):null*/}
        <View style={styles.sign_up}>
        <Text style={{color: "#fff",paddingTop:hp("2%")}} onPress={()=>{
            if (NameChecked &  LastChecked &  EmailChecked & PhoneChecked & AddressChecked)
            {
                navigate('Payer')
            } else {
              alert('veuillez remplir les champs correctement');
            }
            
            }}>SUIVANT</Text>
            </View></View>
        <View style={styles.Footer}>
                <View style={styles.footer_icons_wrap}>
                <TouchableOpacity onPress={() => navigate('Home')}>
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