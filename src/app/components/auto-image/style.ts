import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors, sizing} from '../../utils';

interface SubscriptionSelectorPresets {
  imageSize: any;
}

export default StyleSheet.create<SubscriptionSelectorPresets>({
  imageSize: {
    width: 25,
    height: 25,
  },
});
