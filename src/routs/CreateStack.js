/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import Create from '../screens/Create';
import Login from '../screens/Login';
import {createStackNavigator} from '@react-navigation/stack';

const CreateStack = createStackNavigator();

export const CreateStackScreen = () => {
  return (
    <CreateStack.Navigator headerMode="none">
      <CreateStack.Screen name="Login" component={Login} />
      <CreateStack.Screen name="Create" component={Create} />
    </CreateStack.Navigator>
  );
};
