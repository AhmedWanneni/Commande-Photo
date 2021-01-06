import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';



export default function Collage({ route, navigation }) {
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Choisir une image" onPress={pickImage} />
      {image && 
      <Modal>
      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
  
      </Modal>
      }
    </View>
  );
}
