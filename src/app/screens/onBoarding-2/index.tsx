import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { Text, Button } from '../../components';
import styles from './styles';

export const OnBoarding2 = ({ navigate }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText} preset="black">
          Take a photo to identify{' '}
        </Text>
        <Text style={styles.plantText} preset="black">
          identify
        </Text>
      </View>
      <Text style={styles.welcomeText} preset="black">
        the plant!
      </Text>
      <Image
        source={require('../../../assets/images/Brush.png')}
        style={styles.brushImage}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <Image
          source={require('../../../assets/images/onBoardPhone.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Button text="Continue" style={styles.button} onPress={navigate} />
        <View style={styles.dotContainer}>
          <View style={styles.activeDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
        </View>
      </View>
    </SafeAreaView>
  );
};
