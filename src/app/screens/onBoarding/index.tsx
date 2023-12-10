import React, {useState, useRef} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {OnBoarding1, OnBoarding2, OnBoarding3} from '..';
import {sizing} from '../../utils';

interface Props {
  navigation: any;
}

export const OnBoarding: React.FC<Props> = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const totalSteps: number = 3;
  const scrollViewRef = useRef<ScrollView>(null);

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      scrollViewRef.current?.scrollTo({
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
      <View style={styles.container}>
        <OnBoarding1 navigate={nextStep} />
      </View>
      <View style={styles.container}>
        <OnBoarding2 navigate={nextStep} />
      </View>
      <View style={styles.container}>
        <OnBoarding3 navigate={nextStep} />
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
