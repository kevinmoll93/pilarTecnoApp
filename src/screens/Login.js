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
import { Input, Icon, Button } from 'react-native-elements';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


export default class LogIn extends React.Component {
  render(){
    return (
<SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'column',
            height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#cceeff',
            padding: 10,
          }}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subTitle}>Inicia sesión para continuar</Text>
          <Input
            placeholder="Usuario"
            leftIcon={
              <Icon
                name={'user'}
                type="font-awesome-5"
                size={18}
                color={'#9a73ef'}
              />
            }
            inputStyle={styles.input}
          />
          <Input
            placeholder="Contraseña"
            leftIcon={
              <Icon
                name={'key'}
                type="font-awesome-5"
                size={18}
                color={'#9a73ef'}
              />
            }
            inputStyle={styles.input}
          />
          <Button title="Ingresar" buttonStyle={styles.submitButton} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    text: {
      fontSize:30,
      fontWeight:'bold',
      color:'#512E5F',
      textAlign:'center',

    },
    input: {
        fontSize:30,
        fontWeight:'bold',
        color:'#512E5F',
        textAlign:'center',
        backgroundColor:'#F4ECF7',
      },
      button: {
        margin: width / 20,
        borderRadius:15,
        justifyContent:'center',

      },
  });
