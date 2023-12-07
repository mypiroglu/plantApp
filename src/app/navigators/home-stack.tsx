import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Stack.Navigator
        initialRouteName="home-screen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home-screen" component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default HomeStack;
