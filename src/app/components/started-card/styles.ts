import {StyleSheet, ImageStyle, ViewStyle} from 'react-native';

interface StartedCardStyles {
  imageBackground: ImageStyle;
  contentContainer: ViewStyle;
}

export default StyleSheet.create<StartedCardStyles>({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -95,
    borderRadius: 10,
  },
});
