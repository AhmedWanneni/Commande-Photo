import React , {useEffect, useState ,useRef} from 'react'
import {Modal,TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {Camera} from 'expo-camera';
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function TakePhoto({navigation : {goBack,navigate}}) {
    const camRef = useRef(null);
    const [type,setType] = useState(Camera.Constants.Type.back);
    const [hasPermission,setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);
    const [flash,setFlash] = useState(Camera.Constants.FlashMode.off);



    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    } , []);

    if(hasPermission === null){
        return <View/>;
    }
    if(hasPermission === false){
        return <Text>Can't access</Text>
    }

    async function takePicture(){
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri);
            setOpen(true);
            console.log(data);
        }
    }

    return (
        <View style={{flex:1}}>
            <Camera 
                style={styles.CameraContainer}
                type = {type}
                ref = {camRef}
            >
                <View style={{flex:1,backgroundColor:'transparent',flexDirection:'row'}}></View>
            </Camera>
                

                <View style={styles.TakeFooter}>
                <TouchableOpacity style={styles.footer_icons_flash_wrap} onPress={() => {
                        setFlash(
                            flash === Camera.Constants.FlashMode.off
                            ? Camera.Constants.FlashMode.on
                            : Camera.Constants.FlashMode.off
                        )
                        }}>
                    <FontAwesome5 style={styles.footer_icons_flash} name="bolt"/> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.take_photo_wrap} onPress={takePicture}>
                    <FontAwesome5 style={styles.footer_icons_take} name="camera"/> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.flip_photo_wrap} onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        )
                        }}>
                    <FontAwesome5 style={styles.footer_flip_icons} name="redo"/> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.save_photo_wrap} onPress={takePicture}>
                    <IconAntDesign style={styles.footer_icons_save} name="camera"/>
                    
                </TouchableOpacity>
                <Text style={{fontWeight:"bold",marginLeft:-100,marginTop:85}}>Add Your photos</Text>

                <View style={styles.FooterBarTake}></View>
                
                </View>
                {capturedPhoto && 
                <Modal 
                    animationType = 'slide'
                    transparant={false}
                    visible ={open}

                >
                    <View style={{flex:1 , justifyContent:'center' , alignItems: 'center' , margin:20}}>
                    <Button title="Back" onPress={()=>{setOpen(false);navigate('AgrandiTakePhoto',capturedPhoto);}} />
                        <Image 
                            style={{top:0,height:400,width:"100%",margin : 10}}
                            source={{uri : capturedPhoto}}/>
                    </View>
                </Modal> 
                }

                
           
        </View>
    )
}

const styles = StyleSheet.create(style);