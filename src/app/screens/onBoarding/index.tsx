import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

// Önceden oluşturduğunuz sayfalar
import { TestScreen, OnBoarding1, OnBoarding2 } from '..';
import { sizing } from '../../utils';
import { Button } from '../../components';

export const OnBoarding = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate('bottom-tab'); // Onboarding tamamlandı, ana ekrana git
    }
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      onMomentumScrollEnd={(e) => {
        const activeStep = Math.floor(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width);
        setCurrentStep(activeStep);
      }}
    >
      <View style={{ width: sizing.width, height: sizing.height }}>
        <OnBoarding1 />
      </View>
      <View style={{ width: sizing.width, height: sizing.height }}>
        <OnBoarding2 />
      </View>
      <View style={{ width: sizing.width, height: sizing.height }}>
        <TestScreen />
      </View>
      <View style={{ width: sizing.width, height: sizing.height, justifyContent: "center", alignItems: 'center', }}>
        <Button text={currentStep === totalSteps - 1 ? "Başla" : "İleri"} onPress={nextStep} />
      </View>


    </ScrollView>
  );
};


