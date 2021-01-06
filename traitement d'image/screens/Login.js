import React ,{ useState } from 'react'

import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {style} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Login({navigation : {goBack,navigate,reset}}) {
  
  const [NotEmpty,setNotEmpty] = useState(false);
  const [EmailShow, setEmailShow] = useState(false);
  const [PasswordShow, setPasswordShow] = useState(false);
  const[Email,setEmail] = useState("");
  const[Password,setPassword] = useState("");
  
  const[PasswordChecked,setPasswordChecked]= useState(false);
  const[EmailChecked,setEmailChecked]= useState(false);
  const[ErrorMsg,setErrorMsg] = useState(false);


  const[DataMsg,setDataMsg] = useState(false);





    
    return (
        <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity style={{top:hp("7%"),left:wp("3.6%"),width:wp("8%"),height:hp("8%")}} activeOpacity = { .5 } onPress={() => goBack()}>
        <FontAwesome5 name="chevron-left" style={styles.back_top}></FontAwesome5>
        </TouchableOpacity >

        <View style={styles.top_title_wrap}>
          <Text style={styles.top_title}>S'IDENTIFIER</Text>
        </View>
        
       
      </View>
      <View style={styles.form}>
        <TouchableHighlight style={styles.field_w}>
          <View>
          {EmailShow ? (<Text style={styles.label}>Votre adresse éléctronique</Text>) : null}
          <TextInput onChange={(text) => {
            if (text.nativeEvent.text.length > 0 )
                       {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        setEmailChecked(re.test(text.nativeEvent.text));
                        if (EmailChecked)
                        {
                          setEmail(text.nativeEvent.text);
                        }
                       } else {
                        setNotEmpty(false);
                        setEmailChecked(false);
                       }
          }}
                     placeholder="Adresse éléctronique" autoCompleteType="email" textContentType="emailAddress" style={styles.field} 
                     onEndEditing = {(text) => {
                       if (text.nativeEvent.text.length > 0 )
                       {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        setEmailChecked(re.test(text.nativeEvent.text));
                        if (EmailChecked)
                        {
                          setEmail(text.nativeEvent.text);
                        }
                       } else {
                        setNotEmpty(false);
                        setEmailChecked(false);
                       }
                     }} />
          {EmailChecked ? <FontAwesome5 style={styles.email_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.email_icon_error} name="times"/>
          }
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPressIn = {()=> setPasswordShow(!PasswordShow)} style={styles.field_w}>
          <View>
          <TextInput secureTextEntry={true}  onChange={(text) => {
            setPassword(text);
            if (text.nativeEvent.text.length >= 8 )
            {
            setPassword(text.nativeEvent.text);
             setPasswordChecked(true);
            } else {
              setPasswordChecked(false);
            }
          }
          } placeholder="Mot de passe" 
          style={styles.field}
          autoCompleteType="password"
          onEndEditing = {(text) => {
            if (text.nativeEvent.text.length > 8 )
            {
             setPasswordChecked(true);
             setPassword(text.nativeEvent.text);
            } else {
              setPasswordChecked(false);
            }
          }}
          />
          {PasswordChecked ? <FontAwesome5 style={styles.email_icon_checked} name="check"/>
                   :  <FontAwesome5 style={styles.email_icon_error} name="times"/>
          }
          </View>
        </TouchableHighlight>
       
        
  
        <View style={styles.have_account}>
          <Text onPress={() => navigate('ForgetPassword')} >
            Mot de passe oublié ?
          <FontAwesome5 style={styles.have_account_icon} name="arrow-right"/>
          </Text>
        </View>
        <View style={styles.sign_up}>
          <Text onPress={() => {
            if (EmailChecked & PasswordChecked)
            {
              reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
              
              fetch(`http://localhost:4200/${Email}/${Password}`)
              .then((response) => response.json())
              .then((json) => {
                if (json.client_id)
                {
                  routes: [{ name: 'Home' }];
                } else if (json.status === "404")
                {
                  alert("Adresse ou mot de passe  incorrecte");
                }
                
              })
              .catch((error) => alert("Vérifier votre connexion internet"))

              
            } else {
              alert("Vérifier votre connexion internet");
            }
          }} style={{color :"#fff" , marginTop:hp("2%")}}>S'IDENTIFIER</Text>
        </View>
      </View>
      <View style={styles.c_social}>
        <Text>Ou connectez-vous avec un compte social</Text>
        <View style={styles.social_images_wrap}>
          <View style={styles.googleWrap}>
          <Image style={styles.social_images} source={require('../assets/img/google.png')}/>
          </View>
          <View style={styles.facebookWrap}>
        <Image style={styles.social_images} source={require('../assets/img/facebook.png')}/></View>
        </View>
      </View>
      <View style={styles.FooterBar}></View>
    </View>
    )
}

const styles = StyleSheet.create(style);
