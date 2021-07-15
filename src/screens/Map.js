/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles*/
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Map extends Component {
  _onMapPress = () => {
    Alert.alert('Hola', 'Ya te encuentras en Map', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          style={{ height }}
          source={require('../assets/images/fondo6.jpg')}>
          <View
            style={{
              flexDirection: 'column',
              height,
              justifyContent: 'center',
            }}>

            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity
              onPress={() => this._onMapPress()}
                style={[
                  styles.button,
                  { backgroundColor: 'rgba(0, 165, 188, 0.8)' },
                ]}>
                <Text style={styles.text}>Mapa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 1,
  },
});