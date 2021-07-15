/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import { LogIn } from '../screens/Login';

const Stack = createStackNavigator();

export default AppStack = (props) => {
   const isLoged = true;
    return (
        <Stack.Navigator headerMode="none">
            {
                isLoged ? (
                    <Stack.Screen name="AppStack" component={Tabs} />
                ) : (
                    <Stack.Screen name="LogIn" component={LogIn} />
                )
            }
        </Stack.Navigator>
    );
};
