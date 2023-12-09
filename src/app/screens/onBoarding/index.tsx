import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';

import { OnBoarding1, OnBoarding2, OnBoarding3 } from '..';
import { sizing } from '../../utils';

export const OnBoarding = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;
  const scrollViewRef = useRef();

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      scrollViewRef.current.scrollTo({
        x: sizing.width * (currentStep + 1),
        animated: true,
      });
    } else {
      navigation.navigate('paywall-screen');
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      onMomentumScrollEnd={e => {
        const activeStep = Math.floor(
          e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width,
        );
        setCurrentStep(activeStep);
      }}>
      <View style={{ width: sizing.width, height: sizing.height }}>
        <OnBoarding1 navigate={nextStep} />
      </View>
      <View style={{ width: sizing.width, height: sizing.height }}>
        <OnBoarding2 navigate={nextStep} />
      </View>
      <View style={{ width: sizing.width, height: sizing.height }}>
        <OnBoarding3 navigate={nextStep} />
      </View>
    </ScrollView>
  );
};
