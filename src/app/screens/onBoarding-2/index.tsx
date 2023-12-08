import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button } from '../../components';
import styles from './styles';
import { sizing } from '../../utils';

export const OnBoarding2 = ({ navigate }) => {
  return (
    <View style={styles.root}>
      <View style={{ flexDirection: 'row' }}>
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
        <Button text="Continue" style={{ marginBottom: 20, top: "-22.5%" }} onPress={navigate} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 32,
            position: 'absolute',
            bottom: sizing.height * 0.09,
          }}>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: 'black',
              borderRadius: 4,
            }}
          />
          <View
            style={{
              width: 6,
              height: 6,
              backgroundColor: 'gray',
              borderRadius: 3,
            }}
          />
          <View
            style={{
              width: 6,
              height: 6,
              backgroundColor: 'gray',
              borderRadius: 3,
            }}
          />
        </View>
      </View>
    </View>
  );
};
