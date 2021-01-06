import { View } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { DynamicCollage, StaticCollage } from 'react-native-images-collage';


export default function Collage({navigation : {goBack,navigate}}) {
  let photos = [require('../assets/img/man.png'),require('../assets/img/man.png'),require('../assets/img/man.png')]; 
  return(
    <View>
  <DynamicCollage
    width={500}
    height={600}
    images={ photos }
    matrix={ [ 1, 1, 1 ] } />
    </View>
    );
}
