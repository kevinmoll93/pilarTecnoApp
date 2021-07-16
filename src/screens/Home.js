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
import { ProfileStackScreen } from '../routs/ProfileStack';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  _onHomePress = () => {
    Alert.alert(
      'Hola',
      'Ya te encuentras en Home',
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
        <View style={{flexDirection:'column', height, justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity
              onPress={()=>this._onHomePress()}
              style={[styles.button, { backgroundColor:'rgba(127, 179, 213, 0.5)' }]}
            >
              <Text style={styles.text}>
                Principal
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}
              style={[styles.button, { backgroundColor:'rgba(238, 0, 238, 0.5)' }]}>

                  <Text style={styles.text}>
                    Perfil
                  </Text>

            </TouchableOpacity>

          </View>

          <View style={{flexDirection:'row' }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Posts')}
              style={[styles.button, { backgroundColor:'rgba(236, 112, 99, 0.5)' }]}>
              <Text style={styles.text}>
                Posteos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Map')}
              style={[styles.button, { backgroundColor:'rgba(142, 68, 173, 0.5)' }]}>
              <Text style={styles.text}>
                Mapa
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>
    );}
}

const styles = StyleSheet.create({
  text: {
    fontSize:30,
    fontWeight:'bold',
    color:'#880E4F',
    textAlign:'center',
  },
  button: {
    margin: width / 20,
    height:width / 2.5,
    width:width / 2.5,
    borderRadius:35,
    justifyContent:'center',
    backgroundColor:'#fff',
    zIndex:1,
  },
});
