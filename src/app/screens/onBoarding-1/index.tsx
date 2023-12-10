import React from 'react';
import { Image, Linking, View } from 'react-native';
import { Text, Button } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export const OnBoarding1 = ({ navigate }) => {
  return (
    <View style={styles.root}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[
          'white',
          'white',
          'rgba(137, 196, 244, .15)',
          'white',
          'white',
          'white',
          'white',
        ]}
        style={styles.linearGradientContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText} preset="black">
            Welcome to{' '}
          </Text>
          <Text style={styles.plantText} preset="black">
            PlantApp
          </Text>
        </View>
        <Text preset="black" style={styles.subtext}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
        <View style={styles.contentContainer}>
          <Image
            source={require('../../../assets/images/onBoard1.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Button
            text="Get Started"
            style={styles.button}
            onPress={navigate}
          />
          <View style={styles.tappingTextContainer}>
            <Text style={styles.termsText}>
              By tapping next, you are agreeing to PlantID
            </Text>
            <View style={styles.termsContainer}>
              <Text
                style={styles.termsText}
                underline={true}
                onPress={() =>
                  Linking.openURL('https://plantapp.app/terms/')
                }>
                Terms of Service
              </Text>
              <Text style={[styles.termsText, { marginRight: 5 }]} text=" & " />
              <Text
                style={styles.termsText}
                underline={true}
                onPress={() =>
                  Linking.openURL('https://plantapp.app/privacy/')
                }>
                Privacy Policy
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>

    </View>
  );
};
