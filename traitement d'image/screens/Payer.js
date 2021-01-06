import React ,{ useState } from 'react'
import {TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {style} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export default function Payer({navigation : {goBack,navigate}}) {

    const [NameShow, setNameShow] = useState(false);
    const [CCNchecked, setCCNchecked] = useState(false);
    const[NameChecked,setNameChecked]= useState(false);
    const[ExpChecked,setExpChecked]= useState(false);
    const[CcvChecked,setCcvChecked]= useState(false);
    const[ErrorMsg,setErrorMsg] = useState(false);

    return (
        <View style={styles.PayerContainer}>
            <Text style={styles.PayerTitle}>Vos carte de paiement </Text>
            <Image style={styles.payer_rectangle} source={require('../assets/img/rectangle.png')}/>
            <Image style={styles.payer_chip} source={require('../assets/img/chip.png')}/>
            <View style={styles.add_cart_wrap}>
                <View style={styles.top_line}></View>
                <Text style={styles.add_cart_title}>Ajouter une carte</Text>

                <View style={styles.form}>
                <TouchableHighlight onPressIn = {()=> setNameShow(!NameShow)} style={styles.field_w}>
                     <View>
                        {/*NameShow ? (<Text style={styles.label}>Nom de la carte</Text>) : null*/}
                        <TextInput placeholder="Nom de la carte" 
                        style={styles.field}
                        autoCompleteType="name" 
                        textContentType="givenName"
                        onChange={(text) => {
                            if (text.nativeEvent.text.length > 0 )
                                       {
                                        setNameChecked(true);
                                       } else {
                                        setNameChecked(false);
                                       }
                          }} 
                          onEndEditing = {(text) => {
                            if (text.nativeEvent.text.length > 0 )
                                       {
                                        setNameChecked(true);
                                       } else {
                                        setNameChecked(false);
                                       }
                          }}
                        />
                    {NameChecked ? <FontAwesome5 style={styles.email_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.email_icon_error} name="times"/>}
                    </View>
                </TouchableHighlight>

            

                <TouchableHighlight onPressIn = {()=> setNameShow(!NameShow)} style={styles.field_w}>
                     <View>
                        {/*NameShow ? (<Text style={styles.label}>Numero de la carte</Text>) : null*/}
                        <TextInput placeholder="Numero de la carte" 
                        style={styles.field}
                        autoCompleteType="cc-number" 
                        textContentType="creditCardNumber"
                        autoCorrect={false}
                        keyboardType = "numeric"
                        onChange={(text) => {
                            if (text.nativeEvent.text.length == 16 )
                                       {
                                        setCCNchecked(true);
                                       } else {
                                        setCCNchecked(false);
                                       }
                          }} 
                          onEndEditing = {(text) => {
                            if (text.nativeEvent.text.length == 16 )
                                       {
                                        setCCNchecked(true);
                                       } else {
                                        setCCNchecked(false);
                                       }
                          }}
                        />
                        <Image style={styles.mastercard_payer} source={require('../assets/img/mastercard.png')}/>
                    {/* CCNchecked ? <FontAwesome5 style={styles.email_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.email_icon_error} name="times"/>*/}
                    </View>
                </TouchableHighlight>
            
                <TouchableHighlight onPressIn = {()=> setNameShow(!NameShow)} style={styles.field_w}>
                     <View>
                        {/*NameShow ? (<Text style={styles.label}>Date d'expiration</Text>) : null*/}
                        <TextInput placeholder="Date d'expiration" 
                        style={styles.field}
                        autoCompleteType="cc-exp" 
                        onChange={(text) => {
                            if ((text.nativeEvent.text.length > 0)  & (text.nativeEvent.text.length == 5) )
                                {
                                    var re =  /([0-9]{2})\/([0-9]{2})/gm;
                                setExpChecked(re.test(text.nativeEvent.text));
                                } else {
                                setExpChecked(false);
                                }
                          }} 
                          onEndEditing = {(text) => {
                            if ((text.nativeEvent.text.length > 0)  & (text.nativeEvent.text.length == 5))
                                {
                                    var re =  /([0-9]{2})\/([0-9]{2})/gm;
                                    setExpChecked(re.test(text.nativeEvent.text));
                                } else {
                                setExpChecked(false);
                                }
                          }}
                        />
                        {ExpChecked ? <FontAwesome5 style={styles.email_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.email_icon_error} name="times"/>}
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPressIn = {()=> setNameShow(!NameShow)} style={styles.field_w}>
                     <View>
                        {/*NameShow ? (<Text style={styles.label}>CVV</Text>) : null*/}
                        <TextInput placeholder="CVV" 
                        style={styles.field}
                        autoCompleteType="cc-csc"
                        onChange={(text) => {
                            if ((text.nativeEvent.text.length > 0)  & (text.nativeEvent.text.length == 3) )
                                {
                                    var re =  /([0-9]{3})/gm;
                                    setCcvChecked(re.test(text.nativeEvent.text));
                                } else {
                                    setCcvChecked(false);
                                }
                          }} 
                          onEndEditing = {(text) => {
                            if ((text.nativeEvent.text.length > 0)  & (text.nativeEvent.text.length == 3))
                                {
                                    var re =  /([0-9]{3})/gm;
                                    setCcvChecked(re.test(text.nativeEvent.text));
                                } else {
                                    setCcvChecked(false);
                                }
                          }}

                        />
                        {CcvChecked ? <FontAwesome5 style={styles.email_icon_checked} name="check"/>
                        : <FontAwesome5 style={styles.email_icon_error} name="times"/>}
                    </View>
                </TouchableHighlight>
                
                <View style={styles.payer_btn}>
                    
          <Text onPress={() => {
              if (CcvChecked &  NameChecked & CCNchecked & ExpChecked)
              {
                navigate('Success')
              } else {
                alert('veuillez remplir les champs correctement');
              }
          }} style={{color :"#fff" , marginTop:13}}>CONFIRMER</Text>
                </View>
       

       </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create(style);