import React ,{ useState } from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {style} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ForgetPassword({navigation : {goBack,navigate}}) {

    
    const [EmailShow, setEmailShow] = useState(false);
    const[EmailChecked,setEmailChecked]= useState(false);
    const[ErrorMsg,setErrorMsg] = useState(false);
    
    return (
        <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity style={{top:hp("7%"),left:wp("3.6%"),width:wp("8%"),height:hp("8%")}} activeOpacity = { .5 } onPress={() => goBack()}>
        <FontAwesome5 name="chevron-left" style={styles.back_top}></FontAwesome5>
        </TouchableOpacity >

        <View style={styles.top_title_wrap}>
          <Text style={styles.top_title_forget_pass}>MOT DE PASSE OUBLIE</Text>
        </View>
        
       
      </View>
      <View style={styles.form}>
          <View style={styles.forget_txt_wrap}>
          <Text style={styles.forget_txt}>
              Veuillez saisir votre adresse e-mail.
              Vous recevrez un lien pour créer un nouveau mot de passe par e-mail.
          </Text>
          </View>
        <TouchableHighlight style={styles.field_w}>
          <View>
          {EmailShow ? (<Text style={styles.label}>Email</Text>) : null}
          
          <TextInput 
          autoCompleteType="email" textContentType="emailAddress"
                     
                      placeholder="Email" style={styles.field}
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
        
        <View style={styles.sign_up}>
          <Text style={{color :"#fff" , marginTop:hp("1.5%")}}>ENVOYER</Text>
        </View>
      </View>
      <View style={styles.FooterBar}></View>
    </View>
    )
}

const styles = StyleSheet.create(style);
