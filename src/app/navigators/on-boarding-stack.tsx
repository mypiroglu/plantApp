import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoarding, OnBoarding1, OnBoarding2, OnBoarding3 } from '../screens';

const Stack = createNativeStackNavigator();

const OnBoardingStack = () => {
  return (

    <Stack.Navigator
      initialRouteName="home-screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="on-boarding-screen" component={OnBoarding} />
      <Stack.Screen name="on-boarding-one-screen" component={OnBoarding1} />
      <Stack.Screen name="on-boarding-two-screen" component={OnBoarding2} />
      <Stack.Screen name="on-boarding-three-screen" component={OnBoarding3} />
    </Stack.Navigator>

  );
};



export default OnBoardingStack;
