import React ,{ useState, useEffect } from 'react'
import {Platform,TouchableHighlight, StyleSheet, Text, View, TextInput, Image,Button, TouchableOpacity } from 'react-native'
import {style} from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';




export default function DownloadPhoto({navigation : {goBack,navigate}}) {
    const [image, setImage] = useState(null);

   useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
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
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="" onPress={pickImage} />
      {image && 
      <Modal>
      <Button title="Save" onPress={navigate('Agrandi',{ImageSaved : image})} />
      <Image source={{ uri: image }} style={{ width: 10, height: 10 }} />
      
      </Modal>
      }
      

    </View>
    )
}
const styles = StyleSheet.create(style);