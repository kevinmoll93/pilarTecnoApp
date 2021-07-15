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


export default class Profile extends React.Component {

  _onProfilePress = () => {
    Alert.alert(
      'Hola',
      'Ya te encuentras en Profile',
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
          source={require('../assets/images/fondo3.jpg')}
        >
          <Text>Profile</Text>
        </ImageBackground>
    </SafeAreaView>

    );}
}
