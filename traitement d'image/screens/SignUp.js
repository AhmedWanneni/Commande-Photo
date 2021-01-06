import React ,{useState}from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image ,TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {style} from './style';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function SignUp({navigation : {navigate}}) {

    const [NameShow, setNameShow] = useState(false);
    const [EmailShow, setEmailShow] = useState(false);
    const [PasswordShow, setPasswordShow] = useState(false);
    const[EmailChecked,setEmailChecked]= useState(false);
    const[PasswordChecked,setPasswordChecked]= useState(false);
    const[NameChecked,setNameChecked]= useState(false);
    const[ErrorMsg,setErrorMsg] = useState(false);
    
    return (
        <View style={styles.container}>
            <View style={styles.top}>
              <TouchableOpacity style={{top:hp("7%"),left:wp("3.6%"),width:wp("8%"),height:hp("8%")}} activeOpacity = { .5 } onPress={() => goBack()}>
              <FontAwesome5 name="chevron-left" style={styles.back_top}></FontAwesome5>
              </TouchableOpacity>
          <View style={styles.top_title_wrap}>
            <Text style={styles.top_title_sign_up}>S'INSCRIRE</Text>
          </View>
          
      </View>
      <View style={styles.form}>
        <TouchableHighlight style={styles.field_w}>
          <View>
          {NameShow ? (<Text style={styles.label}>Votre nom</Text>) : null}
          <TextInput 
           onBlur = {() => setNameShow(!NameShow)}
           placeholder="Votre nom" style={styles.field}  autoCompleteType="name" textContentType="givenName" 
           onChange={(text) => {
            if (text.nativeEvent.text.length > 8 )
            {
              setNameChecked(true);
            } else {
              setNameChecked(false);
            }
          }}
          onEndEditing = {(e) => {
            if (e.nativeEvent.text.length > 8 )
            {
              setNameChecked(true);
            } else {
              setNameChecked(false);
            }
          }}
          />
          {NameChecked ? <FontAwesome5 style={styles.email_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.email_icon_error} name="times"/>
          }
          </View>
          
        </TouchableHighlight>
        <TouchableHighlight onPressIn = {()=> setEmailShow(!EmailShow)} style={styles.field_w}>
          <View>
          {EmailShow ? (<Text style={styles.label}>Email</Text>) : null}
          <TextInput placeholder="Email" style={styles.field} 
          
          onChange={(text) => {
            if (text.nativeEvent.text.length > 0 )
                       {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        setEmailChecked(re.test(text.nativeEvent.text));
                       } else {
                        setEmailChecked(false);
                       }
          }} 
          onEndEditing = {(e) => {
            if (e.nativeEvent.text.length > 0 )
            {
             var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             setEmailChecked(re.test(e.nativeEvent.text));
            } else {
             setEmailChecked(false);
            }
          }}
          />
          {EmailChecked ? <FontAwesome5 style={styles.email_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.email_icon_error} name="times"/>
          }
          </View>
          
        </TouchableHighlight>

        <TouchableHighlight onPressIn = {()=> setPasswordShow(!PasswordShow)} style={styles.field_w}>
          <View>
          {PasswordShow ? (<Text style={styles.label}>Password</Text>) : null}
          <TextInput secureTextEntry={true} placeholder="Password" 
          style={styles.field} 
          autoCompleteType="password"
          onChange={(text) => {
            if (text.nativeEvent.text.length >= 8 )
            {
             setPasswordChecked(true);
            } else {
              setPasswordChecked(false);
            }
          }}
          onEndEditing = {(e) => {
            if (e.nativeEvent.text.length > 8 )
            {
             setPasswordChecked(true);
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
        
        {/*(ErrorMsg) ? alert("s'il vous plaît remplir tous les champs !"):null*/}
          
        
        <View style={styles.have_account}>
          
        <Text onPress={() => navigate('Login')}>
          Vous avez déjà un compte? 
          <FontAwesome5 style={styles.have_account_icon} name="arrow-right"/>
        </Text>
        </View>
        <View style={styles.sign_up}>
          <Text  onPress={() => {
            if (EmailChecked & PasswordChecked & NameChecked)
            {
              setErrorMsg(false);
              navigate('Home')
            } else {
              setErrorMsg(true);
            }
          }} style={{color :"#fff" , marginTop:wp("3.4%")}}>S'INSCRIRE</Text>
        </View>
      </View>
      <View style={styles.c_social}>
        <Text>Or sign up with social account</Text>
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
