import React from 'react';
import {Image, View, SafeAreaView} from 'react-native';
import {Text, Button} from '../../components';
import styles from './styles';
import {sizing} from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';

export const OnBoarding3 = ({navigate}) => {
  const skipOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasSkippedOnboarding', 'true');
      navigate();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText} preset="black">
          Get plant{' '}
        </Text>
        <Text style={styles.plantText} preset="black">
          care guides
        </Text>
      </View>
      <Image
        source={require('../../../assets/images/Brush.png')}
        style={styles.brushImage}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <Image
          source={require('../../../assets/images/backgroundLeaf.png')}
          style={styles.imageLeaf}
          resizeMode="contain"
        />
        <Image
          source={require('../../../assets/images/artwork.png')}
          style={styles.imageArtwork}
          resizeMode="contain"
        />
        <Image
          source={require('../../../assets/images/flatPhone.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Button
          text="Continue"
          style={styles.button}
          onPress={skipOnboarding}
        />
        <View style={styles.dotContainer}>
          <View style={styles.inactiveDot} />
          <View style={styles.activeDot} />
          <View style={styles.inactiveDot} />
        </View>
      </View>
    </SafeAreaView>
  );
};
