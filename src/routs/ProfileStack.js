/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator headerMode="none">
            <ProfileStack.Screen name="Profile" component={Profile} />
        </ProfileStack.Navigator>
    );
};
