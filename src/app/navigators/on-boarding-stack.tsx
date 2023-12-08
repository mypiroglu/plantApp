import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding, OnBoarding1, OnBoarding2} from '../screens';

const Stack = createNativeStackNavigator();

const OnBoardingStack = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Stack.Navigator
        initialRouteName="home-screen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="on-boarding-screen" component={OnBoarding} />
        <Stack.Screen name="on-boarding-one-screen" component={OnBoarding1} />
        <Stack.Screen name="on-boarding-two-screen" component={OnBoarding2} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default OnBoardingStack;
