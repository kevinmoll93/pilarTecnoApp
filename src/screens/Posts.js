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

export default class Post extends Component {
  _onPostPress = () => {
    Alert.alert('Hola', 'Ya te encuentras en Post', [
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
              onPress={() => this._onPostPress()}
                style={[
                  styles.button,
                  { backgroundColor: 'rgba(255, 165, 0, 0.5)' },
                ]}>
                <Text style={styles.text}>Posts</Text>
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