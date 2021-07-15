/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles*/
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React,{ Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


export default class Posts extends React.Component {

  _onPostPress = () => {
    Alert.alert(
      'Hola',
      'Ya te encuentras en Post',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]
    );
  }


  render(){
    return (
      <SafeAreaView style={{flex:1}}>
        <ImageBackground
            style={{height}}
            source={require('../assets/images/fondo2.jpg')}
        >
         <Text>PostEdit</Text>
        </ImageBackground>
    </SafeAreaView>

    );}
}
