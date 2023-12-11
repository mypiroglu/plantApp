import React, { useState, useRef, useLayoutEffect } from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Platform } from 'react-native';
import { OnBoarding1, OnBoarding2, OnBoarding3, PaywallScreen } from '..';
import { sizing, colors } from '../../utils';

interface Props {
  navigation: any;
}

export const OnBoarding: React.FC<Props> = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const totalSteps: number = 4;
  const scrollViewRef = useRef<ScrollView>(null);

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      scrollViewRef.current?.scrollTo({
        x: sizing.width * (currentStep + 1),
        animated: true,
      });
    } else {
      navigation.navigate('bottom-tab');
    }
  };

  useLayoutEffect(() => {
    if (currentStep === 3) {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor(colors.palette.black);
    }
    else {
      StatusBar.setBarStyle('dark-content');
    }
  }, [currentStep]);

  return (
    <ScrollView
      nestedScrollEnabled={true}
      scrollEnabled={false}
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      onMomentumScrollEnd={e => {
        const activeStep = Math.floor(
          e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width,
        );
        setCurrentStep(activeStep);
      }}>
      <View style={styles.container}>
        <OnBoarding1 navigate={nextStep} />
      </View>
      <View style={styles.container}>
        <OnBoarding2 navigate={nextStep} />
      </View>
      <View style={styles.container}>
        <OnBoarding3 navigate={nextStep} />
      </View>
      <View style={styles.container}>
        <PaywallScreen navigate={nextStep} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizing.width,
    height: sizing.height,
  },
});
