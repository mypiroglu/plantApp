import React from 'react';
import { Image, View } from 'react-native';
import { Text, Button } from '../../components';
import styles from './styles';
export const OnBoarding4 = ({ navigate }) => {
  return (
    <View style={styles.root}>
      <Image
        source={require('../../../assets/images/onBoardFlower.png')}
        style={styles.image}
      />
    </View>
  );
};
