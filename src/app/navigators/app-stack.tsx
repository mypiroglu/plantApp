import React, { useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { PaywallScreen } from '../screens';
import MyTabs from './bottom-tab';
import OnBoardingStack from './on-boarding-stack';
import AsyncStorage from '@react-native-community/async-storage';
import { colors } from '../utils';

const AppStack: React.FC = () => {
  const [onBoard, setOnBoard] = useState<boolean>(false);



  const checkIfOnboardingSkipped = async () => {
    try {
      const hasSkipped = await AsyncStorage.getItem('hasSkippedOnboarding');
      setOnBoard(hasSkipped === 'true' ? true : false);
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const Stack = createStackNavigator();
  useEffect(() => {
    checkIfOnboardingSkipped();
  }
    , []);
  return (
    <View style={{ flex: 1, backgroundColor: colors.palette.white }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false,
          }}>
          {!onBoard && (
            <Stack.Screen
              name="on-boarding-stack"
              component={OnBoardingStack}
            />
          )}
          <Stack.Screen name="paywall-screen" component={PaywallScreen} />
          <Stack.Screen name="bottom-tab" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppStack;
